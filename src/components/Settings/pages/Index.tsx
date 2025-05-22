import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { SettingsSidebar } from "../SettingsSidebar";
import { ProfileSettings } from "../ProfileSettings";
import { SecuritySettings } from "../SecuritySettings";
import { NotificationSettings } from "../NotificationSettings";
import { SecurityQuestionSettings } from "../SecurityQuestionSettings";
import { TwoFactorSettings } from "../TwoFactorSettings";
import { DeactivateModal } from "../DeactivateModal";

const SettingsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);

  const handleDeactivate = () => {
    // TODO: Implement account deactivation logic
    console.log("Account deactivation requested");
    setIsDeactivateModalOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <ProfileSettings />;
      case "security":
        return <SecuritySettings />;
      case "notification":
        return <NotificationSettings />;
      case "security-question":
        return <SecurityQuestionSettings />;
      case "two-factor":
        return <TwoFactorSettings />;
      case "deactivate":
        return (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Deactivate Account</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to deactivate your account? This action cannot be undone.
            </p>
            <button
              onClick={() => setIsDeactivateModalOpen(true)}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Deactivate Account
            </button>
          </div>
        );
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <div className="flex-1">
          <div className="flex min-h-[calc(100vh-64px)] pl-[60px]">
            {/* Settings Sidebar */}
            <div className="w-64 mt-[48px]">
              <SettingsSidebar activeId={activeSection} onChange={setActiveSection} />
            </div>
            
            {/* Main Content */}
            <div className="flex-1 flex items-start mt-[48px] ml-8">
              <div className="max-w-4xl mx-auto w-full">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deactivate Modal */}
      <DeactivateModal
        isOpen={isDeactivateModalOpen}
        onClose={() => setIsDeactivateModalOpen(false)}
        onConfirm={handleDeactivate}
      />
    </div>
  );
};

export default SettingsPage; 