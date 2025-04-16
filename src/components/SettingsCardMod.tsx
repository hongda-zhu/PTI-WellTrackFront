import SettingsComponent from "@/components/settings-component";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Setting {
  type: "switch" | "checkboxGroup" | "input";
  label: string;
  value?: boolean | string;
  options?: { label: string; value: string }[]; // Para checkboxGroup
  onChange: (value: any) => void;
  disabled?: boolean; // Para input deshabilitado
}

interface DynamicSettingsCardProps {
  title: string;
  description?: string;
}

export default function GlobalSetting({
  title,
  description,
}: DynamicSettingsCardProps) {
  return (
    <Card className="w-full h-fit">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <SettingsComponent />
      </CardContent>
    </Card>
  );
}
