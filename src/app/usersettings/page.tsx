"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/modules/DahsboardSidebar";
import DashboardNavbar from "@/modules/DashboardNavbar";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Camera, User } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



export default function UserSettings() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [autoMonitor, setAutoMonitor] = useState(true);
  const [cameraAccess, setCameraAccess] = useState(true);
  const [alertFrequency, setAlertFrequency] = useState("immediate");
  const [dataRetention, setDataRetention] = useState("15");

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <DashboardSidebar onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main content */}
        <div
          className={`flex-1 p-4 md:p-6 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}>
          <SidebarInset>
            <DashboardNavbar />
            <main>
                <h1 className="text-2xl font-bold mb-6">User Settings</h1>

                {/* Contenedor para colocar las secciones lado a lado */}
                <div className="flex flex-wrap gap-6">
                    {/* User Settings */}
                    <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                        <CardHeader>
                            <CardTitle>Account</CardTitle>
                            <CardDescription>
                            Update your email address here. Click save when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue="welltrack@gmail.com" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                            <Label htmlFor="current">Current password</Label>
                            <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                            <Label htmlFor="new">New password</Label>
                            <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                        </Card>
                    </TabsContent>
                    </Tabs>

                    {/* Monitoring Settings */}
                    
                    <Card className="w-[400px]">
                    <CardHeader>
                        <CardTitle>Monitoring Settings</CardTitle>
                        <CardDescription>
                        Configure your monitoring preferences below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between mt-2">
                        <Label>Automatic Monitoring</Label>
                        <Switch checked={autoMonitor} onCheckedChange={setAutoMonitor} />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                        <Label>Camera Access</Label>
                        <Switch checked={cameraAccess} onCheckedChange={setCameraAccess} />
                        </div>
                        <div className="mt-4">
                        <Label>Alert Frequency</Label>
                        <div className="flex gap-2 mt-1">
                            <Checkbox
                            checked={alertFrequency === "immediate"}
                            onCheckedChange={() => setAlertFrequency("immediate")}
                            />{" "}
                            Immediate
                            <Checkbox
                            checked={alertFrequency === "5min"}
                            onCheckedChange={() => setAlertFrequency("5min")}
                            />{" "}
                            5 min
                            <Checkbox
                            checked={alertFrequency === "15min"}
                            onCheckedChange={() => setAlertFrequency("15min")}
                            />{" "}
                            15 min
                        </div>
                        </div>
                        <div className="mt-4">
                        <Label>Data Retention Period</Label>
                        <div className="flex gap-2 mt-1">
                            <Checkbox
                            checked={dataRetention === "15"}
                            onCheckedChange={() => setDataRetention("15")}
                            />{" "}
                            15 days
                            <Checkbox
                            checked={dataRetention === "30"}
                            onCheckedChange={() => setDataRetention("30")}
                            />{" "}
                            30 days
                            <Checkbox
                            checked={dataRetention === "90"}
                            onCheckedChange={() => setDataRetention("90")}
                            />{" "}
                            90 days
                        </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Changes</Button>
                    </CardFooter>
                    </Card>
                </div>
                </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
