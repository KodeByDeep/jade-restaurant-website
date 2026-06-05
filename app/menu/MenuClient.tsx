"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";
import { menuItems } from "@/lib/data";
import PageHero from "@/components/PageHero";

const categories = Array.from(new Set(menuItems.map((item) => item.category)));

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="A Journey Through China's Regions"
        subtitle="Every dish is crafted with authentic techniques, seasonal ingredients, and three generations of family knowledge."
        image="https://images.unsplash.com/photo-1547592180-85f173990554?w=1800&q=80"
      />

      <section style={{ padding: "6rem 2rem", background: "#050505" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        {/* ── Category filters ── */}
        <AnimateIn>
          <div style={{
            display: "flex", gap: "0.75rem", flexWrap: "wrap",
            justifyContent: "center", marginBottom: "4.5rem",
          }}>
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "0.55rem 1.4rem",
                  border: `1px solid ${activeCategory === cat ? "#b8922a" : "#2a2a2a"}`,
                  background: activeCategory === cat ? "#b8922a" : "transparent",
                  color: activeCategory === cat ? "#fff" : "rgba(255,255,255,0.6)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem", fontWeight: 600,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  cursor: "pointer", borderRadius: "1px",
                  transition: "all 0.25s ease",
                }}
                className="menu-filter"
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* ── Menu items ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {(activeCategory === "All" ? categories : [activeCategory]).map((category) => {
              const items = filtered.filter((item) => item.category === category);
              if (!items.length) return null;
              return (
                <div key={category} style={{ marginBottom: "5rem" }}>
                  {/* Category header */}
                  <div style={{ marginBottom: "2rem" }}>
                    <h2 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2.6rem", fontWeight: 300,
                      color: "#fff", marginBottom: "0.6rem",
                    }}>
                      {category}
                    </h2>
                    <div className="gold-rule" />
                  </div>

                  {/* Items grid */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                    gap: "1px",
                    background: "#1a1a1a",
                    border: "1px solid #1a1a1a",
                  }}>
                    {items.map((item) => (
                      <div key={item.id} className="menu-row" style={{
                        background: "#0a0a0a",
                        padding: "1.8rem",
                        display: "flex", gap: "1.4rem",
                        transition: "background 0.25s ease",
                      }}>
                        {item.image && (
                          <div style={{
                            width: "76px", height: "76px",
                            flexShrink: 0, overflow: "hidden",
                          }}>
                            <img
                              src={item.image} alt={item.name}
                              style={{
                                width: "100%", height: "100%", objectFit: "cover",
                                filter: "brightness(0.85) saturate(0.8)",
                                transition: "transform 0.4s ease",
                              }}
                              className="menu-thumb"
                            />
                          </div>
                        )}
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.45rem" }}>
                            <h3 style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.15rem", fontWeight: 400,
                              color: "#fff", flex: 1, paddingRight: "1rem",
                            }}>
                              {item.name}
                            </h3>
                            <span style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: "1.1rem", fontWeight: 500,
                              color: "#d4a843", whiteSpace: "nowrap",
                            }}>
                              {item.price}
                            </span>
                          </div>
                          <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.82rem", lineHeight: 1.65,
                            color: "rgba(255,255,255,0.42)",
                            marginBottom: "0.8rem",
                          }}>
                            {item.description}
                          </p>
                          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                            {item.labels.map((label) => (
                              <span key={label} className="tag-outline">{label}</span>
                            ))}
                            {item.badge && <span className="tag-gold">{item.badge}</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Allergen note */}
        <AnimateIn>
          <div style={{
            marginTop: "3rem", padding: "1.8rem 2rem",
            border: "1px solid #1e1e1e", background: "#0a0a0a",
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem", lineHeight: 1.75,
              color: "rgba(255,255,255,0.35)", textAlign: "center",
            }}>
              Please inform your server of any allergies or dietary requirements before ordering.
              Our kitchen handles nuts, gluten, shellfish, and dairy. Full allergen information available on request.
            </p>
          </div>
        </AnimateIn>
      </div>
      </section>

      <style>{`
        .menu-filter:hover { border-color: #d4a843 !important; color: #d4a843 !important; }
        .menu-row:hover { background: #161616 !important; }
        .menu-row:hover .menu-thumb { transform: scale(1.08); }
        .tag-outline {
          font-family: 'Inter', sans-serif; font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.22rem 0.6rem;
          border: 1px solid rgba(212,168,67,0.28); color: #d4a843; border-radius: 1px;
        }
        .tag-gold {
          font-family: 'Inter', sans-serif; font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.22rem 0.6rem;
          background: rgba(212,168,67,0.14); color: #d4a843; border-radius: 1px;
        }
      `}</style>
    </>
  );
}
