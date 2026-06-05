"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex", alignItems: "center",
      overflow: "hidden",
      background: "#000",
    }}>
      {/* ── Background image ── */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85')",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.28) saturate(0.7)",
        }}
      />

      {/* ── Layered overlays ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(120deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.3) 100%)",
      }} />

      {/* ── Gold top accent ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #d4a843 35%, #f0c060 65%, transparent)",
          transformOrigin: "left",
        }}
      />

      {/* ── Vertical gold line ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
        style={{
          position: "absolute", left: "2rem", top: "20%", bottom: "20%",
          width: "1px",
          background: "linear-gradient(180deg, transparent, #d4a843 40%, #d4a843 60%, transparent)",
          transformOrigin: "top",
        }}
      />

      {/* ── Content ── */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "1300px", margin: "0 auto",
        padding: "0 2rem", width: "100%",
        paddingTop: "76px",
      }}>
        <div style={{ maxWidth: "780px", paddingLeft: "2rem" }}>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="eyebrow"
            style={{ marginBottom: "1.6rem" }}
          >
            San Diego · Est. 1998 · Michelin Bib Gourmand 2025
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.8rem, 8vw, 8rem)",
              fontWeight: 300, lineHeight: 0.96,
              color: "#fff",
              letterSpacing: "-0.01em",
              marginBottom: "2rem",
            }}
          >
            Where Tradition
            <br />
            <em style={{ color: "#d4a843", fontStyle: "italic" }}>Meets Fire.</em>
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{
              width: "80px", height: "1px",
              background: "linear-gradient(90deg, #d4a843, transparent)",
              marginBottom: "2rem", transformOrigin: "left",
            }}
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem", fontWeight: 300,
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.85, maxWidth: "500px",
              marginBottom: "3rem",
            }}
          >
            Authentic Sichuan, Cantonese, and regional Chinese cuisine — crafted with
            three generations of family tradition and the finest seasonal ingredients.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}
          >
            <Link href="/reservations" className="btn-gold">Reserve a Table</Link>
            <Link href="/menu"         className="btn-outline btn-outline-light">Explore the Menu</Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.55 }}
            style={{
              display: "flex", gap: "3.5rem",
              marginTop: "5rem", flexWrap: "wrap",
            }}
          >
            {[
              { value: "4.9★",  label: "Guest Rating" },
              { value: "25+",   label: "Years of Excellence" },
              { value: "3",     label: "Michelin Recognitions" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem", fontWeight: 300,
                  color: "#d4a843",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem", letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.38)",
                  marginTop: "0.3rem",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          position: "absolute", bottom: "2.5rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.6rem", letterSpacing: "0.32em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{
            width: "1px", height: "44px",
            background: "linear-gradient(180deg, #d4a843, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
