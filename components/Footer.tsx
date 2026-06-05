"use client";

import Link from "next/link";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/menu",         label: "Menu" },
  { href: "/about",        label: "About" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact",      label: "Contact" },
];

const hours = [
  { day: "Mon – Thu", time: "11:30 – 22:00" },
  { day: "Fri – Sat", time: "11:00 – 23:00" },
  { day: "Sunday",    time: "11:00 – 21:30" },
];

export default function Footer() {
  return (
    <footer style={{
      background: "#f5f4f0",
      borderTop: "1px solid #e0ddd5",
    }}>
      {/* Gold top accent */}
      <div style={{
        height: "2px",
        background: "linear-gradient(90deg, transparent 0%, #b8922a 40%, #d4a843 60%, transparent 100%)",
      }} />

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "5rem 2rem 2.5rem" }}>

        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr",
          gap: "3rem",
          marginBottom: "4rem",
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.7rem", fontWeight: 600,
              color: "#b8922a", letterSpacing: "0.06em",
              marginBottom: "0.4rem",
            }}>
              JADE GARDEN
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.62rem", letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.38)",
              marginBottom: "1.6rem",
            }}>
              Fine Chinese Dining
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.88rem", lineHeight: 1.75,
              color: "rgba(17,17,17,0.55)",
              maxWidth: "280px",
            }}>
              Authentic Sichuan &amp; Cantonese cuisine in the heart of San Diego, crafted with three generations of family tradition.
            </p>
            <div style={{ display: "flex", gap: "1.2rem", marginTop: "2rem" }}>
              {["Instagram", "Facebook", "TikTok"].map((s) => (
                <a key={s} href="#" className="footer-social">{s}</a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="footer-heading">Navigate</p>
            <ul style={{ listStyle: "none" }}>
              {navLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.65rem" }}>
                  <Link href={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="footer-heading">Hours</p>
            {hours.map((h) => (
              <div key={h.day} style={{
                display: "flex", justifyContent: "space-between",
                gap: "1rem", marginBottom: "0.75rem",
              }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#111" }}>
                  {h.day}
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#b8922a" }}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="footer-heading">Find Us</p>
            <address style={{
              fontStyle: "normal",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.88rem", lineHeight: 1.8,
              color: "rgba(17,17,17,0.55)",
              marginBottom: "1rem",
            }}>
              110 Coastal Avenue<br />San Diego, CA 92101
            </address>
            <a href="tel:+15550123" className="footer-link" style={{ display: "block", marginBottom: "0.4rem" }}>
              +1 555-0123
            </a>
            <a href="mailto:hello@jadegarden.com" className="footer-link">
              hello@jadegarden.com
            </a>
            <Link href="/reservations" style={{
              display: "inline-block", marginTop: "1.8rem",
              padding: "0.65rem 1.5rem",
              border: "1px solid #b8922a", color: "#b8922a",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem", fontWeight: 600,
              letterSpacing: "0.16em", textTransform: "uppercase",
              borderRadius: "1px",
              transition: "background 0.25s, color 0.25s",
            }} className="footer-reserve">
              Book a Table
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid #e0ddd5", paddingTop: "2rem",
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", gap: "1rem", alignItems: "center",
        }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(17,17,17,0.35)" }}>
            © 2026 Jade Garden. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.78rem",
                color: "rgba(17,17,17,0.35)", transition: "color 0.2s",
              }} className="footer-legal">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-heading {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem; font-weight: 600;
          letter-spacing: 0.28em; text-transform: uppercase;
          color: #b8922a; margin-bottom: 1.4rem;
        }
        .footer-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: rgba(17,17,17,0.5);
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: #b8922a; }
        .footer-social {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: rgba(17,17,17,0.4);
          transition: color 0.2s ease;
        }
        .footer-social:hover { color: #b8922a; }
        .footer-reserve:hover { background: #b8922a !important; color: #fff !important; }
        .footer-legal:hover { color: rgba(17,17,17,0.7) !important; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
