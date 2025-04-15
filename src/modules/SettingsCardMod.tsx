import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

{
  /*puedo añadir más componentes dentro de la card para que aparezcan*/
}
interface Setting {
  type: "switch" | "checkboxGroup";
  label: string;
  value?: boolean | string;
  options?: { label: string; value: string }[]; // Para checkboxGroup
  onChange: (value: any) => void;
}

interface DynamicSettingsCardProps {
  title: string;
  description: string;
  settings: Setting[];
}

export default function DynamicSettingsCard({
  title,
  description,
  settings,
}: DynamicSettingsCardProps) {
  return (
    <Card className="w-full h-fit">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {settings.map((setting, index) => (
          <div key={index} className="mt-4">
            <Label>{setting.label}</Label>
            {setting.type === "switch" && (
              <div className="flex items-center justify-between mt-2">
                <Switch
                  checked={Boolean(setting.value)}
                  onCheckedChange={setting.onChange}
                />
              </div>
            )}
            {setting.type === "checkboxGroup" && (
              <div className="flex gap-2 mt-2">
                {setting.options?.map((option, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <Checkbox
                      checked={setting.value === option.value}
                      onCheckedChange={() => setting.onChange(option.value)}
                    />
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
