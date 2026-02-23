"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type VehicleType = "passenger" | "truck" | "special" | "scooters" | null;

export interface SearchParams {
  city: string;
  fromDate: string;
  toDate: string;
  fromTime: string;
  toTime: string;
  rentalType: "daily" | "monthly";
  vehicleType?: VehicleType;
}

interface SearchContextType {
  searchParams: SearchParams | null;
  setSearchParams: (params: SearchParams | ((prev: SearchParams) => SearchParams)) => void;
  rentalDays: number;
}

const STORAGE_KEY = "autorent_search_params";

const defaultParams: SearchParams = {
  city: "Almaty",
  fromDate: "",
  toDate: "",
  fromTime: "10:00",
  toTime: "10:00",
  rentalType: "daily",
  vehicleType: null,
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

function computeRentalDays(fromDate: string, toDate: string): number {
  if (!fromDate || !toDate) return 1;
  const from = new Date(fromDate + "T12:00:00");
  const to = new Date(toDate + "T12:00:00");
  const diff = Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 1;
}

function loadFromStorage(): SearchParams | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as SearchParams;
    if (parsed?.city) return parsed;
  } catch {}
  return null;
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParamsState] = useState<SearchParams | null>(null);

  useEffect(() => {
    const saved = loadFromStorage();
    if (saved) setSearchParamsState(saved);
  }, []);

  const setSearchParams = useCallback((paramsOrUpdater: SearchParams | ((prev: SearchParams) => SearchParams)) => {
    setSearchParamsState((prev) => {
      const next = typeof paramsOrUpdater === "function"
        ? paramsOrUpdater(prev ?? defaultParams)
        : paramsOrUpdater;
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      }
      return next;
    });
  }, []);

  const effective = searchParams ?? defaultParams;
  const rentalDays = computeRentalDays(effective.fromDate, effective.toDate);

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams,
        rentalDays: searchParams ? rentalDays : 1,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
