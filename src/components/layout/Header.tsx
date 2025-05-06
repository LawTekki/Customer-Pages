import React, { useState, useEffect, useRef } from "react";
import { ProfileModal } from '@/components/Profile/components/profile/ProfileModal';
import { ProfileDropdown } from '@/components/layout/ProfileDropdown';

interface QuickAction {
  label: string;
  icon: string;
}

interface Notification {
  id: string;
  content: string;
  time: string;
}

interface Message {
  id: string;
  sender: string;
  content: string;
  time: string;
  avatar: string;
  isUnread?: boolean;
}

interface ProfileAction {
  label: string;
  icon: string;
}

export const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(e.target as Node)) {
        setShowNotifications(false);
      }
      if (messagesRef.current && !messagesRef.current.contains(e.target as Node)) {
        setShowMessages(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowDropdown(false);
        setShowNotifications(false);
        setShowMessages(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((v) => !v);
    setShowNotifications(false);
    setShowMessages(false);
  };

  const toggleNotifications = () => {
    setShowNotifications((v) => !v);
    setShowMessages(false);
    setShowDropdown(false);
  };

  const toggleMessages = () => {
    setShowMessages((v) => !v);
    setShowNotifications(false);
    setShowDropdown(false);
  };

  const messages: Message[] = [
    {
      id: "1",
      sender: "John Wills",
      content: "How about I handle this job offer for you with little or no pay for starters, afterwards we discuss payment",
      time: "23/09/24 | 2:42pm",
      avatar: "/Frame 106.png",
      isUnread: true
    },
    {
      id: "2",
      sender: "John Wills",
      content: "How about I handle this job offer for you with little or no pay for starters, afterwards we discuss payment",
      time: "23/09/24 | 2:42pm",
      avatar: "/Frame 106.png"
    },
    {
      id: "3",
      sender: "John Wills",
      content: "How about I handle this job offer for you with little or no pay for starters, afterwards we discuss payment",
      time: "23/09/24 | 2:42pm",
      avatar: "/Frame 106.png"
    },
    {
      id: "4",
      sender: "John Wills",
      content: "How about I handle this job offer for you with little or no pay for starters, afterwards we discuss payment",
      time: "23/09/24 | 2:42pm",
      avatar: "/Frame 106.png"
    },
    {
      id: "5",
      sender: "John Wills",
      content: "How about I handle this job offer for you with little or no pay for starters, afterwards we discuss payment",
      time: "23/09/24 | 2:42pm",
      avatar: "/Frame 106.png"
    }
  ];

  const quickActions: QuickAction[] = [
    { label: "Upload Event", icon: "" },
    { label: "Upload Product", icon: "" },
    { label: "Wallet", icon: "" }
  ];

  const profileActions: ProfileAction[] = [
    { label: "Dispute", icon: "/Frame 1000007971.svg" },
    { label: "Help and support", icon: "/Frame 1000007971 (1).svg" },
    { label: "Settings", icon: "/Frame 1000007971 (3).svg" },
    { label: "Log out", icon: "/Frame 1000007971.svg" },
  ];

  const notifications: Notification[] = [
    {
      id: "1",
      content: "Announcement: Don Norman's exclusive interview video is available today, we celebrate 10,000 Mentors globally",
      time: "23/09/24 | 2:42pm"
    },
    {
      id: "2",
      content: "Announcement: Don Norman's exclusive interview video is available today, we celebrate 10,000 Mentors globally",
      time: "23/09/24 | 2:42pm"
    },
    {
      id: "3",
      content: "Announcement: Don Norman's exclusive interview video is available today, we celebrate 10,000 Mentors globally",
      time: "23/09/24 | 2:42pm"
    },
    {
      id: "4",
      content: "Announcement: Don Norman's exclusive interview video is available today, we celebrate 10,000 Mentors globally",
      time: "23/09/24 | 2:42pm"
    },
    {
      id: "5",
      content: "Announcement: Don Norman's exclusive interview video is available today, we celebrate 10,000 Mentors globally",
      time: "23/09/24 | 2:42pm"
    },
    {
      id: "6",
      content: "Announcement: Don Norman's exclusive interview video is available today, we celebrate 10,000 Mentors globally",
      time: "23/09/24 | 2:42pm"
    }
  ];

  // Hamburger for mobile (rightmost, only on mobile)
  const Hamburger = (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 rounded-md border border-[#F2F2F2] bg-white ml-2 sm:ml-3 sm:hidden"
      aria-label="Open menu"
      onClick={() => setMobileMenuOpen((prev) => !prev)}
    >
      <span className="block w-4 h-0.5 bg-[#6B047C] rounded-sm transition-all"></span>
      <span className="block w-4 h-0.5 bg-[#6B047C] rounded-sm my-0.5 transition-all"></span>
      <span className="block w-4 h-0.5 bg-[#6B047C] rounded-sm transition-all"></span>
    </button>
  );

  // Mobile menu content (with interactive drawers)
  const [mobileTab, setMobileTab] = useState<'none'|'notifications'|'messages'|'profile'|'quick'>('none');
  const openMobileTab = (tab: typeof mobileTab) => setMobileTab(tab === mobileTab ? 'none' : tab);

  const MobileMenu = (
    <div className={`fixed inset-0 z-[60] bg-black bg-opacity-40 flex sm:hidden ${mobileMenuOpen ? '' : 'hidden'}`}
      onClick={() => { setMobileMenuOpen(false); setMobileTab('none'); }}
    >
      <div
        className={`fixed top-0 right-0 h-full w-11/12 max-w-xs bg-white shadow-2xl p-0 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}
        style={{ borderRadius: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-[#F2F2F2] z-10"
          aria-label="Close menu"
          style={{ borderRadius: 0 }}
          onClick={() => { setMobileMenuOpen(false); setMobileTab('none'); }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#6B047C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="flex flex-col divide-y divide-[#F2F2F2] bg-white pt-14">
          {/* Notifications */}
          <button className={`flex items-center gap-3 px-5 py-4 w-full text-left bg-white transition-colors ${mobileTab==='notifications' ? 'bg-[#F9F5FA]' : 'hover:bg-[#FAFAFA]'}`} onClick={() => openMobileTab('notifications')}>
            <img src="/notification-02.svg" alt="Notifications" className="w-6 h-6" />
            <span className="text-[#1A011E] text-base font-semibold flex-1">Notifications</span>
            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
            <svg className={`w-4 h-4 ml-2 transition-transform ${mobileTab==='notifications' ? 'rotate-90' : ''}`} fill="none" stroke="#808080" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          {mobileTab==='notifications' && (
            <div className="bg-[#F9F5FA] px-5 pb-4 max-h-64 overflow-y-auto animate-fadein" style={{ borderRadius: 0 }}>
              <div className="text-[#1A011E] text-base font-bold mb-3 mt-6">Notifications</div>
              {notifications.map(n => (
                <div key={n.id} className="mb-3 last:mb-0 p-3 bg-white shadow-sm flex flex-col gap-1" style={{ borderRadius: 0 }}>
                  <div className="text-xs text-[#808080] font-medium">{n.time}</div>
                  <div className="text-sm text-[#1A011E]">{n.content}</div>
                </div>
              ))}
              <div className="flex justify-between pt-3 mt-3 border-t border-[#eee]">
                <button className="text-xs text-[#808080] hover:text-[#6B047C] font-medium">Mark all as seen</button>
                <button className="text-xs text-[#6B047C] hover:text-[#4A0356] font-semibold">View all</button>
              </div>
            </div>
          )}
          {/* Messages */}
          <button className={`flex items-center gap-3 px-5 py-4 w-full text-left bg-white transition-colors ${mobileTab==='messages' ? 'bg-[#F9F5FA]' : 'hover:bg-[#FAFAFA]'}`} onClick={() => openMobileTab('messages')}>
            <img src="/system-uicons_message.svg" alt="Messages" className="w-6 h-6" />
            <span className="text-[#1A011E] text-base font-semibold flex-1">Messages</span>
            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
            <svg className={`w-4 h-4 ml-2 transition-transform ${mobileTab==='messages' ? 'rotate-90' : ''}`} fill="none" stroke="#808080" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          {mobileTab==='messages' && (
            <div className="bg-[#F9F5FA] px-5 pb-4 max-h-64 overflow-y-auto animate-fadein" style={{ borderRadius: 0 }}>
              <div className="text-[#1A011E] text-base font-bold mb-3 mt-6">Messages</div>
              {messages.map(m => (
                <div key={m.id} className="flex gap-3 items-center mb-3 last:mb-0 p-3 bg-white shadow-sm" style={{ borderRadius: 0 }}>
                  <img src={m.avatar} alt={m.sender} className="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-[#EEE]" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-[#1A011E] text-xs">{m.sender}</span>
                      <span className="text-[10px] text-[#808080] whitespace-nowrap">{m.time}</span>
                    </div>
                    <div className="text-xs text-[#808080] truncate">{m.content}</div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between pt-3 mt-3 border-t border-[#eee]">
                <button className="text-xs text-[#808080] hover:text-[#6B047C] font-medium">Mark all as seen</button>
                <button className="text-xs text-[#6B047C] hover:text-[#4A0356] font-semibold">View all</button>
              </div>
            </div>
          )}
          {/* Profile */}
          <button className={`flex items-center gap-3 px-5 py-4 w-full text-left bg-white transition-colors ${mobileTab==='profile' ? 'bg-[#F9F5FA]' : 'hover:bg-[#FAFAFA]'}`} onClick={() => openMobileTab('profile')}>
            <img src="/Frame 106.png" alt="Profile" className="w-7 h-7 rounded-lg object-cover" />
            <span className="text-[#1A011E] text-base font-semibold flex-1">Wisdom Umanah</span>
            <svg className={`w-4 h-4 ml-auto transition-transform ${mobileTab==='profile' ? 'rotate-90' : ''}`} fill="none" stroke="#808080" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          {mobileTab==='profile' && (
            <div className="bg-[#F9F5FA] px-5 pb-4 animate-fadein" style={{ borderRadius: 0 }}>
              <div className="flex flex-col gap-2 mt-6">
                <div
                  className="flex items-center gap-3 p-3 bg-white shadow-sm cursor-pointer"
                  style={{ borderRadius: 0 }}
                  onClick={() => {
                    setShowProfileModal(true);
                    setMobileMenuOpen(false);
                    setMobileTab('none');
                  }}
                >
                  <img src="/Frame 106.png" alt="Profile" className="w-8 h-8 rounded-lg object-cover" />
                  <div className="flex flex-col">
                    <span className="text-[#1A011E] text-sm font-semibold">Wisdom Umanah</span>
                    <span className="text-[#808080] text-xs">My profile</span>
                  </div>
                </div>
                {profileActions.map((item, idx) => (
                  <div key={idx} className="flex items-center p-3 bg-white shadow-sm cursor-pointer gap-3" style={{ borderRadius: 0 }}>
                    <img src={item.icon} alt={item.label + ' icon'} className="w-6 h-6" />
                    <span className="text-[#808080] text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Quick Actions */}
          <button className={`flex items-center gap-3 px-5 py-4 w-full text-left bg-white transition-colors ${mobileTab==='quick' ? 'bg-[#F9F5FA]' : 'hover:bg-[#FAFAFA]'}`} onClick={() => openMobileTab('quick')}>
            <svg className={`w-4 h-4 mr-2 transition-transform ${mobileTab==='quick' ? 'rotate-90' : ''}`} fill="none" stroke="#6B047C" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#6B047C] text-base font-bold flex-1">Quick Actions</span>
          </button>
          {mobileTab==='quick' && (
            <div className="bg-[#F9F5FA] px-5 pb-4 animate-fadein" style={{ borderRadius: 0 }}>
              <div className="flex flex-col gap-2 mt-6">
                {quickActions.map((item, idx) => (
                  <button key={idx} className="text-[#808080] text-sm text-left hover:text-[#6B047C] py-2 px-2 bg-white shadow-sm font-medium" style={{ borderRadius: 0 }}>{item.label}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E6E6] bg-white w-full">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-2 sm:px-4 md:px-6 py-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 relative">
        {/* Logo, Welcome, Search, Hamburger all in one row */}
        <div className="flex items-center justify-between w-full gap-2 sm:gap-4">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="/Logo.png"
              alt="Logo"
              className="h-5 w-auto object-contain sm:h-7 md:h-9 lg:h-12 xl:h-14"
            />
          </div>
          {/* Welcome text */}
          <div className="flex-shrink-0 text-[12px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-[#808080] font-medium whitespace-nowrap mx-1 sm:mx-2">
            <span>Welcome,&nbsp;</span>
            <span className="text-[#1A011E]">Wisdom</span>
          </div>
          {/* Search */}
          <div className="flex-1 min-w-0 mx-0 max-w-[200px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[400px] xl:max-w-[480px] ml-2">
            <div className="flex items-center w-full border border-[#F2F2F2] bg-[#FAFAFA] rounded-lg px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 md:py-1.5 gap-1 sm:gap-1.5 focus-within:border-[#6B047C] transition-colors">
              <img
                src="/search-01.svg"
                alt="Search icon"
                className="w-3 h-3 sm:w-4 sm:h-4 shrink-0 self-stretch my-auto"
              />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent border-none outline-none text-[11px] sm:text-xs md:text-sm text-[#808080] placeholder:text-[#CCC] py-0.5"
              />
            </div>
          </div>
          {/* Hamburger (rightmost) */}
          {Hamburger}
        </div>
        {/* Right actions (hidden on mobile, shown on sm+) */}
        <div className="hidden sm:flex items-center flex-shrink-0 gap-1 sm:gap-2 md:gap-3 lg:gap-4 ml-2">
          {/* Notifications */}
          <div ref={notificationsRef} className="relative">
            <button
              aria-label="Notifications"
              onClick={toggleNotifications}
              className="relative p-1 sm:p-2 hover:bg-[#F9F5FA] rounded-lg transition-colors"
            >
              <img
                src="/notification-02.svg"
                alt="Notifications"
                className="w-4 sm:w-5 h-4 sm:h-5"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px]
                                 bg-red-500 text-white flex items-center justify-center
                                 rounded-full">
                2
              </span>
            </button>
            {showNotifications && (
              <div className="absolute right-0 top-full mt-1 w-[320px] sm:w-[380px]
                              bg-white rounded-lg shadow-lg py-3 px-4 z-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#1A011E] text-lg font-semibold">Notifications</div>
                  <div className="text-[#6B047C] text-sm">2 New</div>
                </div>
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex gap-3 p-2 hover:bg-[#F9F5FA] rounded-lg transition-colors cursor-pointer">
                      <div className="w-8 h-8 rounded-lg bg-[#F2F2F2] flex items-center justify-center flex-shrink-0">
                        <img src="/notification-02.svg" alt="Notification" className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs text-[#808080] whitespace-nowrap">{notification.time}</span>
                        </div>
                        <p className="text-sm text-[#808080] line-clamp-2">{notification.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-[#F2F2F2] flex justify-between">
                  <button className="text-sm text-[#808080] hover:text-[#6B047C] transition-colors">Mark all as seen</button>
                  <button className="text-sm text-[#6B047C] hover:text-[#4A0356] transition-colors">View all</button>
                </div>
              </div>
            )}
          </div>

          {/* Messages */}
          <div ref={messagesRef} className="relative">
            <button
              aria-label="Messages"
              onClick={toggleMessages}
              className="relative p-1 sm:p-2 hover:bg-[#F9F5FA] rounded-lg transition-colors"
            >
              <img
                src="/system-uicons_message.svg"
                alt="Messages"
                className="w-4 sm:w-5 h-4 sm:h-5"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px]
                                 bg-red-500 text-white flex items-center justify-center
                                 rounded-full">
                1
              </span>
            </button>
            {showMessages && (
              <div className="absolute right-0 top-full mt-1 w-[320px] sm:w-[380px]
                              bg-white rounded-lg shadow-lg py-3 px-4 z-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[#1A011E] text-lg font-semibold">Messages</div>
                  <div className="text-[#6B047C] text-sm">2 New</div>
                </div>
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {messages.map((message) => (
                    <div key={message.id} className="flex gap-3 p-2 hover:bg-[#F9F5FA] rounded-lg transition-colors cursor-pointer">
                      <img src={message.avatar} alt={message.sender} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-medium text-[#1A011E]">{message.sender}</span>
                          <span className="text-xs text-[#808080] whitespace-nowrap">{message.time}</span>
                        </div>
                        <p className="text-sm text-[#808080] truncate">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-[#F2F2F2] flex justify-between">
                  <button className="text-sm text-[#808080] hover:text-[#6B047C] transition-colors">Mark all as seen</button>
                  <button className="text-sm text-[#6B047C] hover:text-[#4A0356] transition-colors">View all</button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              className="focus:outline-none"
              onClick={() => setShowProfileModal(true)}
            >
              <img
                src="/Frame 106.png"
                alt="Profile"
                className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 rounded-lg object-cover cursor-pointer"
              />
            </button>
          </div>

          {/* Quick Actions */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4
                         text-xs sm:text-sm md:text-base font-medium
                         border border-[#6B047C] text-[#6B047C]
                         px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-2 rounded-lg
                         hover:bg-[#F9F5FA] transition-colors"
            >
              <span>Quick actions</span>
              <svg
                className={`w-3 sm:w-4 h-3 sm:h-4 transform transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute right-0 top-full mt-1 w-[calc(100%)] bg-white rounded-lg shadow-lg py-2 px-3 z-50">
                <div className="space-y-2">
                  {quickActions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-2 hover:bg-[#F9F5FA] rounded-lg cursor-pointer group"
                    >
                      <span className="text-[#808080] group-hover:text-[#6B047C] text-sm transition-colors">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {MobileMenu}
      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} />
    </header>
  );
};
