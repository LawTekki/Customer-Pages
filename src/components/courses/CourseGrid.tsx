import React from "react";
import { CourseCard } from "./CourseCard";

const courseData = Array(9).fill({
  imageUrl: "https://placehold.co/400x300?text=Course",
  title: "Legal Practice Course",
  category: "Business Law | Legal Education",
  price: "$199",
  copiesLeft: 25,
});

interface CourseGridProps {
  viewMode?: "grid" | "list";
}

export const CourseGrid: React.FC<CourseGridProps> = ({ viewMode = "grid" }) => {
  return (
    <div className="w-full mt-12">
      {viewMode === "grid" ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {courseData.map((course, index) => (
            <CourseCard key={index} {...course} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {courseData.map((course, index) => (
            <CourseCard key={index} {...course} viewMode={viewMode} />
        ))}
      </div>
      )}
    </div>
  );
}; 