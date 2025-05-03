import React, { useState } from "react";

const menuItems = [
  { id: "profile", label: "Profile settings" },
  { id: "security", label: "Security" },
  { id: "notification", label: "Notification" },
  { id: "security-question", label: "Security question" },
  { id: "two-factor", label: "Two factor authentication" },
  { id: "deactivate", label: "Deactivate my account" },
];

export const SettingsSidebar: React.FC = () => {
  const [activeId, setActiveId] = useState("profile");

  return (
    <nav className="w-full text-sm text-[#808080] font-medium">
      {menuItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveId(item.id)}
          className={`cursor-pointer select-none ${
            item.id === activeId
              ? "text-[#6B047C] border-l-[color:var(--Foundation-Purple-Normal,#6B047C)] bg-[#F9F5FA] border-[rgba(107,4,124,1)] border-l border-solid"
              : "text-[#808080]"
          } self-stretch w-full gap-2 px-2.5 py-2 ${item.id !== "profile" ? "mt-2" : ""}`}
        >
          {item.label}
        </div>
      ))}
    </nav>
  );
};
