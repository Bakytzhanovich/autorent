"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import Link from "next/link";

interface PlaceholderPageProps {
  titleKey: string;
}

export default function PlaceholderPage({ titleKey }: PlaceholderPageProps) {
  const { language } = useLanguage();
  const title = getTranslation(language, titleKey);
  const underConstruction = getTranslation(language, "common.pageUnderConstruction");

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">{underConstruction}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          {getTranslation(language, "footer.home")}
        </Link>
      </section>
      <Footer />
    </main>
  );
}
