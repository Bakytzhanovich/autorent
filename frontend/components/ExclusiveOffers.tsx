"use client";

import Image from "next/image";
import { Sparkles, Shield, Percent } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const offers = [
  {
    id: 1,
    titleKey: "exclusiveOffers.noDeposit",
    descKey: "exclusiveOffers.noDepositDesc",
    icon: Shield,
    gradient: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    titleKey: "exclusiveOffers.specialOffers",
    descKey: "exclusiveOffers.specialOffersDesc",
    icon: Percent,
    gradient: "from-primary to-primary-dark",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    titleKey: "exclusiveOffers.unlimitedMileage",
    descKey: "exclusiveOffers.unlimitedMileageDesc",
    icon: Sparkles,
    gradient: "from-accent-dark to-accent",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=400&fit=crop",
  },
];

export default function ExclusiveOffers() {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {getTranslation(language, "exclusiveOffers.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {getTranslation(language, "exclusiveOffers.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className="relative rounded-3xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 group cursor-pointer card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={offer.image}
                    alt={getTranslation(language, offer.titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent`} />
                  
                  {/* Icon badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${offer.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:translate-x-1 transition-transform">
                      {getTranslation(language, offer.titleKey)}
                    </h3>
                    <p className="text-gray-100 text-lg">{getTranslation(language, offer.descKey)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
