import React from "react";
import { CourseCard } from "./CourseCard";

const courseData = Array(9).fill({
  imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/57b86d68086c16f2b2bdbcd66624c9e65e8ccbb0",
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