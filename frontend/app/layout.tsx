import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { SearchProvider } from "@/contexts/SearchContext";

export const metadata: Metadata = {
  title: "AutoRent - Car Rental Service",
  description: "Premium car rental service in Kazakhstan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <FavoritesProvider>
            <SearchProvider>{children}</SearchProvider>
          </FavoritesProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
