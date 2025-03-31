"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/modules/DahsboardSidebar";
import DashboardNavbar from "@/modules/DashboardNavbar";
import CustomCard from "@/modules/CardMod";
import { GlassWater, BatteryLow, PersonStanding, MonitorPause } from "lucide-react";
import BarChartComponent from "@/modules/BarChardMod";
import PieChartComponent from "@/modules/PieChartMod";
import DynamicTable from "@/modules/TableMod";

import { useState } from "react";


   
{/*Valores que apareceran en la tabla de agua consumida:*/}
const barChartData = [
  { day: "L", value: 2 },
  { day: "M", value: 9 },
  { day: "X", value: 5 },
  { day: "J", value: 7 },
  { day: "V", value: 8 },
  { day: "S", value: 8 },
  { day: "D", value: 8 },
];

{/*valor de la tabla de progreso, como es dinamico se añade automaticamente*/}
const progressData = [
    { id: "Deep Focus Sprint", a: 3, b: 1, c: 5, d: 2, e: 8 },
    { id: "Pomodoro Mastery", a: 3, b: 1, c: 5, d: 2, e: 9 },
    { id: "Hydration Hero", a: 4, b: 2, c: 6, d: 2, e: 0 },
];
  
 {/*valor de la grafica de tiempo*/}
const timeData = [
    { name: "Tarea A", value: 55, color: "#8884d8" },
    { name: "Tarea B", value: 20, color: "#82ca9d" },
    { name: "Tarea C", value: 55, color: "#ffc658" },
    { name: "Tarea D", value: 20, color: "#ff8042" },
];
  

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <DashboardSidebar onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main content */}
        <div
          className={`flex-1 p-4 md:p-6 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <SidebarInset>
            <DashboardNavbar />
          <main className="flex-1 p-4 md:p-6">
            <h1 className="text-2xl font-bold">Welcome to the Dasboard</h1>
            <p className="mt-2 text-gray-600 mb-6">
            WellTrack is your personal posture and wellness tracking dashboard. Monitor your posture accuracy, active breaks, hydration levels, and fatigue status in real-time. Analyze your progress with detailed reports, challenge yourself with daily goals, and optimize your focus time. Stay healthy and productive with WellTrack!
            </p>

            {/* <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Blog</div>
                    <Separator orientation="vertical" />
                    <div>Docs</div>
                    <Separator orientation="vertical" />
                    <div>Source</div>
                </div> */}

            {/*Card de Agua consumida, fatiga, etc.*/}
            <div className="flex flex-wrap justify-center gap-4">
              <CustomCard
                title="H2O Consumption Tracker"
                icon={<GlassWater />}
                value="9 Times"
                description="+20.1% from last month"
              />
            
              <CustomCard
                title="Fatigue Score"
                icon={<BatteryLow />}
                value="Low"
                description="+20.1% from last month"
              />

              <CustomCard
                title="Posture Health Index"
                icon={<PersonStanding />}
                value="50%"
                description="+20.1% from last month"
              />
              <CustomCard
                title="Rest Pause Count"
                icon={<MonitorPause />}
                value="10/10"
                description="Today Complete"
              />
            </div>

            <div className="flex w-full mt-8 gap-8">
                {/* Gráfico de barras */}
                <BarChartComponent
                  data={barChartData}
                  title="Weekly Water Consumption"
                  barColor="#3783fa"
                />
                
                {/* Gráfico circular */}
                <div className="w-1/2 flex flex-col items-center">
                    <PieChartComponent
                      data={timeData}
                      title="Task Distribution Chart"
                      totalTime="8h 45m"
                    />
                </div>
            </div>

            {/* Tabla dinámica */}
            <div className="w-1/2 mt-8">
                <h2 className="text-xl font-semibold mb-4">Challenge Progress Tracker</h2>
                <DynamicTable data={progressData} />
            </div>

            <div className="flex flex-col items-center">
           
            </div>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}

