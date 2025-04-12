import React from "react";
import { EventCard } from "./EventCard";

interface EventGridProps {
  viewMode?: "grid" | "list";
}

const eventData = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9477111c309fbe09ea76a968de610bd33180e516?placeholderIfAbsent=true",
    title: "Legal Tech Conference 2024",
    categories: "Technology | Legal Innovation | Networking",
    price: "$299",
    availableSeats: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/830bc4b85a343bed6fb83cda8c3bc9d2e4f82ad6?placeholderIfAbsent=true",
    title: "Contract Law Workshop",
    categories: "Business Law | Contract Drafting | Legal Writing",
    price: "$199",
    availableSeats: 15,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ef69efdf714e949c09b280296a979e9ff3d14ea7?placeholderIfAbsent=true",
    title: "IP Rights Seminar",
    categories: "Intellectual Property | Copyright | Trademark",
    price: "$149",
    availableSeats: 45,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/1cd57c92962be0065ed081e0d7ddb4198623d7ce?placeholderIfAbsent=true",
    title: "Legal Writing Masterclass",
    categories: "Legal Writing | Communication | Professional Development",
    price: "$249",
    availableSeats: 20,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9439def2243f7bd7a681300625a9042657091ca1?placeholderIfAbsent=true",
    title: "Corporate Law Symposium",
    categories: "Corporate Law | Business | Finance",
    price: "$399",
    availableSeats: 50,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/d66ac6a983ed8c1bef8e6254864491320510a36b?placeholderIfAbsent=true",
    title: "Legal Ethics Workshop",
    categories: "Ethics | Professional Responsibility | Compliance",
    price: "$179",
    availableSeats: 25,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ea474bd141a2d0651d21289e0a38596a79f6dcd8?placeholderIfAbsent=true",
    title: "International Law Conference",
    categories: "International Law | Human Rights | Diplomacy",
    price: "$349",
    availableSeats: 100,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/2de1e92fa4359b772561e6ae0bbce3975b6edf56?placeholderIfAbsent=true",
    title: "Legal Tech Startup Pitch",
    categories: "Startups | Innovation | Technology",
    price: "$99",
    availableSeats: 75,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/70ce4dfb5f864f657cc2c3dff33f80293dd32f50?placeholderIfAbsent=true",
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