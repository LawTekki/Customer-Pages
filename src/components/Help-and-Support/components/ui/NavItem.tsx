import React from "react";

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <div
      className={`flex flex-col items-center whitespace-nowrap ${isActive ? "text-[#6B047C]" : "text-[#808080]"}`}
    >
      <img src={icon} alt={label} className="aspect-[1] object-contain w-8" />
      <div className="mt-1">{label}</div>
    </div>
  );
};
