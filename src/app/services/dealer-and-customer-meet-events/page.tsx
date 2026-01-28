import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import DealerAndCustomerMeetEventsClient from "./dealer-and-customer-meet-events-client";

export const metadata: Metadata = generatePageMetadata({
    title: "Dealer & Customer Meet Events in Bangalore | White Massif",
    description: "Professional dealer and customer meet event management services in Bangalore. We organize impactful industry conventions, channel partner meets, and customer engagement events.",
    keywords: [
        "dealer meet organizers Bangalore",
        "customer meet management",
        "channel partner events",
        "industry conventions Bangalore",
        "distributor meet planners",
        "corporate networking events",
        "business convention organizers"
    ],
    openGraph: {
        type: "website",
        images: ["/WM LOGO-01.png"]
    },
    path: "/services/dealer-and-customer-meet-events"
});

export default function DealerAndCustomerMeetEventsPage() {
    return <DealerAndCustomerMeetEventsClient />;
}
