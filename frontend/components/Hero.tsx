"use client";

import { MapPin, Search, Car, Truck, Wrench, Bike } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation, getMonthsShort } from "@/lib/translations";
import { useSearch, type VehicleType } from "@/contexts/SearchContext";

const cityLabels: Record<string, string> = {
  Almaty: "Алматы",
  Astana: "Астана (Нур-Султан)",
  Shymkent: "Шымкент",
  Karaganda: "Караганда",
  Aktobe: "Актобе",
  Taraz: "Тараз",
  Pavlodar: "Павлодар",
  "Ust-Kamenogorsk": "Усть-Каменогорск",
  Semey: "Семей",
  Oral: "Орал (Уральск)",
  Kostanay: "Костанай",
  Kyzylorda: "Кызылорда",
  Petropavl: "Петропавловск",
  Atyrau: "Атырау",
  Aktau: "Актау",
  Temirtau: "Темиртау",
  Turkestan: "Туркестан",
  Kokshetau: "Кокшетау",
  Ekibastuz: "Экибастуз",
  Rudny: "Рудный",
  Taldykorgan: "Талдыкорган",
  Zhezkazgan: "Жезказган",
  Kentau: "Кентау",
  Balqash: "Балхаш",
  Sarkand: "Сарканд",
  Kapshagay: "Капшагай",
  Ridder: "Риддер",
  Shakhtinsk: "Шахтинск",
  Stepnogorsk: "Степногорск",
  Zaysan: "Зайсан",
  Zharkent: "Жаркент",
  Ayagoz: "Аягоз",
  Aksu: "Аксу",
  Aksay: "Аксай",
  Atbasar: "Атбасар",
  Arqalyq: "Аркалык",
  Arys: "Арыс",
  Zhanaozen: "Жанаозен",
  Kaskelen: "Каскелен",
  Shchuchinsk: "Щучинск",
  Shu: "Шу",
  Tekeli: "Текели",
  Saryagash: "Сарыагаш",
  Satpayev: "Сатпаев",
  Shardara: "Шардара",
  Ushtobe: "Уштобе",
  Baikonur: "Байконур",
  Kulsary: "Кульсары",
  Makinsk: "Макинск",
  Merke: "Мерке",
};

function formatDisplayDate(dateStr: string, monthsShort: string[]): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr + "T12:00:00");
  const day = d.getDate();
  const month = monthsShort[d.getMonth()] || "";
  return `${day} ${month}`;
}

export default function Hero() {
  const { language } = useLanguage();
  const { searchParams, setSearchParams } = useSearch();
  const [rentalType, setRentalType] = useState<"daily" | "monthly">("daily");
  const [city, setCity] = useState("Almaty");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const defaultFromTime = "10:00";
  const defaultToTime = "10:00";

  useEffect(() => {
    if (searchParams) {
      setCity(searchParams.city);
      setRentalType(searchParams.rentalType);
      setFromDate(searchParams.fromDate || "");
      setToDate(searchParams.toDate || "");
    }
  }, [searchParams]);

  const handleSearch = () => {
    setSearchParams({
      city,
      fromDate: fromDate || new Date().toISOString().slice(0, 10),
      toDate: toDate || fromDate || new Date().toISOString().slice(0, 10),
      fromTime: defaultFromTime,
      toTime: defaultToTime,
      rentalType,
      vehicleType: searchParams?.vehicleType ?? null,
    });
    const el = document.getElementById("car-results");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeVehicleType = searchParams?.vehicleType ?? null;

  const handleCategoryClick = (vehicleType: NonNullable<VehicleType>) => {
    const base = searchParams ?? {
      city,
      fromDate: fromDate || new Date().toISOString().slice(0, 10),
      toDate: toDate || fromDate || new Date().toISOString().slice(0, 10),
      fromTime: defaultFromTime,
      toTime: defaultToTime,
      rentalType,
      vehicleType: null,
    };
    const newType = activeVehicleType === vehicleType ? null : vehicleType;
    setSearchParams({ ...base, vehicleType: newType });
    document.getElementById("car-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cityDisplayName = cityLabels[city] || city;
  const fromDateRef = useRef<HTMLInputElement>(null);
  const toDateRef = useRef<HTMLInputElement>(null);

  return (
    <section id="search-form" className="relative bg-[#F5F5F5] py-12 sm:py-16 lg:py-20 scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(252, 63, 29, 0.03) 0%, rgba(252, 63, 29, 0.01) 50%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full translate-y-1/2 -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle, rgba(252, 63, 29, 0.02) 0%, rgba(252, 63, 29, 0.005) 50%, transparent 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight font-sans">
              {getTranslation(language, "hero.title")}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-sans">
              {getTranslation(language, "hero.subtitle")}
            </p>
          </div>

          <div className="flex gap-3 mb-8 justify-center">
            <button
              onClick={() => setRentalType("daily")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 font-sans ${
                rentalType === "daily"
                  ? "bg-[#eb5d47] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
              }`}
            >
              {getTranslation(language, "hero.daily")}
            </button>
            <button
              onClick={() => setRentalType("monthly")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-200 font-sans ${
                rentalType === "monthly"
                  ? "bg-[#eb5d47] text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
              }`}
            >
              {getTranslation(language, "hero.monthly")}
            </button>
          </div>

          {/* Search Form — three blocks */}
          <div className="space-y-4 font-sans">
            {/* Block 1: Location (full width) */}
            <label className="block w-full relative">
              <div className="relative bg-white rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] flex items-center gap-4 px-5 py-4 cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow">
                <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-0.5">
                    {getTranslation(language, "hero.locationPlaceholder")}
                  </div>
                  <div className="text-base sm:text-lg font-bold text-gray-900 truncate">
                    {cityDisplayName}
                  </div>
                </div>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  aria-label="Выбор города"
                >
                  <option value="Almaty">Алматы</option>
                  <option value="Astana">Астана (Нур-Султан)</option>
                  <option value="Shymkent">Шымкент</option>
                  <option value="Karaganda">Караганда</option>
                  <option value="Aktobe">Актобе</option>
                  <option value="Taraz">Тараз</option>
                  <option value="Pavlodar">Павлодар</option>
                  <option value="Ust-Kamenogorsk">Усть-Каменогорск</option>
                  <option value="Semey">Семей</option>
                  <option value="Oral">Орал (Уральск)</option>
                  <option value="Kostanay">Костанай</option>
                  <option value="Kyzylorda">Кызылорда</option>
                  <option value="Petropavl">Петропавловск</option>
                  <option value="Atyrau">Атырау</option>
                  <option value="Aktau">Актау</option>
                  <option value="Temirtau">Темиртау</option>
                  <option value="Turkestan">Туркестан</option>
                  <option value="Kokshetau">Кокшетау</option>
                  <option value="Ekibastuz">Экибастуз</option>
                  <option value="Rudny">Рудный</option>
                  <option value="Taldykorgan">Талдыкорган</option>
                  <option value="Zhezkazgan">Жезказган</option>
                  <option value="Kentau">Кентау</option>
                  <option value="Balqash">Балхаш</option>
                  <option value="Sarkand">Сарканд</option>
                  <option value="Kapshagay">Капшагай</option>
                  <option value="Ridder">Риддер</option>
                  <option value="Shakhtinsk">Шахтинск</option>
                  <option value="Stepnogorsk">Степногорск</option>
                  <option value="Zaysan">Зайсан</option>
                  <option value="Zharkent">Жаркент</option>
                  <option value="Ayagoz">Аягоз</option>
                  <option value="Aksu">Аксу</option>
                  <option value="Aksay">Аксай</option>
                  <option value="Atbasar">Атбасар</option>
                  <option value="Arqalyq">Аркалык</option>
                  <option value="Arys">Арыс</option>
                  <option value="Zhanaozen">Жанаозен</option>
                  <option value="Kaskelen">Каскелен</option>
                  <option value="Shchuchinsk">Щучинск</option>
                  <option value="Shu">Шу</option>
                  <option value="Tekeli">Текели</option>
                  <option value="Saryagash">Сарыагаш</option>
                  <option value="Satpayev">Сатпаев</option>
                  <option value="Shardara">Шардара</option>
                  <option value="Ushtobe">Уштобе</option>
                  <option value="Baikonur">Байконур</option>
                  <option value="Kulsary">Кульсары</option>
                  <option value="Makinsk">Макинск</option>
                  <option value="Merke">Мерке</option>
                </select>
              </div>
            </label>

            {/* Block 2 & 3: From / To date and time (two equal blocks in one row) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* From block */}
              <div className="bg-white rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-4 sm:p-5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="cursor-pointer"
                    onClick={() => fromDateRef.current?.showPicker?.()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") fromDateRef.current?.showPicker?.();
                    }}
                  >
                    <div className="text-xs text-gray-500 mb-1">
                      {getTranslation(language, "hero.from")}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-gray-900">
                      {formatDisplayDate(fromDate, getMonthsShort(language)) || "—"}
                    </div>
                    <input
                      ref={fromDateRef}
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="sr-only"
                      aria-label="Дата начала"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      {getTranslation(language, "hero.time")}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-gray-900">
                      {defaultFromTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* To block */}
              <div className="bg-white rounded-[24px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-4 sm:p-5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="cursor-pointer"
                    onClick={() => toDateRef.current?.showPicker?.()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toDateRef.current?.showPicker?.();
                    }}
                  >
                    <div className="text-xs text-gray-500 mb-1">
                      {getTranslation(language, "hero.to")}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-gray-900">
                      {formatDisplayDate(toDate, getMonthsShort(language)) || "—"}
                    </div>
                    <input
                      ref={toDateRef}
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="sr-only"
                      aria-label={getTranslation(language, "hero.endDateAria")}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      {getTranslation(language, "hero.time")}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-gray-900">
                      {defaultToTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search button */}
            <button
              type="button"
              onClick={handleSearch}
              className="w-full bg-[#eb5d47] text-white font-semibold py-4 px-6 rounded-[24px] flex items-center justify-center gap-3 shadow-[0_2px_12px_rgba(235,93,71,0.35)] hover:shadow-[0_4px_20px_rgba(235,93,71,0.45)] hover:bg-[#e04d36] active:scale-[0.99] transition-all duration-200 text-lg font-sans"
            >
              <Search className="w-5 h-5 flex-shrink-0" />
              <span>{getTranslation(language, "hero.search")}</span>
            </button>
          </div>

          {/* Vehicle Type Categories */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Легковое авто */}
            <button
              type="button"
              onClick={() => handleCategoryClick("passenger")}
              className={`rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-200 hover:shadow-md group ${
                activeVehicleType === "passenger" ? "bg-[#eb5d47]/10 ring-2 ring-[#eb5d47]" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <Car 
                  className="w-full h-full text-[#eb5d47]" 
                  strokeWidth={1.5}
                  style={{ stroke: '#eb5d47', fill: 'none' }}
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                {getTranslation(language, "hero.vehicleTypes.passengerCar")}
              </span>
            </button>

            {/* Грузовое авто */}
            <button
              type="button"
              onClick={() => handleCategoryClick("truck")}
              className={`rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-200 hover:shadow-md group ${
                activeVehicleType === "truck" ? "bg-[#eb5d47]/10 ring-2 ring-[#eb5d47]" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <Truck 
                  className="w-full h-full text-[#eb5d47]" 
                  strokeWidth={1.5}
                  style={{ stroke: '#eb5d47', fill: 'none' }}
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                {getTranslation(language, "hero.vehicleTypes.truck")}
              </span>
            </button>

            {/* Спецтехника */}
            <button
              type="button"
              onClick={() => handleCategoryClick("special")}
              className={`rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-200 hover:shadow-md group ${
                activeVehicleType === "special" ? "bg-[#eb5d47]/10 ring-2 ring-[#eb5d47]" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <Wrench 
                  className="w-full h-full text-[#eb5d47]" 
                  strokeWidth={1.5}
                  style={{ stroke: '#eb5d47', fill: 'none' }}
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                {getTranslation(language, "hero.vehicleTypes.specialEquipment")}
              </span>
            </button>

            {/* Самокаты */}
            <button
              type="button"
              onClick={() => handleCategoryClick("scooters")}
              className={`rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-200 hover:shadow-md group ${
                activeVehicleType === "scooters" ? "bg-[#eb5d47]/10 ring-2 ring-[#eb5d47]" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <Bike 
                  className="w-full h-full text-[#eb5d47]" 
                  strokeWidth={1.5}
                  style={{ stroke: '#eb5d47', fill: 'none' }}
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                {getTranslation(language, "hero.vehicleTypes.scooters")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
