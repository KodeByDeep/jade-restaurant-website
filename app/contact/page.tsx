import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jade Garden. Find us at 110 Coastal Avenue, San Diego. Call +1 555-0123 or send us a message for reservations and private dining enquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
