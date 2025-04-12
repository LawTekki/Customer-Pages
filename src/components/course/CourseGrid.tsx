import React from "react";
import { CourseCard } from "./CourseCard";

const courseData = [
  {
    id: 1,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e84e73833f3af2e5b5fe9c7ea4191a4d7e48818f?placeholderIfAbsent=true",
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