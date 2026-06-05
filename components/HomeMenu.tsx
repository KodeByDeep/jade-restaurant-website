"use client";

import AnimateIn from "./AnimateIn";
import Link from "next/link";
import { menuItems } from "@/lib/data";

const highlights = menuItems.filter((item) => item.badge === "Chef's Pick").slice(0, 4);

export default function HomeMenu() {
  return (
    <section style={{
      padding: "9rem 2rem",
      background: "#f5f4f0",
      borderTop: "1px solid #e0ddd5",
      borderBottom: "1px solid #e0ddd5",
    }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        <AnimateIn>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: "1rem" }}>Chef's Selection</p>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>Signature Dishes</h2>
          <div className="gold-rule-center" style={{ marginBottom: "5rem" }} />
        </AnimateIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          background: "#e0ddd5",
          border: "1px solid #e0ddd5",
          marginBottom: "4rem",
        }}>
          {highlights.map((item, i) => (
            <AnimateIn key={item.id} delay={i * 0.1}>
              <div className="sig-card">
                {item.image && (
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src={item.image} alt={item.name}
                      style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        transition: "transform 0.55s ease",
                      }}
                      className="sig-img"
                    />
                  </div>
                )}
                <div style={{ padding: "1.6rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.7rem" }}>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.25rem", fontWeight: 400,
                      color: "#111", flex: 1, paddingRight: "1rem",
                    }}>
                      {item.name}
                    </h3>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.15rem", fontWeight: 500,
                      color: "#b8922a", whiteSpace: "nowrap",
                    }}>
                      {item.price}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.84rem", lineHeight: 1.65,
                    color: "rgba(17,17,17,0.5)",
                    marginBottom: "1rem",
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
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <div style={{ textAlign: "center" }}>
            <Link href="/menu" className="btn-ghost">View Full Menu</Link>
          </div>
        </AnimateIn>
      </div>

      <style>{`
        .sig-card {
          background: #ffffff;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .sig-card:hover { background: #fafaf8; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .sig-card:hover .sig-img { transform: scale(1.05); }
        .tag-outline {
          font-family: 'Inter', sans-serif; font-size: 0.6rem; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.22rem 0.6rem;
          border: 1px solid rgba(184,146,42,0.35); color: #b8922a; border-radius: 1px;
        }
        .tag-gold {
          font-family: 'Inter', sans-serif; font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.22rem 0.6rem;
          background: rgba(184,146,42,0.12); color: #b8922a; border-radius: 1px;
        }
      `}</style>
    </section>
  );
}
