"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 hover:opacity-90 transition-opacity mb-4"
            >
              {/* Icon */}
              <div className="bg-primary p-2.5 rounded-lg shadow-sm">
                <Car className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              
              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight">
                  autorent
                </span>
                <span className="text-[10px] sm:text-xs lg:text-sm text-gray-400 font-semibold -mt-0.5 tracking-wide">
                  аренда авто
                </span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              {getTranslation(language, "footer.description")}
            </p>
            {/* Social Media */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title={getTranslation(language, "footer.socialFacebook")}
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title={getTranslation(language, "footer.socialInstagram")}
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title={getTranslation(language, "footer.socialTwitter")}
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title={getTranslation(language, "footer.socialYoutube")}
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{getTranslation(language, "footer.quickLinks")}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.home")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.homeDesc")}</span>
              </li>
              <li>
                <Link href="/cars" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.cars")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.carsDesc")}</span>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.about")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.aboutDesc")}</span>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.conditions")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.conditionsDesc")}</span>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.faq")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.faqDesc")}</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{getTranslation(language, "footer.services")}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/rental" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.dailyRental")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.dailyRentalDesc")}</span>
              </li>
              <li>
                <Link href="/monthly" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.monthlyRental")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.monthlyRentalDesc")}</span>
              </li>
              <li>
                <Link href="/business" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.corporateRental")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.corporateRentalDesc")}</span>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.delivery")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.deliveryDesc")}</span>
              </li>
              <li>
                <Link href="/insurance" className="hover:text-primary transition-colors text-sm font-medium block">
                  {getTranslation(language, "footer.insurance")}
                </Link>
                <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.insuranceDesc")}</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{getTranslation(language, "footer.contacts")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{getTranslation(language, "footer.phone")}</p>
                  <a href="tel:+77001234567" title={getTranslation(language, "footer.phoneDesc")} className="text-white hover:text-primary transition-colors text-sm">
                    +7 (700) 123-45-67
                  </a>
                  <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.phoneDesc")}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{getTranslation(language, "footer.email")}</p>
                  <a href="mailto:info@autorent.kz" title={getTranslation(language, "footer.emailDesc")} className="text-white hover:text-primary transition-colors text-sm">
                    info@autorent.kz
                  </a>
                  <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.emailDesc")}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{getTranslation(language, "footer.address")}</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Almaty+Abay+Ave+150"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={getTranslation(language, "footer.addressDesc")}
                    className="text-white hover:text-primary transition-colors text-sm block"
                  >
                    {getTranslation(language, "footer.addressValue")}
                  </a>
                  <span className="text-xs text-gray-500 block mt-0.5">{getTranslation(language, "footer.addressDesc")}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {getTranslation(language, "footer.copyright").replace("{year}", new Date().getFullYear().toString())}
            </p>
            <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-end">
              <Link href="/privacy" title={getTranslation(language, "footer.privacyDesc")} className="hover:text-primary transition-colors">
                {getTranslation(language, "footer.privacy")}
              </Link>
              <span className="text-gray-500 hidden md:inline">·</span>
              <Link href="/terms" title={getTranslation(language, "footer.termsDesc")} className="hover:text-primary transition-colors">
                {getTranslation(language, "footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
