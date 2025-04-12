import React from "react";
import { VirtualBadge } from "../common/VirtualBadge";

interface CourseCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  imageUrl,
  title,
  description,
  price,
}) => {
  return (
    <article className="self-stretch flex min-w-60 flex-col items-stretch justify-center grow shrink w-[236px] my-auto">
      <div className="bg-[#F9F5FA] flex w-full flex-col overflow-hidden whitespace-nowrap leading-[1.3] pl-6 pr-2 pt-2 pb-[99px] rounded-2xl max-md:pl-5">
        <VirtualBadge />
        <div className="self-center flex w-[101px] max-w-full flex-col items-center text-xl text-[#6B047C] tracking-[-0.4px] mt-[57px] max-md:mt-10">
          <img
            src={imageUrl}
            alt="Course icon"
            className="aspect-[1] object-contain w-10"
          />
          <div className="mt-1">Courses</div>
        </div>
      </div>
      <div className="flex w-full max-w-[283px] flex-col items-stretch text-[#1A011E] mt-2">
        <div className="w-full">
          <h2 className="text-2xl leading-[1.3] tracking-[-0.48px]">{title}</h2>
          <p className="text-base tracking-[-0.32px] mt-1">{description}</p>
        </div>
        <div className="gap-2 text-base whitespace-nowrap tracking-[-0.32px] mt-1">
          {price}
        </div>
      </div>
    </article>
  );
}; 