"use client";

import { Heart, User, Menu, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { useFavorites } from "@/contexts/FavoritesContext";

export default function Header() {
  const router = useRouter();
  const { language } = useLanguage();
  const { favorites } = useFavorites();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const userStr = localStorage.getItem("user");
    if (token && userStr) {
      setIsLoggedIn(true);
      try {
        const user = JSON.parse(userStr);
        setUserName(user.name || "");
      } catch (e) {
        // Invalid user data
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="flex items-center gap-2 sm:gap-4 relative">
            <div className="relative" style={{ zIndex: 60 }}>
              <LanguageSwitcher />
            </div>
            
            <Link
              href="/favorites"
              className="relative p-2.5 hover:bg-gray-50 rounded-full transition-all duration-200 group"
              aria-label={getTranslation(language, "header.favorites")}
            >
              <Heart 
                className={`w-6 h-6 transition-all duration-200 ${
                  favorites.length > 0
                    ? "fill-primary text-primary scale-110" 
                    : "text-gray-600 group-hover:text-primary"
                }`} 
              />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {favorites.length > 9 ? "9+" : favorites.length}
                </span>
              )}
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-gray-700 text-sm font-medium">
                  {userName}
                </span>
                <button
                  onClick={handleLogout}
                  className="p-2.5 hover:bg-gray-50 rounded-full transition-all duration-200 group"
                  aria-label="Выйти"
                  title="Выйти"
                >
                  <LogOut className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="p-2.5 hover:bg-gray-50 rounded-full transition-all duration-200 group"
                aria-label={getTranslation(language, "header.profile")}
              >
                <User className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" />
              </Link>
            )}
            
            <button 
              className="lg:hidden p-2.5 hover:bg-gray-50 rounded-full transition-all duration-200"
              aria-label={getTranslation(language, "header.menu")}
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
