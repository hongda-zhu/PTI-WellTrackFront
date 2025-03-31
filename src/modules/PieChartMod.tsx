import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface PieChartComponentProps {
  data: { name: string; value: number; color: string }[];
  title: string;
  totalTime?: string; // Opcional: Texto adicional debajo del gráfico
}

export default function PieChartComponent({ data, title, totalTime }: PieChartComponentProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={50} label>
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      {totalTime && <p className="text-xl font-bold mt-4">{totalTime}</p>}
    </div>
  );
}