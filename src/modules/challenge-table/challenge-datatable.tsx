import { DataTable } from "@/components/Datatable";
import React from "react";
import { Challenge, columns } from "./challenge-columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dummyChallenges: Challenge[] = [
  {
    date: "2025-04-01",
    name: "Water Intake Monitoring",
    description: "Monitor daily water consumption habits.",
    downloadUrl: "/downloads/water-intake-monitoring.pdf", // <- enlace de descarga
  },
  {
    date: "2025-04-03",
    name: "Posture Detection",
    description: "Check and correct posture every hour.",
    downloadUrl: "/downloads/posture-detection.pdf", // <- enlace de descarga
  },
  {
    date: "2025-04-05",
    name: "Blink Frequency Tracker",
    description: "Alert when user blinks too infrequently.",
    downloadUrl: "/downloads/blink-frequency-tracker.pdf", // <- enlace de descarga
  },
  {
    date: "2025-04-07",
    name: "Yawning Detector",
    description: "Detect signs of fatigue through yawns.",
    downloadUrl: "/downloads/yawning-detector.pdf", // <- enlace de descarga
  },
  {
    date: "2025-04-10",
    name: "Eye Contact Challenge",
    description: "Encourage maintaining eye contact with camera.",
    downloadUrl: "/downloads/eye-contact-challenge.pdf", // <- enlace de descarga
  },
];

function ChallengeDataTable() {
  return (
    <div className="h-full w-full p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={dummyChallenges} />
        </CardContent>
      </Card>
    </div>
  );
}

export default ChallengeDataTable;
