import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-utils";
import EmployeeEngagementActivitiesClient from "./employee-engagement-activities-client";

export const metadata: Metadata = generatePageMetadata({
    title: "Employee Engagement Activities in Bangalore | White Massif",
    description: "Leading employee engagement activities company in Bangalore delivering exceptional team building, annual day celebrations, and employee engagement experiences.",
    keywords: [
        "employee engagement activities Bangalore",
        "team building events Bangalore",
        "annual day celebration Bangalore",
        "employee engagement company Bangalore",
        "team offsite Bangalore",
        "rewards and recognition events",
        "themed celebrations Bangalore"
    ],
    openGraph: {
        type: "website",
        images: ["/WM LOGO-01.png"]
    },
    path: "/services/employee-engagement-activities"
});

export default function EmployeeEngagementActivitiesPage() {
    return <EmployeeEngagementActivitiesClient />;
}
