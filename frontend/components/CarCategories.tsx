"use client";

import { Car, Zap, Building2, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const categories = [
  {
    id: 1,
    nameKey: "carCategories.economy",
    icon: Car,
    price: 5000,
    color: "from-green-500 to-green-600",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    nameKey: "carCategories.standard",
    icon: Car,
    price: 8000,
    color: "from-blue-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    nameKey: "carCategories.luxury",
    icon: Building2,
    price: 15000,
    color: "from-purple-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    nameKey: "carCategories.business",
    icon: Briefcase,
    price: 12000,
    color: "from-gray-700 to-gray-800",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    nameKey: "carCategories.electric",
    icon: Zap,
    price: 10000,
    color: "from-accent-dark to-accent",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop",
  },
];

export default function CarCategories() {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 sm:py-20 gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {getTranslation(language, "carCategories.title")}
          </h2>
          <p className="text-lg text-gray-600">
            {getTranslation(language, "carCategories.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-medium hover:shadow-large overflow-hidden cursor-pointer group card-hover"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={getTranslation(language, category.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon badge */}
                  <div className={`absolute top-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-5 h-5 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} />
                    <h3 className="font-bold text-gray-900 text-lg">
                      {getTranslation(language, category.nameKey)}
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-gray-500">{getTranslation(language, "common.from")}</span>
                    <span className={`text-2xl font-bold bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
                      ₸{category.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">{getTranslation(language, "common.perDay")}</span>
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
