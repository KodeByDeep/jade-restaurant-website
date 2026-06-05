import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Jade Garden through our gallery — signature dishes, the dining room, our kitchen, and the people behind the food.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
