import type { Metadata } from "next";
import ReservationsClient from "./ReservationsClient";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve your table at Jade Garden online. Available for lunch and dinner, Monday to Sunday. Private dining for groups of 8–50 guests.",
};

export default function ReservationsPage() {
  return <ReservationsClient />;
}
