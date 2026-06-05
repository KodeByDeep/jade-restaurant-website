import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { teamMembers, awards } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jade Garden's story — three generations of authentic Chinese culinary tradition, our team, sourcing philosophy, and Michelin recognition.",
};

const values = [
  { icon: "◈", title: "Authenticity",   text: "Every recipe traces back to its regional origin. We never compromise on technique or ingredient quality." },
  { icon: "◈", title: "Sourcing",        text: "Premium soy sauces from Jiangsu, chili oils from Sichuan, and fresh seafood daily from regional markets." },
  { icon: "◈", title: "Hospitality",     text: "We believe dining is a celebration. Every guest is welcomed as family, every visit made memorable." },
  { icon: "◈", title: "Sustainability",  text: "We work with local farms and sustainable fisheries to minimise our environmental footprint." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Heritage, Craft & Hospitality"
        subtitle="Three generations of family culinary tradition, brought to life in San Diego."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
      />

      {/* ── Story ── */}
      <section style={{ padding: "9rem 2rem", background: "#000" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "7rem", alignItems: "center", marginBottom: "9rem",
          }} className="about-split">

            <AnimateIn direction="right">
              <div style={{ position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                  alt="Jade Garden kitchen"
                  style={{
                    width: "100%", aspectRatio: "4/3", objectFit: "cover",
                    filter: "brightness(0.78) saturate(0.75)",
                  }}
                />
                <div style={{
                  position: "absolute", bottom: "-18px", right: "-18px",
                  width: "70px", height: "70px",
                  borderRight: "2px solid #d4a843",
                  borderBottom: "2px solid #d4a843",
                  pointerEvents: "none",
                }} />
              </div>
            </AnimateIn>

            <div>
              <AnimateIn delay={0.1}>
                <p className="eyebrow" style={{ marginBottom: "1rem" }}>Our Story</p>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 3.5vw, 3.8rem)",
                  fontWeight: 300, lineHeight: 1.08,
                  color: "#fff", marginBottom: "1.5rem",
                }}>
                  Born from a Family
                  <br /><em style={{ color: "#d4a843" }}>of Cooks.</em>
                </h2>
                <div className="gold-rule" style={{ marginBottom: "2rem" }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", lineHeight: 1.9, color: "rgba(255,255,255,0.5)", marginBottom: "1.4rem" }}>
                  Jade Garden was founded in 1998 by the Chen family, who brought their culinary heritage from Chengdu and Guangzhou to San Diego. What began as a small neighbourhood restaurant has grown into one of the city's most celebrated dining destinations.
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", lineHeight: 1.9, color: "rgba(255,255,255,0.5)" }}>
                  Today, Executive Chef Wei Chen — the third generation — leads the kitchen with the same reverence for tradition and obsession with quality that his grandparents instilled in him as a child.
                </p>
              </AnimateIn>
            </div>
          </div>

          {/* ── Values ── */}
          <AnimateIn>
            <p className="eyebrow" style={{ textAlign: "center", marginBottom: "1rem" }}>Our Philosophy</p>
            <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem", color: "#fff" }}>What We Stand For</h2>
            <div className="gold-rule-center" style={{ marginBottom: "4rem" }} />
          </AnimateIn>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a",
            marginBottom: "9rem",
          }}>
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.1}>
                <div style={{
                  padding: "2.5rem 2rem", background: "#0a0a0a",
                  transition: "background 0.25s ease",
                }} className="val-card">
                  <div style={{ fontSize: "1.3rem", color: "#d4a843", marginBottom: "1rem" }}>{v.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#fff", marginBottom: "0.75rem" }}>{v.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)" }}>{v.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* ── Team ── */}
          <AnimateIn>
            <p className="eyebrow" style={{ textAlign: "center", marginBottom: "1rem" }}>The Team</p>
            <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem", color: "#fff" }}>The People Behind the Plate</h2>
            <div className="gold-rule-center" style={{ marginBottom: "4rem" }} />
          </AnimateIn>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "3rem", marginBottom: "9rem",
          }}>
            {teamMembers.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 0.14}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ position: "relative", display: "inline-block", marginBottom: "1.6rem" }}>
                    <img
                      src={member.image} alt={member.name}
                      style={{
                        width: "180px", height: "180px",
                        objectFit: "cover", borderRadius: "50%",
                        filter: "brightness(0.85) saturate(0.75) grayscale(10%)",
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: "-6px",
                      border: "1px solid rgba(212,168,67,0.35)",
                      borderRadius: "50%", pointerEvents: "none",
                    }} />
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: "#fff", marginBottom: "0.3rem" }}>{member.name}</h3>
                  <p className="eyebrow" style={{ marginBottom: "1rem" }}>{member.role}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)" }}>{member.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* ── Awards ── */}
          <AnimateIn>
            <p className="eyebrow" style={{ textAlign: "center", marginBottom: "1rem" }}>Recognition</p>
            <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem", color: "#fff" }}>Awards & Accolades</h2>
            <div className="gold-rule-center" style={{ marginBottom: "4rem" }} />
          </AnimateIn>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a",
            marginBottom: "5rem",
          }}>
            {awards.map((award, i) => (
              <AnimateIn key={award.title} delay={i * 0.1}>
                <div style={{
                  padding: "2.5rem 2rem", background: "#0a0a0a",
                  textAlign: "center", transition: "background 0.25s ease",
                }} className="val-card">
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#d4a843", marginBottom: "1rem" }}>★</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: "#fff", marginBottom: "0.5rem" }}>{award.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>{award.body} · {award.year}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div style={{ textAlign: "center" }}>
              <Link href="/reservations" className="btn-ghost">Reserve Your Table</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .about-split { grid-template-columns: 1fr !important; gap: 3.5rem !important; }
        }
        .val-card:hover { background: #111 !important; }
      `}</style>
    </>
  );
}
