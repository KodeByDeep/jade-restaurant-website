"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section style={{
      position: "relative",
      height: "62vh", minHeight: "500px",
      display: "flex", alignItems: "flex-end",
      overflow: "hidden",
    }}>
      {/* ── Background image ── */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.22) saturate(0.8)",
        }}
      />

      {/* ── Gradient overlay ── */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.88) 100%)",
      }} />

      {/* ── Gold top bar ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #d4a843 30%, #f0c060 60%, transparent)",
          transformOrigin: "left",
        }}
      />

      {/* ── Content ── */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "1300px", margin: "0 auto",
        padding: "0 2rem 4.5rem", width: "100%",
      }}>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="eyebrow"
          style={{ marginBottom: "1rem" }}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)",
            fontWeight: 300, lineHeight: 1.06,
            color: "#fff",
            marginBottom: subtitle ? "1.1rem" : 0,
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.72 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem", fontWeight: 300,
              color: "rgba(255,255,255,0.58)",
              maxWidth: "540px", lineHeight: 1.75,
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
