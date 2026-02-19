"use client";

import { Car } from "lucide-react";

export default function CarRentalBadge() {
  return (
    <div className="absolute top-2 left-2 lg:top-3 lg:left-3 bg-gradient-to-r from-primary to-primary-dark text-white px-2.5 py-1.5 rounded-lg text-[10px] lg:text-xs font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-sm bg-opacity-95">
      <Car className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
      <span>Аренда авто</span>
    </div>
  );
}
