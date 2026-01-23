import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import CorporateEventManagementClient from "./corporate-event-management-client";

export const metadata: Metadata = generatePageMetadata({
  title: "Corporate Event Management in Bangalore | White Massif",
  description: "Leading corporate event management company in Bangalore delivering exceptional business events, conferences, and corporate gatherings with precision and creativity.",
  keywords: [
    "corporate event management Bangalore",
    "business event planners Bangalore",
    "corporate event organizers Bangalore",
    "event management company Bangalore",
    "corporate event services Bangalore",
    "business conference management",
    "corporate event solutions Bangalore"
  ],
  openGraph: {
    type: "website",
    images: ["/WM LOGO-01.png"]
  },
  path: "/services/corporate-event-management"
});

export default function CorporateEventManagementPage() {
  return <CorporateEventManagementClient />;
}
