import React from "react";

const messages = [
  { id: 1, name: "Wisdom umanah", role: "VENDOR", time: "23/09/24", avatar: "/Circular Profile.jpg" },
  { id: 2, name: "Wisdom umanah", role: "VENDOR", time: "23/09/24", avatar: "/Circular Profile.jpg" },
  { id: 3, name: "Wisdom umanah", role: "VENDOR", time: "23/09/24", avatar: "/Circular Profile.jpg" },
];

export const RecentMessages = () => {
  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
      <h3 className="text-gray-900 font-semibold text-base mb-4">
        Recent message
      </h3>
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex items-center justify-between border-b border-gray-100 pb-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={message.avatar}
                className="w-10 h-10 rounded-full object-cover"
                alt={message.name}
              />
              <div>
                <div className="text-gray-900 text-sm font-medium">
                  {message.name}
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  {message.role}
                </div>
              </div>
            </div>
            <button className="text-[#6B047C] text-xs font-medium px-4 py-1 rounded-md hover:bg-purple-50 transition-colors">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
