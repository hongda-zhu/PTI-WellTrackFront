"use client";

import AccoutManagement from "@/components/TabsMod";
import GlobalSetting from "@/components/SettingsCardMod";

export default function UserSettings() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex-1 p-4 md:p-6 transition-all duration-300 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* User Settings */}
        <AccoutManagement />

        {/* Monitoring Settings */}
        <GlobalSetting
          title="Monitoring Settings"
          description="Configure your monitoring preferences below."
        />
      </div>
    </div>
  );
}
