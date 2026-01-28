import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import ProductBrandLaunchEventsClient from "./product-brand-launch-events-client";

export const metadata: Metadata = generatePageMetadata({
    title: "Product & Brand Launch Events in Bangalore | White Massif",
    description: "Premier product launch and brand activation event management company in Bangalore. We create impactful launch events for products, facilities, and brand operations.",
    keywords: [
        "product launch events Bangalore",
        "brand activation agency Bangalore",
        "facility inauguration events",
        "corporate launch planners",
        "product reveal events",
        "brand launch management",
        "opening ceremony organizers"
    ],
    openGraph: {
        type: "website",
        images: ["/WM LOGO-01.png"]
    },
    path: "/services/product-brand-launch-events"
});

export default function ProductBrandLaunchEventsPage() {
    return <ProductBrandLaunchEventsClient />;
}
