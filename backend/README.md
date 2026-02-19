# AutoRent Backend API

FastAPI backend для сервиса аренды автомобилей.

## Установка

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Запуск

```bash
uvicorn main:app --reload --port 8000
```

## API Документация

После запуска сервера доступна автоматическая документация:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Endpoints

### GET /cars
Получить список всех доступных автомобилей.

**Query параметры:**
- `category` (optional): Фильтр по категории (Economy, Standard, Luxury, Business, Electric)

**Пример:**
```bash
GET /cars?category=Luxury
```

### GET /categories
Получить список всех категорий автомобилей.

### POST /search
Поиск автомобилей по параметрам.

**Body:**
```json
{
  "city": "Almaty",
  "fromDate": "2026-02-20",
  "fromTime": "10:00",
  "toDate": "2026-02-23",
  "toTime": "18:00",
  "rentalType": "daily"
}
```

### GET /health
Проверка работоспособности API.
