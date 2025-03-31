import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Tab {
  value: string;
  title: string;
  description: string;
  content: React.ReactNode;
}

interface DynamicTabsProps {
  tabs: Tab[];
}

export default function DynamicTabs({ tabs }: DynamicTabsProps) {
  return (
    <Tabs defaultValue={tabs[0]?.value} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <Card>
            <CardHeader>
              <CardTitle>{tab.title}</CardTitle>
              <CardDescription>{tab.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">{tab.content}</CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}