"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface SearchParams {
  city: string;
  fromDate: string;
  toDate: string;
  fromTime: string;
  toTime: string;
  rentalType: "daily" | "monthly";
}

interface SearchContextType {
  searchParams: SearchParams | null;
  setSearchParams: (params: SearchParams) => void;
  rentalDays: number;
}

const defaultParams: SearchParams = {
  city: "Almaty",
  fromDate: "",
  toDate: "",
  fromTime: "10:00",
  toTime: "10:00",
  rentalType: "daily",
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

function computeRentalDays(fromDate: string, toDate: string): number {
  if (!fromDate || !toDate) return 1;
  const from = new Date(fromDate + "T12:00:00");
  const to = new Date(toDate + "T12:00:00");
  const diff = Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 1;
}

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParamsState] = useState<SearchParams | null>(null);

  const setSearchParams = (params: SearchParams) => {
    setSearchParamsState(params);
  };

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
