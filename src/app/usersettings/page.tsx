"use client";

import DashboardSidebar from "@/components/app-sidebar";
import DashboardNavbar from "@/components/app-navbar";
import DynamicTabs from "@/modules/TabsMod";
import DynamicSettingsCard from "@/modules/SettingsCardMod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Datos para las Tabs
const tabsData = [
  {
    value: "account",
    title: "Account",
    description: "Update your email address here. Click save when you're done.",
    content: (
      <>
        <div className="flex w-full ">
          <div className="space-y-2">
            {/*teoricamente no se puede modificar el email...*/}
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="welltrack@gmail.com" />
            <Button>Save changes</Button>
          </div>
        </div>
      </>
    ),
  },
  {
    value: "password",
    title: "Password",
    description:
      "Change your password here. After saving, you'll be logged out.",
    content: (
      <>
        <div className="flex w-full  flex-row gap-4">
          <div className="space-y-1">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" />
            <Button className="mt-2">Save password</Button>
          </div>
        </div>
      </>
    ),
  },
];

export default function UserSettings() {
  // Valores por defecto de la configuración
  const [autoMonitor, setAutoMonitor] = useState(true);
  const [cameraAccess, setCameraAccess] = useState(true);
  const [alertFrequency, setAlertFrequency] = useState("immediate");
  const [dataRetention, setDataRetention] = useState("15");

  // Configuraciones dinámicas
  const settings = [
    {
      type: "switch" as const,
      label: "Automatic Monitoring",
      value: autoMonitor,
      onChange: setAutoMonitor,
    },
    {
      type: "switch" as const,
      label: "Camera Access",
      value: cameraAccess,
      onChange: setCameraAccess,
    },
    {
      type: "checkboxGroup" as const,
      label: "Alert Frequency",
      value: alertFrequency,
      options: [
        { label: "Immediate", value: "immediate" },
        { label: "5 min", value: "5min" },
        { label: "15 min", value: "15min" },
      ],
      onChange: setAlertFrequency,
    },
    {
      type: "checkboxGroup" as const,
      label: "Data Retention Period",
      value: dataRetention,
      options: [
        { label: "15 days", value: "15" },
        { label: "30 days", value: "30" },
        { label: "90 days", value: "90" },
      ],
      onChange: setDataRetention,
    },
  ];

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex-1 p-4 md:p-6 transition-all duration-300 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* User Settings */}
        <DynamicTabs tabs={tabsData} />

        {/* Monitoring Settings */}
        <DynamicSettingsCard
          title="Monitoring Settings"
          description="Configure your monitoring preferences below."
          settings={settings}
        />
      </div>
    </div>
  );
}
