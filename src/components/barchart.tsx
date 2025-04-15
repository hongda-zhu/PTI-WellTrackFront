import { BarChart, Bar, XAxis, CartesianGrid, Tooltip } from "recharts";

interface BarChartComponentProps {
  data: { day: string; value: number }[];
  title: string;
  barColor?: string;
}

import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Times",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function BarChartComponent({
  data,
  title,
}: BarChartComponentProps) {
  return (
    <div className="w-full bg-white rounded-md shadow-md p-6 space-y-4">
      <div className="text-md font-semibold text-gray-500">{title}</div>
      <ChartContainer config={chartConfig}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="value" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
