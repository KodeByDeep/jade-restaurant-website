"use client";

import AnimateIn from "./AnimateIn";
import Link from "next/link";

const features = [
  {
    title: "Banquet Menu",
    subtitle: "Eight-course chef selection",
    description: "Seasonal game, seafood, and signature Sichuan fire — a journey through China's most celebrated regional flavours.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    cta: "Reserve Your Table",
    href: "/reservations",
  },
  {
    title: "Weekend Dim Sum",
    subtitle: "Saturday & Sunday from 11:00",
    description: "Handmade dumplings, delicate har gow, and traditional siu mai — crafted fresh every morning.",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
    cta: "Book Dim Sum",
    href: "/reservations",
  },
  {
    title: "Private Dining",
    subtitle: "For 8 to 50 guests",
    description: "Dedicated banquet rooms with customisable menus for celebrations, corporate events, and intimate gatherings.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
    cta: "Enquire Now",
    href: "/contact",
  },
];

export default function HomeFeatured() {
  return (
    <section style={{ padding: "9rem 2rem", background: "#fafaf8" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        <AnimateIn>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: "1rem" }}>Experiences</p>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>
            Crafted for Every Occasion
          </h2>
          <div className="gold-rule-center" style={{ marginBottom: "5rem" }} />
        </AnimateIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5px",
          background: "#e0ddd5",
          border: "1px solid #e0ddd5",
        }}>
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 0.14}>
              <div className="feat-card">
                <div style={{ height: "260px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      transition: "transform 0.65s ease",
                    }}
                    className="feat-img"
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.45))",
                  }} />
                </div>
                <div style={{ padding: "2rem 2rem 2.2rem" }}>
                  <p className="eyebrow" style={{ marginBottom: "0.5rem" }}>{feature.subtitle}</p>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.9rem", fontWeight: 300,
                    color: "#111", marginBottom: "1rem",
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem", lineHeight: 1.75,
                    color: "rgba(17,17,17,0.55)",
                    marginBottom: "1.6rem",
                  }}>
                    {feature.description}
                  </p>
                  <Link href={feature.href} className="feat-cta">{feature.cta} →</Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        .feat-card {
          background: #ffffff;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .feat-card:hover { background: #fafaf8; box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
        .feat-card:hover .feat-img { transform: scale(1.05); }
        .feat-cta {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #b8922a;
          transition: letter-spacing 0.3s ease, color 0.2s ease;
        }
        .feat-cta:hover { letter-spacing: 0.28em; color: #d4a843; }
      `}</style>
    </section>
  );
}
