"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import AnimateIn from "@/components/AnimateIn";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd Love to Hear From You"
        subtitle="Reservations, private dining, press enquiries — we're here to help."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
      />

      <section style={{ padding: "7rem 2rem", background: "#050505" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.5fr",
          gap: "5rem", alignItems: "start",
        }} className="contact-grid">

          {/* ── Left info ── */}
          <div>
            <AnimateIn>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: "#fff", marginBottom: "1.4rem" }}>
                Find Us
              </h2>
              <div className="gold-rule" style={{ marginBottom: "2.5rem" }} />
            </AnimateIn>

            {[
              { icon: "◎", title: "Address",  content: "110 Coastal Avenue\nSan Diego, CA 92101" },
              { icon: "◎", title: "Phone",    content: "+1 555-0123",           href: "tel:+15550123" },
              { icon: "◎", title: "Email",    content: "hello@jadegarden.com",  href: "mailto:hello@jadegarden.com" },
              { icon: "◎", title: "Hours",    content: "Mon–Thu: 11:30–22:00\nFri–Sat: 11:00–23:00\nSun: 11:00–21:30" },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div style={{ display: "flex", gap: "1.4rem", marginBottom: "2rem" }}>
                  <div style={{ color: "#d4a843", fontSize: "1.1rem", marginTop: "0.1rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p className="eyebrow" style={{ marginBottom: "0.45rem" }}>{item.title}</p>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, transition: "color 0.2s" }} className="contact-link">
                        {item.content}
                      </a>
                    ) : (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, whiteSpace: "pre-line" }}>
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}

            {/* Social */}
            <AnimateIn delay={0.4}>
              <div style={{ marginTop: "1rem" }}>
                <p className="eyebrow" style={{ marginBottom: "1rem" }}>Follow Us</p>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  {["Instagram", "Facebook", "TikTok"].map((s) => (
                    <a key={s} href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }} className="contact-link">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Map */}
            <AnimateIn delay={0.5}>
              <div style={{ marginTop: "2.5rem", overflow: "hidden", border: "1px solid #1e1e1e" }}>
                <iframe
                  title="Jade Garden location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.610562285454!2d-117.16108718480166!3d32.715738680986815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954b0c1234567%3A0x9876543210abcdef!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v0000000000000"
                  width="100%" height="240"
                  style={{ border: 0, display: "block", filter: "grayscale(100%) invert(92%) contrast(88%)" }}
                  loading="lazy"
                />
              </div>
            </AnimateIn>
          </div>

          {/* ── Right form ── */}
          <AnimateIn delay={0.12} direction="left">
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
                      Message Sent
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.75, color: "rgba(255,255,255,0.5)" }}>
                      Thank you, {form.name}. We'll respond within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", fontWeight: 300, color: "#fff", marginBottom: "0.4rem" }}>
                      Send a Message
                    </h2>
                    <div className="gold-rule" style={{ marginBottom: "0.8rem" }} />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                      <label className="field-label">Your Name *<input type="text"  name="name"  value={form.name}  onChange={handleChange} required className="field" /></label>
                      <label className="field-label">Email *    <input type="email" name="email" value={form.email} onChange={handleChange} required className="field" /></label>
                    </div>

                    <label className="field-label">
                      Subject
                      <select name="subject" value={form.subject} onChange={handleChange} className="field">
                        <option value="">Select a topic…</option>
                        <option>General Enquiry</option>
                        <option>Private Dining</option>
                        <option>Press &amp; Media</option>
                        <option>Feedback</option>
                        <option>Other</option>
                      </select>
                    </label>

                    <label className="field-label">
                      Message *
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="How can we help?" className="field" style={{ resize: "vertical" }} />
                    </label>

                    <button type="submit" className="btn-gold" style={{ width: "100%", textAlign: "center" }}>
                      Send Message
                    </button>
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
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row     { grid-template-columns: 1fr !important; }
        }
        .field-label {
          display: flex; flex-direction: column; gap: 0.45rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }
        .contact-link:hover { color: #d4a843 !important; }
      `}</style>
    </>
  );
}
