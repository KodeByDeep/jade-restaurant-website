"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { galleryItems } from "@/lib/data";

const categories = ["All", "Menu", "Interior", "People"] as const;

export default function GalleryClient() {
  const [active,   setActive]   = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Through the Lens of Jade Garden"
        subtitle="Artistry in every dish, every corner, every moment."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
      />

      <section style={{ padding: "6rem 2rem", background: "#050505" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        {/* ── Filters ── */}
        <AnimateIn>
          <div style={{
            display: "flex", gap: "0.75rem", flexWrap: "wrap",
            justifyContent: "center", marginBottom: "4rem",
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "0.55rem 1.4rem",
                  border: `1px solid ${active === cat ? "#d4a843" : "#2a2a2a"}`,
                  background: active === cat ? "#d4a843" : "transparent",
                  color: active === cat ? "#000" : "rgba(255,255,255,0.65)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem", fontWeight: 600,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  cursor: "pointer", borderRadius: "1px",
                  transition: "all 0.25s ease",
                }}
                className="gal-filter"
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* ── Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2px",
              background: "#111",
            }}
          >
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.38 }}
                onClick={() => setLightbox(i)}
                style={{
                  position: "relative", overflow: "hidden",
                  border: "none", background: "none",
                  cursor: "pointer", padding: 0,
                  aspectRatio: "4/3", display: "block", width: "100%",
                }}
                className="gal-card"
              >
                <img
                  src={item.image} alt={item.title} loading="lazy"
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.55s ease",
                    filter: "brightness(0.82) saturate(0.8)",
                    display: "block",
                  }}
                  className="gal-img"
                />
                <div className="gal-overlay" style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.88))",
                  opacity: 0, transition: "opacity 0.3s ease",
                  display: "flex", alignItems: "flex-end", padding: "1.4rem",
                }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem", color: "#fff",
                  }}>
                    {item.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", inset: 0,
              background: "rgba(0,0,0,0.97)",
              zIndex: 200,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "2rem", cursor: "pointer",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              style={{
                position: "absolute", top: "1.5rem", right: "1.5rem",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(212,168,67,0.3)",
                color: "#fff", width: "44px", height: "44px",
                borderRadius: "50%", fontSize: "1.3rem",
                cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}
            >
              ×
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((p) => p !== null ? (p - 1 + filtered.length) % filtered.length : null); }}
              style={{
                position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(212,168,67,0.3)",
                color: "#fff", width: "44px", height: "44px", borderRadius: "50%",
                fontSize: "1.4rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >‹</button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((p) => p !== null ? (p + 1) % filtered.length : null); }}
              style={{
                position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(212,168,67,0.3)",
                color: "#fff", width: "44px", height: "44px", borderRadius: "50%",
                fontSize: "1.4rem", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >›</button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightbox].image}
              alt={filtered[lightbox].title}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw", maxHeight: "80vh",
                objectFit: "contain", cursor: "default",
              }}
            />
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem", color: "rgba(255,255,255,0.7)",
              marginTop: "1.5rem",
            }}>
              {filtered[lightbox].title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gal-filter:hover { border-color: #d4a843 !important; color: #d4a843 !important; }
        .gal-card:hover .gal-img { transform: scale(1.07); }
        .gal-card:hover .gal-overlay { opacity: 1 !important; }
      `}</style>
    </>
  );
}
