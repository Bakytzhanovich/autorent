"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { translations } from "@/lib/translations";
import type { Language } from "@/lib/translations";
import Link from "next/link";

type PageKey = keyof typeof translations.ru.pages;

interface ContentPageProps {
  pageKey: PageKey;
}

export default function ContentPage({ pageKey }: ContentPageProps) {
  const { language } = useLanguage();
  const lang = language as Language;
  const page = translations[lang]?.pages?.[pageKey] ?? translations.ru.pages[pageKey];

  if (!page) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <section className="container mx-auto px-4 py-16 text-center">
          <p className="text-gray-600">{getTranslation(language, "common.pageUnderConstruction")}</p>
          <Link href="/" className="mt-4 inline-block text-primary hover:underline">
            {getTranslation(language, "footer.home")}
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const hasItems = "items" in page && Array.isArray(page.items);
  const paragraphs = "paragraphs" in page && Array.isArray(page.paragraphs) ? page.paragraphs : [];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{page.title}</h1>

        {hasItems && page.items && (
          <ul className="space-y-6">
            {(page.items as { q: string; a: string }[]).map((item, i) => (
              <li key={i} className="border-b border-gray-200 pb-6 last:border-0">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h2>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </li>
            ))}
          </ul>
        )}

        {paragraphs.length > 0 && (
          <div className="space-y-5">
            {paragraphs.map((p: string, i: number) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            {getTranslation(language, "footer.home")}
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
