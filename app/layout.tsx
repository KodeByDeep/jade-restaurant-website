import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://jadegarden.com"),
  title: {
    default: "Jade Garden | Authentic Chinese Fine Dining — San Diego",
    template: "%s | Jade Garden",
  },
  description:
    "Jade Garden offers authentic Sichuan, Cantonese, and regional Chinese cuisine in San Diego. Michelin Bib Gourmand 2025. Reserve your table online.",
  keywords: [
    "Chinese restaurant San Diego",
    "fine dining San Diego",
    "Sichuan cuisine",
    "Cantonese restaurant",
    "Peking duck San Diego",
    "dim sum San Diego",
    "Michelin restaurant San Diego",
    "private dining San Diego",
  ],
  authors: [{ name: "Jade Garden" }],
  creator: "Jade Garden",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jadegarden.com",
    siteName: "Jade Garden",
    title: "Jade Garden | Authentic Chinese Fine Dining",
    description:
      "Michelin Bib Gourmand 2025. Authentic Sichuan & Cantonese cuisine in San Diego. Reserve online.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jade Garden Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jade Garden | Authentic Chinese Fine Dining",
    description: "Michelin Bib Gourmand 2025. Reserve your table online.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Jade Garden",
              description:
                "Authentic Chinese restaurant featuring Sichuan, Cantonese, and regional specialties.",
              url: "https://jadegarden.com",
              telephone: "+1-555-0123",
              address: {
                "@type": "PostalAddress",
                streetAddress: "110 Coastal Avenue",
                addressLocality: "San Diego",
                addressRegion: "CA",
                postalCode: "92101",
                addressCountry: "US",
              },
              servesCuisine: ["Chinese", "Sichuan", "Cantonese"],
              priceRange: "£££",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "11:30",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "11:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "11:00",
                  closes: "21:30",
                },
              ],
              hasMap: "https://maps.google.com",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "312",
              },
            }),
          }}
        />
      </head>
      <body
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
