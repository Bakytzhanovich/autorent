import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import CarCategories from "@/components/CarCategories";
import PartnerCars from "@/components/PartnerCars";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ExclusiveOffers />
      <CarCategories />
      <PartnerCars />
      <Footer />
      <AIAssistant />
    </main>
  );
}
