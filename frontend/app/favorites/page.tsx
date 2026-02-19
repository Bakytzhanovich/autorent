"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowLeft, ArrowRight } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock cars data - same as in PartnerCars
const mockCars: { [key: number]: any } = {
  1: {
    id: 1,
    brand: "Toyota",
    model: "Land Cruiser 300",
    year: 2024,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    seats: 7,
    transmission: "Automatic",
    consumption: "15 L/100 km",
    engineVolume: "3.5L",
    prices: {
      "1": 180000,
      "2-4": 170000,
      "5-15": 160000,
      "16-30": 150000,
    },
  },
  2: {
    id: 2,
    brand: "Lixiang",
    model: "L6",
    year: 2024,
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "E-CVT",
    consumption: "1.3 L/100km + 18 kWh/100km",
    engineVolume: "1.5L + Electric Motor",
    prices: {
      "1": 75000,
      "2-4": 70000,
      "5-15": 65000,
      "16-30": 60000,
    },
  },
  3: {
    id: 3,
    brand: "Changan",
    model: "Deepal S09",
    year: 2026,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop",
    seats: 6,
    transmission: "Automatic (CVT)",
    consumption: "~6.9 L/100 km",
    engineVolume: "1.5L (EREV)",
    prices: {
      "1": 90000,
      "2-4": 85000,
      "5-15": 80000,
      "16-30": 75000,
    },
  },
  4: {
    id: 4,
    brand: "Hyundai",
    model: "Elantra",
    year: 2024,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786e0c52?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Automatic",
    consumption: "7.6 L/100km",
    engineVolume: "2.0L",
    prices: {
      "1": 25000,
      "2-4": 23000,
      "5-15": 21000,
      "16-30": 19000,
    },
  },
};

export default function FavoritesPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteCars = favorites
    .map((id) => mockCars[id])
    .filter((car) => car !== undefined);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{getTranslation(language, "auth.backToHome")}</span>
        </Link>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {getTranslation(language, "header.favorites")}
          </h1>
          <p className="text-gray-600">
            {favoriteCars.length === 0
              ? getTranslation(language, "favorites.empty")
              : `${favoriteCars.length} ${getTranslation(language, "favorites.count")}`}
          </p>
        </div>

        {/* Favorites List */}
        {favoriteCars.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {getTranslation(language, "favorites.emptyTitle")}
            </h2>
            <p className="text-gray-600 mb-8">
              {getTranslation(language, "favorites.emptyDescription")}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 gradient-primary text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              <span>{getTranslation(language, "favorites.browseCars")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className="absolute top-2 right-2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-sm"
                    aria-label="Удалить из избранного"
                  >
                    <Heart className="w-5 h-5 fill-primary text-primary" />
                  </button>
                  
                  <Image
                    src={car.image}
                    alt={`${car.brand} ${car.model} ${car.year}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-gray-900 font-bold text-lg mb-3">
                    {car.brand} {car.model} {car.year}
                  </h3>

                  {/* Specifications */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded">
                      {car.seats} {getTranslation(language, "common.seats")}
                    </span>
                    <span className="bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded">
                      {getTranslation(language, "common.transmission")}: {car.transmission}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {car.prices["1"].toLocaleString()} ₸
                    </div>
                    <div className="text-sm text-gray-500">
                      {getTranslation(language, "common.from")} {getTranslation(language, "common.perDay")}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-grow"></div>

                  {/* View Deal Button */}
                  <div className="mt-auto pt-2">
                    <Link href={`/car/${car.id}`}>
                      <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
                        <span>{getTranslation(language, "common.viewDeal")}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
