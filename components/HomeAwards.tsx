"use client";

import AnimateIn from "./AnimateIn";
import { awards } from "@/lib/data";

export default function HomeAwards() {
  return (
    <section style={{ padding: "9rem 2rem", background: "#fafaf8" }}>
      <div style={{
        maxWidth: "1300px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "7rem", alignItems: "center",
      }} className="awards-grid">

        {/* Left: image */}
        <AnimateIn direction="right">
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
              alt="Chef Wei Chen"
              style={{
                width: "100%", aspectRatio: "4/5",
                objectFit: "cover",
              }}
            />
            <div style={{
              position: "absolute",
              top: "-14px", left: "-14px",
              right: "14px", bottom: "14px",
              border: "1px solid rgba(184,146,42,0.35)",
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: "-14px", right: "-14px",
              width: "60px", height: "60px",
              borderRight: "2px solid #b8922a",
              borderBottom: "2px solid #b8922a",
              pointerEvents: "none",
            }} />
          </div>
        </AnimateIn>

        {/* Right: content */}
        <div>
          <AnimateIn delay={0.1}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Recognition</p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 3.5vw, 3.8rem)",
              fontWeight: 300, lineHeight: 1.08,
              color: "#111", marginBottom: "1.5rem",
            }}>
              Three Generations
              <br />
              <em style={{ color: "#b8922a" }}>of Excellence.</em>
            </h2>
            <div className="gold-rule" style={{ marginBottom: "2rem" }} />
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.92rem", lineHeight: 1.85,
              color: "rgba(17,17,17,0.55)",
              marginBottom: "3rem",
            }}>
              Jade Garden honours a family culinary tradition spanning three generations,
              bringing authentic Sichuan and Cantonese techniques to a modern dining
              experience — recognised by the world's most prestigious food institutions.
            </p>
          </AnimateIn>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#e0ddd5" }}>
            {awards.map((award, i) => (
              <AnimateIn key={award.title} delay={0.2 + i * 0.1}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "1.5rem",
                  padding: "1.4rem 1.6rem",
                  background: "#fff",
                  transition: "background 0.25s ease",
                }} className="award-row">
                  <div style={{
                    width: "44px", height: "44px", flexShrink: 0,
                    border: "1px solid rgba(184,146,42,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#b8922a", fontSize: "1.1rem",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}>
                    ★
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.05rem", fontWeight: 500,
                      color: "#111", marginBottom: "0.2rem",
                    }}>
                      {award.title}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem", color: "rgba(17,17,17,0.4)",
                      letterSpacing: "0.06em",
                    }}>
                      {award.body} · {award.year}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .award-row:hover { background: #fafaf8 !important; }
        @media (max-width: 820px) {
          .awards-grid { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
        }
      `}</style>
    </section>
  );
}
