
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: string;
  label: string;
  path: string;
}

const NavItem = ({ icon, label, path }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link 
      to={path}
      className={`flex flex-col items-center whitespace-nowrap mt-8 ${
        isActive ? "text-[#6B047C]" : "text-[#808080]"
      }`}
    >
      <img src={icon} className="aspect-[1] object-contain w-8" alt={label} />
      <div className="text-xs font-medium tracking-[-0.24px] leading-[1.3]">
        {label}
      </div>
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <nav className="border-r-[color:var(--Grey-2,#E6E6E6)] bg-white flex flex-col overflow-hidden text-xs font-medium tracking-[-0.24px] leading-[1.3] pt-10 pb-[197px] px-[22px] rounded-[8px_0px_0px_0px] border-r border-solid max-md:pl-5 max-md:pb-[100px]">
      <div className="flex flex-col items-center">
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/82c578d7d386f11185408bbfb62535536506ba42?placeholderIfAbsent=true" 
          label="Discover" 
          path="/discover"
        />
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/4c942129fc45081063d66a27fff731c7b053ee5f?placeholderIfAbsent=true" 
          label="Home" 
          path="/"
        />
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/4faf6766d764ea6df51857b1bbcae9c5bb0165a2?placeholderIfAbsent=true" 
          label="Work package" 
          path="/work-package"
        />
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/37b11559f87a7c378b5fa307f7a399bd58d00a4d?placeholderIfAbsent=true" 
          label="Orders" 
          path="/orders"
        />
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/51aa6e2e5a609f1b51300f57b3b5332b89d9b809?placeholderIfAbsent=true" 
          label="Contacts" 
          path="/contacts"
        />
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/aa810655196af29f81471c0b7bb023916522ac95?placeholderIfAbsent=true" 
          label="Events" 
          path="/events"
        />
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/bc838c1ce8ee769c8532e772f62a99fdce65409d?placeholderIfAbsent=true" 
          label="Wallet" 
          path="/wallet"
        />
        <NavItem 
          icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/4f3cec023b05aa08f18e4a6644717c72a7ecb014?placeholderIfAbsent=true" 
          label="More" 
          path="/more"
        />
      </div>
    </nav>
  );
};
