import React from "react";
import { EventCard } from "./EventCard";

interface EventGridProps {
  viewMode?: "grid" | "list";
}

const eventData = [
  {
    imageUrl: "https://placehold.co/400x300?text=Event",
    title: "Legal Tech Conference 2024",
    categories: "Technology | Legal Innovation | Networking",
    price: "$299",
    availableSeats: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Event",
    title: "Contract Law Workshop",
    categories: "Business Law | Contract Drafting | Legal Writing",
    price: "$199",
    availableSeats: 15,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Event",
    title: "IP Rights Seminar",
    categories: "Intellectual Property | Copyright | Trademark",
    price: "$149",
    availableSeats: 45,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Event",
    title: "Legal Writing Masterclass",
    categories: "Legal Writing | Communication | Professional Development",
    price: "$249",
    availableSeats: 20,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Event",
    title: "Corporate Law Symposium",
    categories: "Corporate Law | Business | Finance",
    price: "$399",
    availableSeats: 50,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Event",
    title: "Legal Ethics Workshop",
    categories: "Ethics | Professional Responsibility | Compliance",
    price: "$179",
    availableSeats: 25,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Event",
    title: "International Law Conference",
    categories: "International Law | Human Rights | Diplomacy",
    price: "$349",
    availableSeats: 100,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Event",
    title: "Legal Tech Startup Pitch",
    categories: "Startups | Innovation | Technology",
    price: "$99",
    availableSeats: 75,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Event",
    title: "Family Law Workshop",
    categories: "Family Law | Divorce | Child Custody",
    price: "$229",
    availableSeats: 30,
  },
];

export const EventGrid: React.FC<EventGridProps> = ({ viewMode = "grid" }) => {
  return (
    <div className="w-full font-medium mt-12 max-md:mt-10">
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-4"}>
        {eventData.map((event, index) => (
          <EventCard key={index} {...event} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}; 