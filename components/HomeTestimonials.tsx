"use client";

import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    quote: "The Peking Duck is the finest I've had outside of Beijing. The three-part service is theatrical and delicious.",
    author: "Sarah M.",
    role: "Food Critic, San Diego Tribune",
  },
  {
    quote: "Jade Garden is our go-to for special occasions. The dim sum on weekends is extraordinary — every piece handmade.",
    author: "James & Linda K.",
    role: "Regular Guests since 2018",
  },
  {
    quote: "The Michelin recognition is well deserved. Chef Wei's Sichuan dishes have an authenticity you rarely find in the West.",
    author: "Thomas R.",
    role: "Michelin Guide Inspector",
  },
];

export default function HomeTestimonials() {
  return (
    <section style={{
      padding: "9rem 2rem",
      background: "#f5f4f0",
      borderTop: "1px solid #e0ddd5",
      borderBottom: "1px solid #e0ddd5",
    }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        <AnimateIn>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: "1rem" }}>What Guests Say</p>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>Voices of the Table</h2>
          <div className="gold-rule-center" style={{ marginBottom: "5rem" }} />
        </AnimateIn>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          background: "#e0ddd5",
          border: "1px solid #e0ddd5",
        }}>
          {testimonials.map((t, i) => (
            <AnimateIn key={t.author} delay={i * 0.14}>
              <div style={{
                padding: "2.8rem 2.4rem",
                background: "#fff",
                position: "relative",
                transition: "background 0.3s ease",
              }} className="testi-card">
                <div style={{
                  position: "absolute", top: "1.2rem", left: "2rem",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem", lineHeight: 1,
                  color: "rgba(184,146,42,0.12)",
                  userSelect: "none",
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem", fontStyle: "italic",
                  lineHeight: 1.75, color: "rgba(17,17,17,0.82)",
                  marginBottom: "2rem", paddingTop: "1.8rem",
                  position: "relative", zIndex: 1,
                }}>
                  {t.quote}
                </p>
                <div style={{ width: "28px", height: "1px", background: "#b8922a", marginBottom: "1rem" }} />
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.88rem", fontWeight: 600,
                  color: "#111", marginBottom: "0.25rem",
                }}>
                  {t.author}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem", color: "rgba(17,17,17,0.4)",
                  letterSpacing: "0.05em",
                }}>
                  {t.role}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        .testi-card:hover { background: #fafaf8 !important; }
      `}</style>
    </section>
  );
}
