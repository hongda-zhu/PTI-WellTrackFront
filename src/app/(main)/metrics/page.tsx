"use client";

import BarChartComponent from "@/components/barchart";
import PieChartComponent from "@/components/piechart";
import { ChallengeTable } from "@/components/table";
import Calendar from "@/components/custom-calendar";
import React from "react";

const barChartData = [
  { day: "L", value: 2 },
  { day: "M", value: 9 },
  { day: "X", value: 5 },
  { day: "J", value: 7 },
  { day: "V", value: 8 },
  { day: "S", value: 8 },
  { day: "D", value: 8 },
];

function Metrics() {
  return (
    <div className="flex flex-col h-full w-full bg-gray-200">
      <div className="flex flex-col flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
          <BarChartComponent
            data={barChartData}
            title="Weekly Water Consumption"
          />
          <PieChartComponent />
        </div>
        <div className="gap-4 w-full mt-4">
          <div>
            <ChallengeTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
