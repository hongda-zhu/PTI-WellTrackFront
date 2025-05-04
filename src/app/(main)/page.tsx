"use client";

import {
  GlassWater,
  BatteryLow,
  PersonStanding,
  MonitorPause,
} from "lucide-react";
import MetricCard from "@/components/metric-card";
import BarChartComponent from "@/components/barchart";
import PieChartComponent from "@/components/piechart";
import Calendar from "@/components/custom-calendar";
import { ChallengeTable } from "@/components/table";
import { useHydrationAttempts } from "@/hooks/use-hydrationattempts";
import { useLevelTiredness } from "@/hooks/use-leveltiredness";

// Valores que apareceran en la tabla de agua consumida:
const barChartData = [
  { day: "L", value: 2 },
  { day: "M", value: 9 },
  { day: "X", value: 5 },
  { day: "J", value: 7 },
  { day: "V", value: 8 },
  { day: "S", value: 8 },
  { day: "D", value: 8 },
];

// valor de la tabla de progreso, como es dinamico se añade automaticamente
const progressData = [
  { id: "Deep Focus Sprint", a: 3, b: 1, c: 5, d: 2, e: 8 },
  { id: "Pomodoro Mastery", a: 3, b: 1, c: 5, d: 2, e: 9 },
  { id: "Hydration Hero", a: 4, b: 2, c: 6, d: 2, e: 0 },
];

// valor de la grafica de tiempo
const timeData = [
  { name: "Tarea A", value: 55, color: "#8884d8" },
  { name: "Tarea B", value: 20, color: "#82ca9d" },
  { name: "Tarea C", value: 55, color: "#ffc658" },
  { name: "Tarea D", value: 20, color: "#ff8042" },
];



export default function Dashboard() {

  const hydrationAttempts = useHydrationAttempts();
  const fatiguescore = useLevelTiredness();

  const metrics = [
    {
      title: "H2O Consumption Tracker",
      icon: <GlassWater />,
      value: hydrationAttempts, //valor dinámico del hook
      description: "+20.1% from last month",
    },
    {
      title: "Fatigue Score",
      icon: <BatteryLow />,
      value: "Low",
      description: "+20.1% from last month",
    },
    {
      title: "Posture Health Index",
      icon: <PersonStanding />,
      value: "50%",
      description: "+20.1% from last month",
    },
    {
      title: "Rest Pause Count",
      icon: <MonitorPause />,
      value: "10/10",
      description: "Today Complete",
    },
  ];


  return (
    <div className="flex flex-col h-full w-full bg-gray-200">
      <div className="flex flex-col flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              icon={metric.icon}
              value={metric.value}
              description={metric.description}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
          <BarChartComponent
            data={barChartData}
            title="Weekly Water Consumption"
          />
          <PieChartComponent />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 w-full mt-4">
          <div className="lg:col-span-7 h-full">
            <ChallengeTable />
          </div>
          <div className="lg:col-span-3 h-full">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}
