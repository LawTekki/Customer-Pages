import React, { useState } from "react";

const notificationTypes = [
  { label: "Inbox messages", key: "inbox" },
  { label: "Order messages", key: "orderMessages" },
  { label: "Order updates", key: "orderUpdates" },
  { label: "Rating reminders", key: "ratingReminders" },
  { label: "Buyers briefs", key: "buyersBriefs" },
  { label: "My gigs", key: "myGigs" },
  { label: "My Account", key: "myAccount" },
];

const initialState = {
  inbox: { email: false, phone: false },
  orderMessages: { email: true, phone: true },
  orderUpdates: { email: true, phone: false },
  ratingReminders: { email: true, phone: true },
  buyersBriefs: { email: true, phone: true },
  myGigs: { email: true, phone: true },
  myAccount: { email: true, phone: true },
};

export const NotificationSettings: React.FC = () => {
  const [settings, setSettings] = useState(initialState);
  const [realTime, setRealTime] = useState(false);
  const [sound, setSound] = useState(false);

  const handleToggle = (key: string, type: "email" | "phone") => {
    setSettings((prev) => ({
      ...prev,
      [key]: { ...prev[key], [type]: !prev[key][type] },
    }));
  };

  return (
    <div className="w-full max-w-4xl pl-0 pr-4 bg-white">
      <h2 className="text-2xl font-semibold text-black mb-1">Notifications</h2>
      <p className="text-gray-600 mb-8 text-sm max-w-2xl">For important updates regarding your lawtrolley activity, certain notifications cannot be disabled</p>
      <div className="overflow-x-auto">
        <table className="w-full text-left mb-8">
          <thead>
            <tr className="text-black text-base">
              <th className="font-medium pb-2">Type</th>
              <th className="font-medium pb-2">Email</th>
              <th className="font-medium pb-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {notificationTypes.map((row) => (
              <tr key={row.key} className="border-b last:border-b-0">
                <td className="py-3 pr-2 text-gray-900 text-base">{row.label}</td>
                <td className="py-3 pr-2">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings[row.key].email}
                      onChange={() => handleToggle(row.key, "email")}
                      className="accent-[#6B047C] w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-[#6B047C]"
                    />
                  </label>
                </td>
                <td className="py-3 pr-2">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings[row.key].phone}
                      onChange={() => handleToggle(row.key, "phone")}
                      className="accent-[#6B047C] w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-[#6B047C]"
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="my-8 border-gray-300" />
      <div className="flex flex-col gap-4">
        <label className="inline-flex items-center text-base text-gray-900">
          <input
            type="checkbox"
            checked={realTime}
            onChange={() => setRealTime((v) => !v)}
            className="accent-[#6B047C] w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-[#6B047C] mr-2"
          />
          Enable/disable real-time notifications
        </label>
        <label className="inline-flex items-center text-base text-gray-900">
          <input
            type="checkbox"
            checked={sound}
            onChange={() => setSound((v) => !v)}
            className="accent-[#6B047C] w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-[#6B047C] mr-2"
          />
          Enable/disable sound
        </label>
      </div>
    </div>
  );
}; 