import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onProfileClick: () => void;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ isOpen, onClose, onProfileClick }) => {
  const navigate = useNavigate();

  const handleDisputeClick = () => {
    navigate('/dispute');
    onClose();
  };

  const handleHelpAndSupportClick = () => {
    navigate('/help-and-support');
    onClose();
  };

  const handleSettingsClick = () => {
    navigate('/setting');
    onClose();
  };

  const handleProfileClick = () => {
    onProfileClick();
    onClose();
  };
  if (!isOpen) return null;

  // Profile actions with their icons
  const profileActions = [
    { label: "Dispute", icon: "/Frame 1000007971.svg", onClick: handleDisputeClick },
    { label: "Help and support", icon: "/Frame 1000007971 (1).svg", onClick: handleHelpAndSupportClick },
    { label: "Settings", icon: "/Frame 1000007971 (2).svg", onClick: handleSettingsClick },
    { label: "Log out", icon: "/Frame 1000007971 (3).svg" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-lg py-2 px-3 w-64 sm:w-[290px] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dropdown
      >
        <div className="space-y-2">
          <div
            className="flex items-center gap-2 p-2 hover:bg-[#F9F5FA] rounded-lg cursor-pointer group"
            onClick={handleProfileClick}
          >
            <img src="/Frame 106.png" alt="Profile" className="w-8 h-8 rounded-lg object-cover" />
            <div className="flex flex-col">
              <span className="text-black text-sm font-medium">
                Wisdom Umanah
              </span>
              <span className="text-gray-500 text-xs">
                My profile
              </span>
            </div>
          </div>
          {profileActions.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                item.onClick?.();
                onClose();
              }}
              className="flex items-center p-2 hover:bg-[#F9F5FA] rounded-lg cursor-pointer gap-3"
            >
              <img src={item.icon} alt={item.label + ' icon'} className="w-6 h-6" />
              <span className="text-gray-500 text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
