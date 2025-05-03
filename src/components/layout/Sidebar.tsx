import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ProfileDropdown } from "@/components/layout/ProfileDropdown";

const navItems = [
  {
    label: "Discover",
    svg: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-colors duration-300"
      >
        <path
          d="M18.8271 10.9522C18.8271 6.34985 15.0961 2.6189 10.4937 2.6189C5.89136 2.6189 2.1604 6.34985 2.1604 10.9522C2.1604 15.5546 5.89136 19.2856 10.4937 19.2856C15.0961 19.2856 18.8271 15.5546 18.8271 10.9522Z"
          stroke="currentColor"
        />
        <path
          d="M10.8281 7.86704L13.2613 7.05594C13.9998 6.80977 14.3692 6.68668 14.5641 6.8816C14.759 7.07653 14.6359 7.44579 14.3897 8.18433L13.5786 10.6176C13.1591 11.8761 12.9493 12.5053 12.4981 12.9566C12.0468 13.4078 11.4176 13.6176 10.1591 14.0371L7.72583 14.8482C6.9873 15.0944 6.61803 15.2175 6.42311 15.0226C6.22818 14.8277 6.35127 14.4583 6.59745 13.7198L7.40854 11.2866C7.82804 10.0281 8.03779 9.39882 8.48905 8.94754C8.94032 8.49629 9.56957 8.28654 10.8281 7.86704Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.4936 10.9521L10.4883 10.9575"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Home",
    svg: (
      <svg
        width="11"
        height="13"
        viewBox="0 0 13 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-colors duration-300"
      >
        <path
          d="M0.6604 7.63333C0.6604 6.50167 0.660401 5.93583 0.888734 5.43833C1.1179 4.94083 1.54707 4.57333 2.40623 3.83667L3.23957 3.1225C4.79373 1.79167 5.56873 1.125 6.49373 1.125C7.41873 1.125 8.19457 1.79083 9.7479 3.12167L10.5812 3.83583C11.4396 4.5725 11.8696 4.94 12.0979 5.4375C12.3271 5.935 12.3271 6.50083 12.3271 7.6325V11.1667C12.3271 12.7383 12.3271 13.5233 11.8387 14.0117C11.3504 14.5 10.5654 14.5 8.99373 14.5H3.99373C2.42207 14.5 1.63707 14.5 1.14873 14.0117C0.6604 13.5233 0.6604 12.7383 0.6604 11.1667V7.63333Z"
          stroke="currentColor"
        />
        <path
          d="M8.57707 14.5V10.3333C8.57707 10.1123 8.48927 9.90036 8.33299 9.74408C8.17671 9.5878 7.96475 9.5 7.74373 9.5H5.24373C5.02272 9.5 4.81076 9.5878 4.65448 9.74408C4.4982 9.90036 4.4104 10.1123 4.4104 10.3333V14.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Orders",
    path: "/orders",
    svg: (
      <svg
        width="17"
        height="16"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-colors duration-300"
      >
        <path
          d="M14.1942 17.7898L14.6544 17.2147C15.0587 16.7093 15.9174 16.75 16.259 17.2907C16.6698 17.9412 17.6847 17.8119 17.9661 17.2135C17.9807 17.1824 17.9441 17.2602 17.9754 16.991C18.0067 16.7217 17.9937 16.6603 17.9676 16.5373L16.365 8.97008C15.9622 7.06829 15.7608 6.11738 15.0681 5.55869C14.3754 5 13.3977 5 11.4423 5H9.54499C7.58963 5 6.61194 5 5.9192 5.55869C5.22646 6.11738 5.02508 7.06829 4.62231 8.97008L3.01974 16.5373C2.99369 16.6603 2.98066 16.7217 3.01194 16.991C3.0432 17.2602 3.0066 17.1824 3.02124 17.2135C3.30269 17.8119 4.31745 17.9412 4.72836 17.2907C5.06992 16.75 5.92854 16.7093 6.33289 17.2147L6.7931 17.7898C7.37294 18.5145 8.58381 18.5145 9.16365 17.7898L9.23599 17.6993C9.85124 16.9304 11.1361 16.9304 11.7513 17.6993L11.8237 17.7898C12.4035 18.5145 13.6144 18.5145 14.1942 17.7898Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path
          d="M2.5632 7.91669C2.07545 7.41001 2.16727 6.75746 2.16727 5.12649C2.16727 3.49552 2.16727 2.68004 2.65503 2.17336C3.14279 1.66669 3.92782 1.66669 5.49788 1.66669H15.4897C17.0597 1.66669 17.8448 1.66669 18.3326 2.17336C18.8203 2.68004 18.8203 3.49552 18.8203 5.12649C18.8203 6.75746 18.9116 7.41001 18.4238 7.91669"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M10.4937 8.33331H7.99365"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.1604 11.6667H7.1604"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Contacts",
    svg: (
      <svg
        width="17"
        height="16"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-colors duration-300"
      >
        <path
          d="M10.4937 18.3333C7.15462 18.3333 5.48506 18.3333 4.44773 17.235C3.4104 16.1366 3.4104 14.3688 3.4104 10.8333C3.4104 7.29778 3.4104 5.53001 4.44773 4.43166C5.48506 3.33331 7.15462 3.33331 10.4937 3.33331C13.8328 3.33331 15.5024 3.33331 16.5397 4.43166C17.5771 5.53001 17.5771 7.29778 17.5771 10.8333C17.5771 14.3688 17.5771 16.1366 16.5397 17.235C15.5024 18.3333 13.8328 18.3333 10.4937 18.3333Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.1604 3.33335V1.66669"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M13.8269 3.33335V1.66669"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M12.1753 7.9105C12.1753 8.831 11.4291 9.57716 10.5087 9.57716C9.58821 9.57716 8.84204 8.831 8.84204 7.9105C8.84204 6.99006 9.58821 6.2439 10.5087 6.2439C11.4291 6.2439 12.1753 6.99006 12.1753 7.9105Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.21288 13.9301C8.09484 12.5723 9.4954 12.0635 10.5088 12.0645C11.5221 12.0656 12.8817 12.5723 13.7637 13.9301C13.8207 14.0179 13.8364 14.126 13.7849 14.2173C13.5787 14.583 12.9382 15.3088 12.4757 15.358C11.9442 15.4145 10.554 15.4224 10.5099 15.4227C10.4657 15.4224 9.03257 15.4145 8.50082 15.358C8.03827 15.3088 7.39787 14.583 7.19161 14.2173C7.14015 14.126 7.15587 14.0179 7.21288 13.9301Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Work Package",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="w-5 h-5 transition-colors duration-300">
        <path d="M10.0447 18.9577C9.36284 18.9577 8.71151 18.6872 7.40879 18.1462C4.16604 16.7994 2.54468 16.1261 2.54468 14.9934V7.07821M10.0447 18.9577C10.7265 18.9577 11.3778 18.6872 12.6806 18.1462C15.9233 16.7994 17.5447 16.1261 17.5447 14.9934V7.07821M10.0447 18.9577V10.7649M2.54468 7.07821C2.54468 7.58143 3.21265 7.89921 4.54861 8.53475L6.98294 9.69285C8.48534 10.4076 9.23659 10.7649 10.0447 10.7649M2.54468 7.07821C2.54468 6.57498 3.21265 6.25722 4.54861 5.62167L6.29468 4.79102M17.5447 7.07821C17.5447 7.58143 16.8767 7.89921 15.5408 8.53475L13.1064 9.69285C11.604 10.4076 10.8528 10.7649 10.0447 10.7649M17.5447 7.07821C17.5447 6.57498 16.8767 6.25722 15.5408 5.62167L13.7947 4.79102M5.04468 11.5842L6.71134 12.4035" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0478 2.29102V8.12431M10.0478 8.12431C10.2671 8.12727 10.4833 7.97412 10.6429 7.78713L11.7114 6.50913M10.0478 8.12431C9.8363 8.12145 9.62213 7.96908 9.4528 7.78713L8.37805 6.50913" stroke="currentColor" stroke-linecap="round"/>
      </svg>
    ),
  },
  {
    label: "Events",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="w-5 h-5 transition-colors duration-300">
        <path d="M15.0447 1.79102V3.45768M5.04468 1.79102V3.45768" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0409 10.959H10.0484M10.0409 14.2923H10.0484M13.3705 10.959H13.378M6.7113 10.959H6.71878M6.7113 14.2923H6.71878" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.9613 6.79102H17.128" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.12805 10.3277C2.12805 6.69662 2.12805 4.88107 3.17149 3.75303C4.21492 2.625 5.89429 2.625 9.25305 2.625H10.8364C14.1951 2.625 15.8746 2.625 16.918 3.75303C17.9614 4.88107 17.9614 6.69662 17.9614 10.3277V10.7557C17.9614 14.3867 17.9614 16.2022 16.918 17.3303C15.8746 18.4583 14.1951 18.4583 10.8364 18.4583H9.25305C5.89429 18.4583 4.21492 18.4583 3.17149 17.3303C2.12805 16.2022 2.12805 14.3867 2.12805 10.7557V10.3277Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.54468 6.79102H17.5447" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Wallet",
    svg: (
      <svg
        width="17"
        height="16"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-colors duration-300"
      >
        <path
          d="M12.9937 12.5C12.9937 13.1903 13.5533 13.75 14.2437 13.75C14.934 13.75 15.4937 13.1903 15.4937 12.5C15.4937 11.8097 14.934 11.25 14.2437 11.25C13.5533 11.25 12.9937 11.8097 12.9937 12.5Z"
          stroke="currentColor"
        />
        <path
          d="M12.9968 6.5021C8.47381 6.18868 4.74757 5.51753 2.99365 4.99976V12.551C2.99365 14.213 2.99365 15.044 3.50997 15.7217C4.02629 16.3995 4.73468 16.5909 6.15146 16.9737C8.44051 17.5922 10.8466 17.9605 13.0025 18.1712C15.2369 18.3895 16.3541 18.4987 17.1739 17.7495C17.9937 17.0004 17.9937 15.797 17.9937 13.39V11.712C17.9937 9.37454 17.9937 8.20584 17.3211 7.48049C16.6486 6.75514 15.4313 6.67079 12.9968 6.5021Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.1818 6.66662C15.4966 5.48057 15.7814 3.32347 14.9328 2.25239C14.395 1.57352 13.5956 1.63874 12.8118 1.70767C8.69191 2.07001 5.78152 2.80605 4.15449 3.3061C3.45489 3.52112 2.99365 4.20431 2.99365 4.96699"
          stroke="currentColor"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "More",
    svg: (
      <svg
        width="17"
        height="16"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-colors duration-300"
      >
        <path
          d="M10.4902 10H10.4977"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.8269 10H13.8344"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.16016 10H7.16764"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.8271 9.99996C18.8271 5.39758 15.0961 1.66663 10.4937 1.66663C5.89136 1.66663 2.1604 5.39758 2.1604 9.99996C2.1604 14.6023 5.89136 18.3333 10.4937 18.3333C15.0961 18.3333 18.8271 14.6023 18.8271 9.99996Z"
          stroke="currentColor"
        />
      </svg>
    ),
  },
];


export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const location = useLocation();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate();

  // Function to get the active item based on the current route
  const getActiveItemFromRoute = (path: string): string => {
    const routeToItem = {
      '/': 'Discover',
      '/home': 'Home',
      '/contacts': 'Contacts',
      '/events': 'Events',
      '/wallet': 'Wallet',
      '/work-package': 'Work Package',
      '/dispute': 'Dispute',
      '/help-and-support': 'Help and support',
      '/orders': 'Orders'
    };

    const matchingItem = Object.entries(routeToItem).find(([route, item]) => 
      path === route || path.startsWith(route + '/')
    );

    if (matchingItem) {
      return matchingItem[1];
    }

    // If no match found, check if we're on the root path
    if (path === '/') {
      return 'Discover';
    }

    return "";
  };

  // Update active item when location changes
  useEffect(() => {
    const newActiveItem = getActiveItemFromRoute(location.pathname);
    if (newActiveItem !== activeItem) {
      setActiveItem(newActiveItem);
    }
  }, [location]);

  // Update active item when clicking nav items
  const navigateTo = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNav = (label: string) => {
    setActiveItem(label);
    if (label === "More") {
      setShowProfileDropdown((prev) => !prev);
      return;
    }
    setShowProfileDropdown(false);
    
    // Navigate based on the label
    const routeMap = {
      "Discover": "/",
      "Contacts": "/contacts",
      "Events": "/events",
      "Home": "/home",
      "Wallet": "/wallet",
      "Work Package": "/work-package",
      "Dispute": "/dispute",
      "Help and support": "/help-and-support",
      "Orders": "/orders"
    };

    const route = routeMap[label];
    if (route) {
      navigate(route);
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="border-r border-[#E6E6E6] bg-white text-xs text-[#808080] font-medium tracking-[-0.24px] pt-10 pb-16 px-5 overflow-hidden max-md:hidden">
        <div className="flex flex-col items-center space-y-4">
          {navItems.map((item) => {
            const isActive = activeItem === item.label;
            if (item.label === "More") {
              return (
                <div
                  key={item.label}
                  className={`group flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    isActive ? "text-[#6B047C]" : "text-[#808080] hover:text-[#6B047C]"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "bg-[rgba(107,4,124,0.1)]"
                        : "group-hover:bg-[rgba(107,4,124,0.1)]"
                    }`}
                    onClick={() => handleNav(item.label)}
                  >
                    {React.cloneElement(item.svg, {
                      className: `w-5 h-5 transition-colors duration-300 ${isActive ? 'stroke-[#6B047C] fill-[#6B047C]' : 'stroke-[#808080] hover:stroke-[#6B047C] hover:fill-[#6B047C]'}`,
                    })}
                  </div>
                  <div className="mt-1">{item.label}</div>
                  <ProfileDropdown isOpen={showProfileDropdown} onClose={() => setShowProfileDropdown(false)} />
                </div>
              );
            }
            return (
              <div
                key={item.label}
                onClick={() => handleNav(item.label)}
                className={`group flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  isActive ? "text-[#6B047C]" : "text-[#808080] hover:text-[#6B047C]"
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "bg-[rgba(107,4,124,0.1)]"
                      : "group-hover:bg-[rgba(107,4,124,0.1)]"
                  }`}
                >
                  {item.svg}
                </div>
                <div className="mt-1">{item.label}</div>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile Sidebar (bottom, icons only) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E6E6E6] flex justify-between items-center px-2 py-1 sm:hidden h-14" style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        {navItems.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <button
              key={item.label}
              onClick={() => handleNav(item.label)}
              className={`flex flex-col items-center justify-center flex-1 transition-all duration-300 px-1 ${
                isActive ? "text-[#6B047C]" : "text-[#808080] hover:text-[#6B047C]"
              }`}
              style={{ minWidth: 0 }}
              aria-label={item.label}
            >
              <span className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors duration-300 ${
                isActive ? "bg-[rgba(107,4,124,0.1)]" : "hover:bg-[rgba(107,4,124,0.08)]"
              }`}>
                {React.cloneElement(item.svg, {
                  className: 'w-5 h-5',
                })}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;