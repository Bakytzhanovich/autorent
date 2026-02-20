from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, List
from pydantic import BaseModel, EmailStr
from datetime import datetime
import hashlib
import secrets
import os

app = FastAPI(title="AutoRent API", version="1.0.0")

# CORS: локально + фронт на Render (FRONTEND_URL в настройках Render)
_cors_origins = ["http://localhost:3000"]
if os.getenv("FRONTEND_URL"):
    _cors_origins.append(os.getenv("FRONTEND_URL").rstrip("/"))
app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock data
MOCK_CARS = [
    {
        "id": 1,
        "brand": "Hyundai",
        "model": "Elantra",
        "category": "Standard",
        "image": "https://images.unsplash.com/photo-1606664515524-ed2f786e0c52?w=600&h=400&fit=crop",
        "tags": ["Unlimited mileage", "No deposit"],
        "pricePerDay": 8000,
        "available": True,
    },
    {
        "id": 2,
        "brand": "Mercedes-Benz",
        "model": "S63 AMG",
        "category": "Luxury",
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
        "tags": ["Unlimited mileage", "No deposit"],
        "pricePerDay": 25000,
        "available": True,
    },
    {
        "id": 3,
        "brand": "Toyota",
        "model": "Camry",
        "category": "Standard",
        "image": "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
        "tags": ["Unlimited mileage"],
        "pricePerDay": 7000,
        "available": True,
    },
    {
        "id": 4,
        "brand": "BMW",
        "model": "3 Series",
        "category": "Business",
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
        "tags": ["No deposit"],
        "pricePerDay": 12000,
        "available": True,
    },
    {
        "id": 5,
        "brand": "Tesla",
        "model": "Model 3",
        "category": "Electric",
        "image": "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop",
        "tags": ["Unlimited mileage", "No deposit"],
        "pricePerDay": 15000,
        "available": True,
    },
    {
        "id": 6,
        "brand": "Audi",
        "model": "A4",
        "category": "Business",
        "image": "https://images.unsplash.com/photo-1606664515524-ed2f786e0c52?w=600&h=400&fit=crop",
        "tags": ["Unlimited mileage"],
        "pricePerDay": 11000,
        "available": True,
    },
    {
        "id": 7,
        "brand": "Nissan",
        "model": "Sentra",
        "category": "Economy",
        "image": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
        "tags": ["No deposit"],
        "pricePerDay": 5000,
        "available": True,
    },
    {
        "id": 8,
        "brand": "Lexus",
        "model": "ES 350",
        "category": "Luxury",
        "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
        "tags": ["Unlimited mileage", "No deposit"],
        "pricePerDay": 18000,
        "available": True,
    },
]

CATEGORIES = [
    {"id": 1, "name": "Economy", "priceFrom": 5000},
    {"id": 2, "name": "Standard", "priceFrom": 8000},
    {"id": 3, "name": "Luxury", "priceFrom": 15000},
    {"id": 4, "name": "Business", "priceFrom": 12000},
    {"id": 5, "name": "Electric", "priceFrom": 10000},
]


# Pydantic models
class Car(BaseModel):
    id: int
    brand: str
    model: str
    category: str
    image: str
    tags: List[str]
    pricePerDay: int
    available: bool


class Category(BaseModel):
    id: int
    name: str
    priceFrom: int


class SearchRequest(BaseModel):
    city: str
    fromDate: str
    fromTime: str
    toDate: str
    toTime: str
    rentalType: str


class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class User(BaseModel):
    id: int
    name: str
    email: str
    phone: str


# Mock user storage (in production, use a database)
MOCK_USERS: List[dict] = []
USER_ID_COUNTER = 1


def hash_password(password: str) -> str:
    """Simple password hashing (in production, use bcrypt or similar)"""
    return hashlib.sha256(password.encode()).hexdigest()


def verify_password(password: str, hashed: str) -> bool:
    """Verify password against hash"""
    return hash_password(password) == hashed


# API endpoints
@app.get("/")
async def root():
    return {"message": "AutoRent API", "version": "1.0.0"}


@app.get("/cars", response_model=List[Car])
async def get_cars(category: Optional[str] = None):
    """
    Get list of available cars with optional filtering by category
    """
    if category:
        filtered_cars = [car for car in MOCK_CARS if car["category"] == category]
        return filtered_cars
    return MOCK_CARS


@app.get("/categories", response_model=List[Category])
async def get_categories():
    """
    Get list of car categories
    """
    return CATEGORIES


@app.post("/search", response_model=List[Car])
async def search_cars(search_params: SearchRequest):
    """
    Search for cars based on location, dates, and rental type
    """
    # In a real application, this would query a database
    # For now, we'll return all available cars
    # You can add filtering logic here based on search_params
    available_cars = [car for car in MOCK_CARS if car["available"]]
    return available_cars


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.post("/auth/register")
async def register(user_data: RegisterRequest):
    """
    Register a new user
    """
    # Check if user already exists
    for user in MOCK_USERS:
        if user["email"] == user_data.email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Пользователь с таким email уже существует"
            )
    
    # Validate password length
    if len(user_data.password) < 6:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Пароль должен быть не менее 6 символов"
        )
    
    # Create new user
    new_user = {
        "id": USER_ID_COUNTER,
        "name": user_data.name,
        "email": user_data.email,
        "phone": user_data.phone,
        "password_hash": hash_password(user_data.password),
        "created_at": datetime.now().isoformat()
    }
    
    MOCK_USERS.append(new_user)
    global USER_ID_COUNTER
    USER_ID_COUNTER += 1
    
    return {
        "message": "Регистрация успешна",
        "user": {
            "id": new_user["id"],
            "name": new_user["name"],
            "email": new_user["email"],
            "phone": new_user["phone"]
        }
    }


@app.post("/auth/login")
async def login(credentials: LoginRequest):
    """
    Login user and return access token
    """
    # Find user by email
    user = None
    for u in MOCK_USERS:
        if u["email"] == credentials.email:
            user = u
            break
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверный email или пароль"
        )
    
    # Verify password
    if not verify_password(credentials.password, user["password_hash"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверный email или пароль"
        )
    
    # Generate simple token (in production, use JWT)
    token = secrets.token_urlsafe(32)
    
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"],
            "phone": user["phone"]
        }
    }


@app.post("/auth/forgot-password")
async def forgot_password(data: ForgotPasswordRequest):
    """
    Request password reset. In production, send an email with reset link.
    For now returns success for any existing email (no email sent).
    """
    for u in MOCK_USERS:
        if u["email"] == data.email:
            # In production: generate token, send email, store token with expiry
            return {"message": "Если аккаунт с таким email существует, на него отправлена ссылка для сброса пароля."}
    # Always return same message for security (don't reveal if email exists)
    return {"message": "Если аккаунт с таким email существует, на него отправлена ссылка для сброса пароля."}
