"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/menu",         label: "Menu" },
  { href: "/about",        label: "About" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact",      label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "76px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid #e0ddd5" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.06)" : "none",
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        <div style={{
          maxWidth: "1300px", margin: "0 auto",
          padding: "0 2rem", width: "100%",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* ── Logo ── */}
          <Link href="/" aria-label="Jade Garden home">
            <motion.div whileHover={{ opacity: 0.8 }} transition={{ duration: 0.2 }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.45rem", fontWeight: 600,
                color: "#b8922a", letterSpacing: "0.06em",
                lineHeight: 1.1,
              }}>
                JADE GARDEN
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem", letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(17,17,17,0.4)",
                marginTop: "2px",
              }}>
                Fine Chinese Dining
              </div>
            </motion.div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="nav-desktop" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-item"
                style={{ color: pathname === link.href ? "#b8922a" : "#111" }}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: "absolute", bottom: "-3px",
                      left: 0, right: 0, height: "1px",
                      background: "#b8922a",
                    }}
                  />
                )}
              </Link>
            ))}
            <Link href="/reservations" className="nav-reserve">Reserve</Link>
          </nav>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="nav-hamburger"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  menuOpen
                    ? i === 0 ? { rotate: 45,  y: 7,  opacity: 1 }
                    : i === 1 ? { opacity: 0 }
                    :           { rotate: -45, y: -7, opacity: 1 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                style={{
                  display: "block", width: "22px", height: "1px",
                  background: "#b8922a",
                }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            aria-label="Mobile navigation"
            style={{
              position: "fixed", top: "76px", left: 0, right: 0,
              zIndex: 99,
              background: "rgba(255,255,255,0.98)",
              borderBottom: "1px solid #e0ddd5",
              backdropFilter: "blur(16px)",
              padding: "1.5rem 2rem 2rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.9rem 0",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.4rem", fontWeight: 300,
                    color: pathname === link.href ? "#b8922a" : "#111",
                    borderBottom: "1px solid #ece9e1",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop {
          display: flex; align-items: center; gap: 2.2rem;
        }
        .nav-item {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          transition: color 0.2s ease;
        }
        .nav-item:hover { color: #b8922a !important; }
        .nav-reserve {
          padding: 0.55rem 1.3rem;
          border: 1px solid #b8922a;
          color: #b8922a;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          border-radius: 1px;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .nav-reserve:hover { background: #b8922a; color: #fff; }
        .nav-hamburger {
          display: none;
          flex-direction: column; gap: 5px;
          background: none; border: none;
          cursor: pointer; padding: 6px;
        }
        @media (max-width: 820px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
