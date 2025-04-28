import React from "react";
import { CourseCard } from "./CourseCard";

const courseData = [
  {
    id: 1,
    imageUrl: "https://placehold.co/400x300?text=Course",
    title: "Playing the winning law",
    description: "Business Law | Creative Law | Huma....",
    price: "$50",
  },
  // Add more items as needed
];

export const CourseGrid: React.FC = () => {
  return (
    <section className="max-w-[917px] font-medium">
      <div className="flex w-full items-center gap-4 flex-wrap max-md:max-w-full">
        {courseData.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}; 