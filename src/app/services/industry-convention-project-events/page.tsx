import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import IndustryConventionProjectEventsClient from "./industry-convention-project-events-client";

export const metadata: Metadata = generatePageMetadata({
    title: "Industry Convention & Project Events in Bangalore | White Massif",
    description: "Professional industry convention and project event management services in Bangalore. We organize large-scale conventions, project milestone events, and industry summits.",
    keywords: [
        "industry convention organizers Bangalore",
        "project launch events",
        "industry summits management",
        "corporate convention planners",
        "large scale event management",
        "project milestone celebrations",
        "business convention agency"
    ],
    openGraph: {
        type: "website",
        images: ["/WM LOGO-01.png"]
    },
    path: "/services/industry-convention-project-events"
});

export default function IndustryConventionProjectEventsPage() {
    return <IndustryConventionProjectEventsClient />;
}
