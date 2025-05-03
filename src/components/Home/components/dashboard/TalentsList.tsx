import React from "react";

const talents = [
  {
    id: 1,
    name: "Wisdom umanah",
    position: "Design Engineer",
    avatar: "/Circular Profile.jpg",
  },
  { 
    id: 2, 
    name: "Wisdom umanah", 
    position: "Design Engineer", 
    avatar: "/Circular Profile.jpg" 
  },
  { 
    id: 3, 
    name: "Wisdom umanah", 
    position: "Design Engineer", 
    avatar: "/Circular Profile.jpg" 
  },
];

export const TalentsList = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-900 font-semibold text-base mb-4">
        My talents
      </h3>
      <div className="space-y-4">
        {talents.map((talent) => (
          <div
            key={talent.id}
            className="flex items-center justify-between border-b border-gray-100 pb-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={talent.avatar}
                className="w-10 h-10 rounded-full object-cover"
                alt={talent.name}
              />
              <div>
                <div className="text-gray-900 text-sm font-medium">
                  {talent.name}
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  {talent.position}
                </div>
              </div>
            </div>
            <button className="text-[#6B047C] text-xs font-medium px-4 py-1 rounded-md hover:bg-purple-50 transition-colors">
              view profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
