"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin, Check, ChevronRight, User, Car, FileText, Shield, Fuel, Route, Heart, Share2, Maximize2, PiggyBank, Tag, X } from "lucide-react";
import { useState } from "react";
import AIAssistant from "@/components/AIAssistant";
import { useFavorites } from "@/contexts/FavoritesContext";

// Mock data - в реальном приложении это будет из API
const mockCars: { [key: number]: any } = {
  1: {
    id: 1,
    brand: "Toyota",
    model: "Land Cruiser 300",
    year: 2024,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    type: "SUV",
    seats: 7,
    transmission: "Automatic",
    consumption: "15 L/100 km",
    engineVolume: "3.5L",
    pricePerDay: 18000,
    mileageIncluded: 900,
    mileagePricePerKm: 50,
    fuelPolicy: "Как получили, так и вернуть",
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
    type: "Sedan",
    seats: 5,
    transmission: "E-CVT",
    consumption: "1.3 L/100km + 18 kWh/100km",
    engineVolume: "1.5L + Electric Motor",
    pricePerDay: 18000,
    mileageIncluded: 900,
    mileagePricePerKm: 50,
    fuelPolicy: "Как получили, так и вернуть",
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
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
    type: "SUV",
    seats: 6,
    transmission: "Automatic (CVT)",
    consumption: "~6.9 L/100 km",
    engineVolume: "1.5L (EREV)",
    pricePerDay: 18000,
    mileageIncluded: 900,
    mileagePricePerKm: 50,
    fuelPolicy: "Как получили, так и вернуть",
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
    model: "Accent",
    year: 2021,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786e0c52?w=600&h=400&fit=crop",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    consumption: "7.6 L/100km",
    engineVolume: "2.0L",
    pricePerDay: 18000,
    mileageIncluded: 900,
    mileagePricePerKm: 50,
    fuelPolicy: "Как получили, так и вернуть",
    prices: {
      "1": 25000,
      "2-4": 23000,
      "5-15": 21000,
      "16-30": 19000,
    },
  },
};

export default function CarDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const carId = Number(params.id);
  const car = mockCars[carId];
  const [fromDate, setFromDate] = useState("2026-02-20");
  const [fromTime, setFromTime] = useState("10:00");
  const [toDate, setToDate] = useState("2026-02-23");
  const [toTime, setToTime] = useState("10:00");
  const [depositFree, setDepositFree] = useState(true);
  const [washing, setWashing] = useState(true);
  const [childSeat, setChildSeat] = useState(false);
  const [returnToSame, setReturnToSame] = useState(true);
  const [showBargainModal, setShowBargainModal] = useState(false);
  const [offerPrice, setOfferPrice] = useState("");
  const [offerComment, setOfferComment] = useState("");
  const [offerSent, setOfferSent] = useState(false);

  if (!car) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Автомобиль не найден</h1>
          <Link href="/" className="text-primary hover:underline">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  const calculateRentalDays = () => {
    if (!fromDate || !toDate) return 3;
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const diffTime = to.getTime() - from.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 3;
  };
  
  const rentalDays: number = calculateRentalDays();
  const totalPrice = car.pricePerDay * rentalDays;
  const depositFreePrice = 1200;
  const washingPrice = 5500;
  const childSeatPrice = 3000;
  const finalPrice = totalPrice + (depositFree ? depositFreePrice : 0) + (washing ? washingPrice : 0) + (childSeat ? childSeatPrice : 0);

  return (
    <div className="min-h-screen bg-white pb-20 lg:pb-6">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <button
              onClick={() => router.back()}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="text-center">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">Бронирование автомобиля</h1>
              <p className="text-xs lg:text-sm text-gray-500">Шаг 1 из 2</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-gray-700 hover:text-gray-900">
                <Share2 className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={() => toggleFavorite(carId)}
                className={`text-gray-700 hover:text-gray-900 transition-colors ${
                  isFavorite(carId) ? "text-primary" : ""
                }`}
              >
                <Heart
                  className={`w-5 h-5 lg:w-6 lg:h-6 transition-all ${
                    isFavorite(carId) ? "fill-primary" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Image and Car Info (Desktop) */}
          <div className="lg:col-span-2 space-y-4 lg:space-y-6">
            {/* Car Image */}
            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={car.image}
                alt={`${car.brand} ${car.model} ${car.year}`}
                fill
                className="object-cover"
              />
              <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 hover:bg-white transition-colors">
                <Maximize2 className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
              </button>
              {/* Carousel dots */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-white"></div>
                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-white/50"></div>
              </div>
            </div>

            {/* Car Info */}
            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
              <div className="text-sm lg:text-base text-gray-500 mb-1">{car.transmission} · {car.type}</div>
              <div className="flex items-center gap-2 mb-2">
                <Car className="w-4 h-4 lg:w-5 lg:h-5 text-gray-500" />
                <span className="font-semibold text-gray-900 text-base lg:text-lg">{car.brand} {car.model} {car.year} · Или похожий {car.type === "SUV" ? "внедорожник" : "седан"}</span>
              </div>
              <Link href="#" className="text-sm lg:text-base text-primary hover:underline">
                Детали автомобиля и похожие модели
              </Link>
            </div>

            {/* Rental Dates */}
            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900 text-sm lg:text-base">20 февраля {fromTime} — 23 февраля 2026 {toTime}</div>
                    <div className="text-xs lg:text-sm text-gray-500">Доступна аренда на 1 день</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 flex-shrink-0" />
              </div>
            </div>

            {/* Rental Price */}
            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm lg:text-base text-gray-600">Стоимость аренды за {rentalDays} {rentalDays === 1 ? "день" : rentalDays < 5 ? "дня" : "дней"}</div>
                    <div className="text-sm lg:text-base text-gray-500">₸ {car.pricePerDay.toLocaleString()} / день</div>
                  </div>
                </div>
                <div className="font-bold text-lg lg:text-2xl text-gray-900">₸ {totalPrice.toLocaleString()}</div>
              </div>
              <button
                type="button"
                onClick={() => setShowBargainModal(true)}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-dashed border-primary/50 text-primary hover:bg-primary/5 hover:border-primary transition-colors text-sm font-medium"
              >
                <Tag className="w-4 h-4" />
                Предложить свою цену
              </button>
            </div>

            {/* Included Mileage and Fuel */}
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">Включенный пробег и топливо</h2>
              <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 space-y-3 lg:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Route className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-900 text-sm lg:text-base">Пробег</span>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900 text-sm lg:text-base">{car.mileageIncluded} км за аренду</div>
                    <div className="text-xs lg:text-sm text-gray-500">Далее ₸ {car.mileagePricePerKm} за км</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Fuel className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-900 text-sm lg:text-base">Политика топлива</span>
                  </div>
                  <div className="font-medium text-gray-900 text-sm lg:text-base">Как получили, так и вернуть</div>
                </div>
              </div>
            </div>

            {/* Insurance & Options */}
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">Страховка и опции</h2>
              <div className="bg-white rounded-xl border border-gray-200 space-y-3 lg:space-y-4 p-4 lg:p-6">
                <div className="bg-green-50 rounded-lg p-3 lg:p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm lg:text-base">Бесплатная отмена до 48 часов до получения</div>
                  </div>
                  <Check className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 flex-shrink-0" />
                </div>
                <div className="bg-green-50 rounded-lg p-3 lg:p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm lg:text-base">Доступно для ваших дат</div>
                    <div className="text-xs lg:text-sm text-gray-600 mt-1">Получите мгновенное подтверждение бронирования от компании по аренде</div>
                  </div>
                  <Check className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 flex-shrink-0" />
                </div>
                <div className="bg-gray-50 rounded-lg p-3 lg:p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">Базовая страховка ОГПО</div>
                    <div className="text-xs lg:text-sm text-gray-600 mt-1">Страховка включена в стоимость аренды. <Link href="#" className="text-primary">Подробнее</Link></div>
                  </div>
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-green-600 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-between py-2 lg:py-3">
                  <div>
                    <div className="font-medium text-gray-900 text-sm lg:text-base">Мойка</div>
                    <div className="text-xs lg:text-sm text-gray-500">₸ {washingPrice.toLocaleString()}</div>
                  </div>
                  <button
                    onClick={() => setWashing(!washing)}
                    className={`relative w-11 h-6 lg:w-12 lg:h-7 rounded-full transition-colors flex-shrink-0 ${
                      washing ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full transition-transform ${
                      washing ? "translate-x-5 lg:translate-x-5" : ""
                    }`} />
                  </button>
                </div>
                <div className="flex items-center justify-between py-2 lg:py-3">
                  <div>
                    <div className="font-medium text-gray-900 text-sm lg:text-base">Детское кресло</div>
                    <div className="text-xs lg:text-sm text-gray-500">₸ {childSeatPrice.toLocaleString()}</div>
                  </div>
                  <button
                    onClick={() => setChildSeat(!childSeat)}
                    className={`relative w-11 h-6 lg:w-12 lg:h-7 rounded-full transition-colors flex-shrink-0 ${
                      childSeat ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full transition-transform ${
                      childSeat ? "translate-x-5 lg:translate-x-5" : ""
                    }`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Deposit Free Option */}
            <div className="bg-gray-50 rounded-xl p-4 lg:p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-2 lg:mb-3">
                <div className="flex-1">
                  <div className="font-bold text-gray-900 mb-1 text-sm lg:text-base">Аренда без залога за ₸ {depositFreePrice.toLocaleString()}</div>
                  <div className="text-sm lg:text-base text-gray-600">Вы можете арендовать автомобиль без залога, включив дополнительную плату за услугу в стоимость аренды.</div>
                </div>
                <button
                  onClick={() => setDepositFree(!depositFree)}
                  className={`relative w-11 h-6 lg:w-12 lg:h-7 rounded-full transition-colors ml-4 flex-shrink-0 ${
                    depositFree ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div className={`absolute top-0.5 left-0.5 w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full transition-transform ${
                    depositFree ? "translate-x-5 lg:translate-x-5" : ""
                  }`} />
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm lg:text-base pt-2 lg:pt-3 border-t border-gray-200">
                <PiggyBank className="w-4 h-4 lg:w-5 lg:h-5 text-gray-500 flex-shrink-0" />
                <span className="font-medium text-gray-900">Залог</span>
                <span className="text-gray-600">Возвращается в течение 7 дней после возврата автомобиля</span>
                <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                  <span className="line-through text-gray-400">₸ 50,000</span>
                  <span className="text-primary font-bold">₸ 0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info Sections (Desktop) */}
          <div className="lg:col-span-1 space-y-4 lg:space-y-6">

            {/* Important Info */}
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">Важная информация</h2>
              <div className="bg-white rounded-xl border border-gray-200">
                <div className="p-4 lg:p-5 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm lg:text-base">Оплата при получении</div>
                        <div className="text-xs lg:text-sm text-gray-500">Kaspi QR, Наличные, Оплата картой (Visa, Mastercard)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:p-5 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm lg:text-base">Минимальный возраст</div>
                        <div className="text-sm lg:text-base text-gray-600">21 год</div>
                        <Link href="#" className="text-xs lg:text-sm text-primary">Другой возраст? →</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:p-5 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Car className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm lg:text-base">Минимальный опыт вождения</div>
                        <div className="text-sm lg:text-base text-gray-600">2 года</div>
                        <Link href="#" className="text-xs lg:text-sm text-primary">Меньший опыт? →</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="#" className="p-4 lg:p-5 border-b border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-900 text-sm lg:text-base">Необходимые документы</span>
                  </div>
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 flex-shrink-0" />
                </Link>
                <Link href="#" className="p-4 lg:p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                    </div>
                    <span className="font-medium text-gray-900 text-sm lg:text-base">Условия аренды автомобиля</span>
                  </div>
                  <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 flex-shrink-0" />
                </Link>
              </div>
            </div>

            {/* Pickup & Return Location */}
            <div>
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">Место получения и возврата</h2>
              <div className="bg-white rounded-xl border border-gray-200 space-y-3 lg:space-y-4 p-4 lg:p-6">
                <div>
                  <div className="font-medium text-gray-900 mb-2 text-sm lg:text-base">Доставка автомобиля</div>
                  <div className="border border-gray-200 rounded-lg p-3 lg:p-4 flex items-center gap-3">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-sm lg:text-base text-gray-600">Выберите адрес доставки</div>
                      <Link href="#" className="text-xs lg:text-sm text-primary">Политика доставки</Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-2 text-sm lg:text-base">Бесплатные точки получения</div>
                  <div className="border border-gray-200 rounded-lg p-3 lg:p-4 flex items-center gap-3">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-gray-300 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="text-sm lg:text-base font-medium text-gray-900">Алматы, 8-й микрорайон, 4А</div>
                      <div className="text-xs lg:text-sm text-gray-500 mt-1">2.4 км · Ближайшая · Доступна</div>
                      <Link href="#" className="text-xs lg:text-sm text-primary">Инструкции по получению</Link>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                      <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 lg:pt-3 border-t border-gray-200">
                  <span className="font-medium text-gray-900 text-sm lg:text-base">Вернуть в то же место</span>
                  <button
                    onClick={() => setReturnToSame(!returnToSame)}
                    className={`relative w-11 h-6 lg:w-12 lg:h-7 rounded-full transition-colors flex-shrink-0 ${
                      returnToSame ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full transition-transform ${
                      returnToSame ? "translate-x-5 lg:translate-x-5" : ""
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="fixed lg:sticky lg:bottom-0 bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:p-6 z-40">
          <div className="max-w-6xl mx-auto">
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 lg:py-5 px-6 rounded-xl text-lg lg:text-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Продолжить
            </button>
            <div className="text-center text-xs lg:text-sm text-gray-500 mt-2">Остался только один шаг</div>
          </div>
        </div>
      </div>

      {/* Modal: предложить цену */}
      {showBargainModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => !offerSent && setShowBargainModal(false)}>
          <div
            className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Предложить свою цену</h3>
              {!offerSent && (
                <button type="button" onClick={() => setShowBargainModal(false)} className="p-1 rounded-lg hover:bg-gray-100">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              )}
            </div>
            <div className="p-4 lg:p-6">
              {offerSent ? (
                <div className="text-center py-4">
                  <p className="text-gray-700 mb-4">Заявка отправлена. Мы свяжемся с вами для уточнения условий.</p>
                  <button
                    type="button"
                    onClick={() => { setShowBargainModal(false); setOfferSent(false); setOfferPrice(""); setOfferComment(""); }}
                    className="w-full py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90"
                  >
                    Закрыть
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-600 mb-4">Текущая стоимость за {rentalDays} {rentalDays === 1 ? "день" : rentalDays < 5 ? "дня" : "дней"}: <strong>₸ {totalPrice.toLocaleString()}</strong>. Укажите ваше предложение.</p>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="offer-price" className="block text-sm font-medium text-gray-700 mb-1">Ваша цена, ₸</label>
                      <input
                        id="offer-price"
                        type="number"
                        min="1"
                        value={offerPrice}
                        onChange={(e) => setOfferPrice(e.target.value.replace(/\D/g, "").slice(0, 12))}
                        placeholder={totalPrice.toString()}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="offer-comment" className="block text-sm font-medium text-gray-700 mb-1">Комментарий (необязательно)</label>
                      <textarea
                        id="offer-comment"
                        value={offerComment}
                        onChange={(e) => setOfferComment(e.target.value)}
                        placeholder="Например: готов забрать сегодня"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setShowBargainModal(false)}
                      className="flex-1 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50"
                    >
                      Отмена
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const num = parseInt(offerPrice, 10);
                        if (num > 0) setOfferSent(true);
                      }}
                      disabled={!offerPrice.trim() || parseInt(offerPrice, 10) <= 0}
                      className="flex-1 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Отправить
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <AIAssistant />
    </div>
  );
}
