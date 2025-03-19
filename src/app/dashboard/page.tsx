"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/modules/DahsboardSidebar";
import DashboardNavbar from "@/modules/DashboardNavbar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassWater , BatteryLow , PersonStanding , MonitorPause} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
//import { useChart } from "@/components/ui/chart";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { PieChart, Pie, Cell } from "recharts";
import { useState } from "react";


   

{/*Valores que apareceran en la tabla de agua consumida:*/}
const data = [
    { day: "L", value: 6 },
    { day: "M", value: 9 },
    { day: "X", value: 5 },
    { day: "J", value: 7 },
    { day: "V", value: 8 },
    { day: "S", value: 8 },
    { day: "D", value: 8 },
  ];

  {/*valor de la tabla de progreso*/}
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
            <p className="mt-2 text-gray-600">
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
              <Card className="w-full max-w-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">H2O Consumption Tracker</CardTitle>
                  <GlassWater className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">9 Times</p>
                  <p className="text-xs text-green-500">+20.1% from last month</p>
                </CardContent>
              </Card>
            
              <Card className="w-full max-w-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Fatigue Score</CardTitle>
                  <BatteryLow className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">Low</p>
                  <p className="text-xs text-green-500">+20.1% from last month</p>
                </CardContent>
              </Card>

              <Card className="w-full max-w-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Posture Health Index</CardTitle>
                  <PersonStanding className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">50%</p>
                  <p className="text-xs text-green-500">+20.1% from last month</p>
                </CardContent>
              </Card>

              <Card className="w-full max-w-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rest Pause Count</CardTitle>
                  <MonitorPause className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">10/10</p>
                  <p className="text-xs text-green-500">Today Complete</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex w-full mt-8 gap-8">
                {/* Gráfico de barras */}
                <div className="w-1/2">
                    <h2 className="text-xl font-semibold mb-4">Weekly Water Consumption</h2>
                    <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data}>
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3783fa" />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
                
                {/* Gráfico circular */}
                <div className="w-1/2 flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-4">Task Distribution Chart</h2>
                    <PieChart width={200} height={200}>
                    <Pie data={timeData} dataKey="value" cx="50%" cy="50%" outerRadius={50} label>
                        {timeData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
                    <p className="text-xl font-bold mt-4">8h 45m</p>
                </div>
            </div>
            

            <div className="w-1/2 mt-8">
            <h2 className="text-xl font-semibold  mb-4">Challenge Progress Tracker</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>A</TableHead>
                    <TableHead>B</TableHead>
                    <TableHead>C</TableHead>
                    <TableHead>D</TableHead>
                    <TableHead>E</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {progressData.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.a}</TableCell>
                        <TableCell>{row.b}</TableCell>
                        <TableCell>{row.c}</TableCell>
                        <TableCell>{row.d}</TableCell>
                        <TableCell>{row.e}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
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

