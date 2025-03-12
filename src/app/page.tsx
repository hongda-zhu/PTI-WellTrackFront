"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/modules/DahsboardSidebar";
import DashboardNavbar from "@/modules/DashboardNavbar";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col">
        <DashboardSidebar />
        <SidebarInset>
          <DashboardNavbar />
          <main className="flex-1 p-4 md:p-6"></main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
