"use client";

import { MessageCircle, ArrowRight, Heart, Map, X, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useSearch } from "@/contexts/SearchContext";

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  image: string;
  seats: number;
  transmission: string;
  consumption: string;
  engineVolume: string;
  cities: string[];
  category: string;
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  prices: {
    "1": number;
    "2-4": number;
    "5-15": number;
    "16-30": number;
  };
}

// Координаты локаций в Алматы
const almatyLocations = [
  { lat: 43.238949, lng: 76.889709, address: "пр. Абая 150" },
  { lat: 43.250000, lng: 76.920000, address: "ул. Сатпаева 30" },
  { lat: 43.220000, lng: 76.850000, address: "пр. Достык 52" },
  { lat: 43.260000, lng: 76.950000, address: "ул. Розыбакиева 247" },
];

const mockCars: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Land Cruiser 300",
    year: 2024,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    seats: 7,
    transmission: "Automatic",
    consumption: "15 L/100 km",
    engineVolume: "3.5L",
    cities: ["Almaty", "Astana", "Shymkent"],
    category: "SUV",
    location: almatyLocations[0],
    prices: {
      "1": 180000,
      "2-4": 170000,
      "5-15": 160000,
      "16-30": 150000,
    },
  },
  {
    id: 2,
    brand: "Lixiang",
    model: "L6",
    year: 2024,
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "E-CVT",
    consumption: "1.3 L/100km + 18 kWh/100km",
    engineVolume: "1.5L + Electric Motor",
    cities: ["Almaty", "Astana"],
    category: "Sedan",
    location: almatyLocations[1],
    prices: {
      "1": 75000,
      "2-4": 70000,
      "5-15": 65000,
      "16-30": 60000,
    },
  },
  {
    id: 3,
    brand: "Changan",
    model: "Deepal S09",
    year: 2026,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
    seats: 6,
    transmission: "Automatic (CVT)",
    consumption: "~6.9 L/100 km",
    engineVolume: "1.5L (EREV)",
    cities: ["Almaty", "Karaganda"],
    category: "SUV",
    location: almatyLocations[2],
    prices: {
      "1": 90000,
      "2-4": 85000,
      "5-15": 80000,
      "16-30": 75000,
    },
  },
  {
    id: 4,
    brand: "Hyundai",
    model: "Elantra",
    year: 2024,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786e0c52?w=600&h=400&fit=crop",
    seats: 5,
    transmission: "Automatic",
    consumption: "7.6 L/100km",
    engineVolume: "2.0L",
    cities: ["Almaty", "Astana", "Shymkent", "Karaganda", "Aktobe"],
    category: "Sedan",
    location: almatyLocations[3],
    prices: {
      "1": 25000,
      "2-4": 23000,
      "5-15": 21000,
      "16-30": 19000,
    },
  },
  // Грузовые автомобили
  {
    id: 5,
    brand: "GAZ",
    model: "Gazelle Next",
    year: 2023,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
    seats: 3,
    transmission: "Manual",
    consumption: "12 L/100 km",
    engineVolume: "2.7L Diesel",
    cities: ["Almaty", "Astana", "Shymkent", "Karaganda"],
    category: "Truck",
    location: almatyLocations[0],
    prices: {
      "1": 45000,
      "2-4": 42000,
      "5-15": 40000,
      "16-30": 38000,
    },
  },
  {
    id: 6,
    brand: "KAMAZ",
    model: "5490",
    year: 2022,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&h=400&fit=crop",
    seats: 2,
    transmission: "Manual",
    consumption: "32 L/100 km",
    engineVolume: "12.9L Diesel",
    cities: ["Almaty", "Astana", "Shymkent", "Atyrau", "Aktau"],
    category: "Truck",
    location: almatyLocations[1],
    prices: {
      "1": 95000,
      "2-4": 90000,
      "5-15": 85000,
      "16-30": 80000,
    },
  },
  {
    id: 7,
    brand: "Isuzu",
    model: "NPR 75",
    year: 2023,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    seats: 3,
    transmission: "Manual",
    consumption: "14 L/100 km",
    engineVolume: "5.2L Diesel",
    cities: ["Almaty", "Astana", "Shymkent", "Karaganda", "Pavlodar"],
    category: "Truck",
    location: almatyLocations[2],
    prices: {
      "1": 65000,
      "2-4": 60000,
      "5-15": 58000,
      "16-30": 55000,
    },
  },
];

function getTariffForDays(days: number): "1" | "2-4" | "5-15" | "16-30" {
  if (days >= 16) return "16-30";
  if (days >= 5) return "5-15";
  if (days >= 2) return "2-4";
  return "1";
}


export default function PartnerCars() {
  const { language } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { searchParams, rentalDays } = useSearch();
  const [selectedTariff, setSelectedTariff] = useState<{ [key: number]: string }>({});
  const [showMapModal, setShowMapModal] = useState(false);

  const filteredCars = useMemo(() => {
    let cars = mockCars;
    if (searchParams) {
      cars = cars.filter((car) => car.cities.includes(searchParams.city));
      const vt = searchParams.vehicleType;
      if (vt === "passenger") {
        cars = cars.filter((car) => ["Sedan", "SUV"].includes(car.category));
      } else if (vt === "truck") {
        cars = cars.filter((car) => car.category === "Truck");
      } else if (vt === "special") {
        cars = cars.filter((car) => car.category === "Special");
      } else if (vt === "scooters") {
        cars = cars.filter((car) => car.category === "Scooter");
      }
    }
    return cars;
  }, [searchParams]);

  const handleMapClick = () => {
    setShowMapModal(true);
  };

  // Группируем машины по локациям для показа количества
  const carsByLocation = useMemo(() => {
    if (!searchParams) return {};
    const grouped: Record<string, { cars: Car[]; location: { lat: number; lng: number; address: string } }> = {};
    filteredCars.forEach((car) => {
      if (car.location) {
        const key = `${car.location.lat},${car.location.lng}`;
        if (!grouped[key]) {
          grouped[key] = { cars: [], location: car.location };
        }
        grouped[key].cars.push(car);
      }
    });
    return grouped;
  }, [filteredCars, searchParams]);

  // Получаем центр карты (первая локация или центр города)
  const getMapCenter = () => {
    if (Object.keys(carsByLocation).length > 0) {
      const firstLocation = Object.values(carsByLocation)[0].location;
      return `${firstLocation.lat},${firstLocation.lng}`;
    }
    // Центр Алматы по умолчанию
    return "43.238949,76.889709";
  };

  // URL для Google Maps embed (простая карта города)
  const getGoogleMapsUrl = () => {
    const center = getMapCenter();
    return `https://www.google.com/maps?q=${center}&output=embed&zoom=12`;
  };

  const handleTariffChange = (carId: number, tariff: string) => {
    setSelectedTariff((prev) => ({
      ...prev,
      [carId]: tariff,
    }));
  };

  const defaultTariff = getTariffForDays(rentalDays);
  const getSelectedTariff = (carId: number) => selectedTariff[carId] || defaultTariff;

  const scrollToEditFilter = () => {
    document.getElementById("search-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="car-results" className="py-6 bg-white min-h-screen scroll-mt-4">
      <div className="container mx-auto px-4">
        {searchParams && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-600">
              {filteredCars.length === 0
                ? getTranslation(language, "partnerCars.noResults")
                : getTranslation(language, "partnerCars.foundCount").replace("{count}", String(filteredCars.length)) + (searchParams.city ? ` · ${searchParams.city}` : "")}
            </p>
            <button
              type="button"
              onClick={scrollToEditFilter}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-xl border border-primary/30 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {getTranslation(language, "partnerCars.editFilter")}
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {filteredCars.map((car) => {
            const currentTariff = getSelectedTariff(car.id);
            const currentPrice = car.prices[currentTariff as keyof typeof car.prices];
            
            return (
              <div
                key={car.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full min-h-[600px]"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                  {/* Carousel Dots */}
                  <div className="absolute top-2 left-2 flex gap-1 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  </div>
                  
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(car.id);
                    }}
                    className="absolute top-2 right-2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-sm"
                    aria-label="Добавить в избранное"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all ${
                        isFavorite(car.id)
                          ? "fill-primary text-primary"
                          : "text-gray-600"
                      }`}
                    />
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
                  {/* Car Name */}
                  <h3 className="text-gray-900 font-bold text-lg mb-3">
                    {car.brand} {car.model} {car.year}
                  </h3>
                  
                  {/* Specifications Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4 min-h-[60px]">
                    <span className="bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded">
                      {car.seats} {getTranslation(language, "common.seats")}
                    </span>
                    <span className="bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded">
                      {getTranslation(language, "common.transmission")}: {car.transmission}
                    </span>
                    <span className="bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded">
                      {getTranslation(language, "common.consumption")}: {car.consumption}
                    </span>
                    <span className="bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded">
                      {getTranslation(language, "common.engineVolume")}: {car.engineVolume}
                    </span>
                  </div>
                  
                  {/* Tariff Section */}
                  <div className="mb-3">
                    <div className="text-gray-600 text-xs mb-2">{getTranslation(language, "common.byTariff")}</div>
                    <div className="flex flex-wrap gap-1">
                      {(["1", "2-4", "5-15", "16-30"] as const).map((tariff) => (
                        <button
                          key={tariff}
                          onClick={() => handleTariffChange(car.id, tariff)}
                          className={`text-xs px-2 py-1 rounded transition-all ${
                            currentTariff === tariff
                              ? "bg-gray-900 text-white font-semibold"
                              : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          {tariff === "1" 
                            ? `1 ${getTranslation(language, "common.day")}` 
                            : `${tariff} ${getTranslation(language, "common.days")}`}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-3">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {currentPrice.toLocaleString()} ₸
                    </div>
                  </div>
                  
                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>
                  
                  {/* View Deal Button */}
                  <div className="mt-auto pt-2">
                    <Link href={`/car/${car.id}`}>
                      <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
                        <span>{getTranslation(language, "common.viewDeal")}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                    
                    {/* WhatsApp Button - Only on last card */}
                    {car.id === filteredCars[filteredCars.length - 1].id && (
                      <div className="mt-2 flex justify-end">
                        <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                          <MessageCircle className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Круглая кнопка «Карта» слева в стиле ИИ-ассистента (всегда видна при поиске) */}
      {searchParams && (
        <button
          type="button"
          onClick={handleMapClick}
          className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-white hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
          aria-label={getTranslation(language, "partnerCars.showOnMap")}
        >
          <Map className="w-6 h-6 shrink-0" stroke="#FC3F1D" strokeWidth={2} fill="none" />
        </button>
      )}

      {/* Модальное окно с картой */}
      {showMapModal && searchParams && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowMapModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Заголовок */}
            <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Map className="w-6 h-6 text-primary" />
                  {getTranslation(language, "partnerCars.showOnMap")}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {getTranslation(language, "partnerCars.foundCount").replace("{count}", String(filteredCars.length))}
                  {searchParams.city && ` · ${searchParams.city}`}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowMapModal(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Контент: карта и список локаций */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              {/* Карта */}
              <div className="flex-1 min-h-[300px] lg:min-h-0 relative bg-gray-100">
                {Object.keys(carsByLocation).length > 0 ? (
                  <iframe
                    title="Карта с локациями машин"
                    src={getGoogleMapsUrl()}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Map className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Карта загружается...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Список локаций */}
              <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-200 overflow-y-auto bg-gray-50">
                <div className="p-4 lg:p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {getTranslation(language, "partnerCars.locations")} ({Object.keys(carsByLocation).length})
                  </h3>
                  <div className="space-y-3">
                    {Object.values(carsByLocation).map((group, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary transition-colors cursor-pointer"
                        onClick={() => {
                          const url = `https://www.google.com/maps?q=${group.location.lat},${group.location.lng}`;
                          window.open(url, "_blank", "noopener,noreferrer");
                        }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 mb-1">{group.location.address}</div>
                            <div className="text-xs text-gray-500">
                              {group.location.lat.toFixed(6)}, {group.location.lng.toFixed(6)}
                            </div>
                          </div>
                          <div className="ml-3 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                            {group.cars.length}
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="text-xs text-gray-600 mb-2">{getTranslation(language, "partnerCars.carsAtLocation")}:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {group.cars.map((car) => (
                              <span
                                key={car.id}
                                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                              >
                                {car.brand} {car.model}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {Object.keys(carsByLocation).length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-8">
                      Локации не указаны для машин
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
