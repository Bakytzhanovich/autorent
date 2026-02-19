"use client";

import Link from "next/link";
import { Car } from "lucide-react";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2.5 hover:opacity-90 transition-opacity"
    >
      {/* Icon */}
      <div className="bg-primary p-2.5 rounded-lg shadow-sm">
        <Car className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight">
          autorent
        </span>
        <span className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-semibold -mt-0.5 tracking-wide">
          аренда авто
        </span>
      </div>
    </Link>
  );
}
