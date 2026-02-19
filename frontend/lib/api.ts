import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface Car {
  id: number;
  brand: string;
  model: string;
  category: string;
  image: string;
  tags: string[];
  pricePerDay: number;
  available: boolean;
}

export interface Category {
  id: number;
  name: string;
  priceFrom: number;
}

export interface SearchParams {
  city: string;
  fromDate: string;
  fromTime: string;
  toDate: string;
  toTime: string;
  rentalType: "daily" | "monthly";
}

export const carApi = {
  getCars: async (category?: string): Promise<Car[]> => {
    const params = category ? { category } : {};
    const response = await api.get("/cars", { params });
    return response.data;
  },

  getCategories: async (): Promise<Category[]> => {
    const response = await api.get("/categories");
    return response.data;
  },

  searchCars: async (params: SearchParams): Promise<Car[]> => {
    const response = await api.post("/search", params);
    return response.data;
  },
};
