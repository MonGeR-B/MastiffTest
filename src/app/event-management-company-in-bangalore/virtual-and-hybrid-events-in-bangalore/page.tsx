import type { Metadata } from "next";
import VirtualHybridEventClient from "./virtual-and-hybrid-events-client";

export const metadata: Metadata = {
    title: "Virtual & Hybrid Corporate Events Bangalore | White Massif",
    description: "Virtual and hybrid corporate events in Bangalore. Secure streaming, professional AV, and engaging online experiences. Book a demo event.",
};

export default function VirtualHybridEventPage() {
    return <VirtualHybridEventClient />;
}
