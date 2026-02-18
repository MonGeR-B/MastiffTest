import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import HybridAndVirtualEventsClient from "./hybrid-and-virtual-events-client";

export const metadata: Metadata = generatePageMetadata({
    title: "Hybrid & Virtual Events in Bangalore | White Massif",
    description: "Expert hybrid and virtual event management services in Bangalore. We deliver seamless digital experiences, webinars, virtual conferences, and hybrid town halls.",
    keywords: [
        "hybrid event organizers Bangalore",
        "virtual event management",
        "webinar services Bangalore",
        "live streaming events",
        "virtual conference platforms",
        "hybrid meeting solutions",
        "digital event agency"
    ],
    openGraph: {
        type: "website",
        images: ["/WM LOGO-01.png"]
    },
    path: "/services/hybrid-and-virtual-events"
});

export default function HybridAndVirtualEventsPage() {
    return <HybridAndVirtualEventsClient />;
}
