import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Jade Garden's full menu — authentic Sichuan, Cantonese, and regional Chinese dishes. Appetisers, signature dishes, and desserts with allergen information.",
  openGraph: {
    title: "Menu | Jade Garden",
    description: "Authentic Chinese cuisine — Sichuan, Cantonese, and regional specialties.",
  },
};

export default function MenuPage() {
  return <MenuClient />;
}
