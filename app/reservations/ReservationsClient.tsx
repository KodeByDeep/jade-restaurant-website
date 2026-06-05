"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";
import { timeSlots, fullyBookedSlots } from "@/lib/data";
import Link from "next/link";

type FormData = {
  name: string; email: string; phone: string;
  date: string; time: string; guests: number;
  occasion: string; notes: string;
};

export default function ReservationsClient() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "",
    date: "", time: timeSlots[0], guests: 2,
    occasion: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === "guests" ? Number(value) : value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date) {
      setError("Please complete all required fields.");
      return;
    }
    if (fullyBookedSlots.includes(form.time)) {
      setError("This time slot is fully booked. Please choose another.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Reserve Your Table"
        subtitle="Join us for an unforgettable dining experience. We look forward to welcoming you."
        image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1800&q=80"
      />

      <section style={{ padding: "7rem 2rem", background: "#050505" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.7fr",
          gap: "5rem", alignItems: "start",
        }} className="res-grid">

          {/* ── Left info ── */}
          <div>
            <AnimateIn>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: "#fff", marginBottom: "1.4rem" }}>
                Dining Hours
              </h2>
              <div className="gold-rule" style={{ marginBottom: "2rem" }} />
              {[
                { day: "Monday – Thursday", time: "11:30 – 22:00" },
                { day: "Friday – Saturday",  time: "11:00 – 23:00" },
                { day: "Sunday",             time: "11:00 – 21:30" },
              ].map((h) => (
                <div key={h.day} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "1rem 0", borderBottom: "1px solid #1a1a1a",
                }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#fff" }}>{h.day}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#d4a843" }}>{h.time}</span>
                </div>
              ))}
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div style={{
                marginTop: "2.5rem", padding: "2rem",
                border: "1px solid #1e1e1e", background: "#0a0a0a",
              }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#fff", marginBottom: "0.9rem" }}>
                  Private Dining
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.86rem", lineHeight: 1.75, color: "rgba(255,255,255,0.45)", marginBottom: "1.2rem" }}>
                  Dedicated banquet rooms for 8–50 guests with customisable menus. Perfect for celebrations, corporate events, and family gatherings.
                </p>
                <Link href="/contact" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d4a843" }}>
                  Enquire →
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", lineHeight: 1.75, color: "rgba(255,255,255,0.35)", marginTop: "2rem" }}>
                For same-day reservations or groups larger than 12, call us at{" "}
                <a href="tel:+15550123" style={{ color: "#d4a843" }}>+1 555-0123</a>.
              </p>
            </AnimateIn>
          </div>

          {/* ── Right form ── */}
          <AnimateIn delay={0.1} direction="left">
            <div style={{ background: "#0a0a0a", border: "1px solid #1e1e1e", padding: "3rem" }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: "center", padding: "3rem 0" }}
                  >
                    <div style={{ fontSize: "2.8rem", color: "#d4a843", marginBottom: "1.4rem" }}>✓</div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: "#fff", marginBottom: "1rem" }}>
                      Reservation Received
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, color: "rgba(255,255,255,0.5)" }}>
                      Thank you, {form.name}. We'll confirm your booking via email within 2 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", fontWeight: 300, color: "#fff", marginBottom: "0.4rem" }}>
                      Book a Table
                    </h2>
                    <div className="gold-rule" style={{ marginBottom: "0.8rem" }} />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                      <label className="field-label">Full Name *<input type="text"  name="name"  value={form.name}  onChange={handleChange} required className="field" /></label>
                      <label className="field-label">Email *    <input type="email" name="email" value={form.email} onChange={handleChange} required className="field" /></label>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                      <label className="field-label">Phone *    <input type="tel"    name="phone"  value={form.phone}  onChange={handleChange} required className="field" /></label>
                      <label className="field-label">Guests     <input type="number" name="guests" value={form.guests} min={1} max={12} onChange={handleChange} className="field" /></label>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                      <label className="field-label">Date *
                        <input type="date" name="date" value={form.date} onChange={handleChange} required className="field" />
                      </label>
                      <label className="field-label">Time Slot
                        <select name="time" value={form.time} onChange={handleChange} className="field">
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot} disabled={fullyBookedSlots.includes(slot)}>
                              {slot}{fullyBookedSlots.includes(slot) ? " — Fully Booked" : ""}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <label className="field-label">
                      Occasion (optional)
                      <input type="text" name="occasion" value={form.occasion} onChange={handleChange} placeholder="Birthday, Anniversary, Business dinner…" className="field" />
                    </label>
                    <label className="field-label">
                      Special Requests (optional)
                      <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} placeholder="Dietary requirements, seating preferences…" className="field" style={{ resize: "vertical" }} />
                    </label>

                    {error && (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", color: "#e07070" }}>{error}</p>
                    )}

                    <button type="submit" className="btn-gold" style={{ width: "100%", textAlign: "center" }}>
                      Confirm Reservation
                    </button>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.74rem", color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
                      Your details are kept secure and used only for your reservation.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimateIn>
        </div>
      </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .res-grid  { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row  { grid-template-columns: 1fr !important; }
        }
        .field-label {
          display: flex; flex-direction: column; gap: 0.45rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
      `}</style>
    </>
  );
}
