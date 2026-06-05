import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeFeatured from "@/components/HomeFeatured";
import HomeMenu from "@/components/HomeMenu";
import HomeAwards from "@/components/HomeAwards";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeCta from "@/components/HomeCta";

export const metadata: Metadata = {
  title: "Jade Garden | Authentic Chinese Fine Dining — San Diego",
  description:
    "Jade Garden brings authentic Sichuan, Cantonese, and regional Chinese cuisine to San Diego. Michelin Bib Gourmand 2025. Reserve your table online.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatured />
      <HomeMenu />
      <HomeAwards />
      <HomeTestimonials />
      <HomeCta />
    </>
  );
}
