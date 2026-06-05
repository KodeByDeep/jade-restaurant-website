"use client";

import AnimateIn from "./AnimateIn";
import Link from "next/link";

export default function HomeCta() {
  return (
    <section style={{
      position: "relative",
      padding: "11rem 2rem",
      overflow: "hidden",
      textAlign: "center",
      background: "#000",
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1800&q=80')",
        backgroundSize: "cover", backgroundPosition: "center",
        filter: "brightness(0.14) saturate(0.6)",
      }} />
      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%)",
      }} />

      {/* Gold horizontal lines */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, #d4a843 40%, #f0c060 60%, transparent)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, #d4a843 40%, #f0c060 60%, transparent)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
        <AnimateIn>
          <p className="eyebrow" style={{ marginBottom: "1.6rem" }}>Join Us</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3.2rem, 6vw, 6rem)",
            fontWeight: 300, lineHeight: 1.0,
            color: "#fff", marginBottom: "1.5rem",
          }}>
            Your Table
            <br />
            <em style={{ color: "#d4a843" }}>Awaits.</em>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.98rem", fontWeight: 300,
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.85, marginBottom: "3rem",
          }}>
            Reserve your place at Jade Garden and experience the finest Chinese cuisine
            in San Diego. Private dining available for groups of 8 to 50.
          </p>
          <div style={{ display: "flex", gap: "1.2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/reservations" className="btn-gold">Reserve a Table</Link>
            <Link href="/contact"      className="btn-outline btn-outline-light">Private Dining Enquiry</Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
