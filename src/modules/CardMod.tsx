import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface CustomCardProps {
  title: string;
  icon: ReactNode;
  value: string;
  description: string;
}

export default function CustomCard({ title, icon, value, description }: CustomCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-gray-400">{icon}</div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-green-500">{description}</p>
      </CardContent>
    </Card>
  );
}