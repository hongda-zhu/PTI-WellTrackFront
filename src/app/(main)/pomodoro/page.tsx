"use client";
import ChallengeCreation from "@/components/challenge-creation";
import PomodoroTimer from "@/components/pomodoro";
import { Challenge } from "@/schema/challenge-schema";
import { SmartTask } from "@/schema/smart-task.schema";
import React, { useState } from "react";

export const dummyChallenges: Challenge[] = [
  {
    id: "1",
    date: "2025-04-01",
    name: "Water Intake Monitoring",
    description: "Monitor daily water consumption habits.",
    progress: "Not started", // <- nuevo campo
    criterion: "Track daily water intake", // <- nuevo campo
    metricTypes: "ml, time", // <- nuevo campo
    downloadUrl: "/downloads/water-intake-monitoring.pdf", // <- enlace de descarga
    duration: 30 * 600, // <- duración en segundos (30 minutos)
  },
  {
    id: "2",
    date: "2025-04-03",
    name: "Posture Detection",
    description: "Check and correct posture every hour.",
    progress: "In progress", // <- nuevo campo
    criterion: "Posture check every hour", // <- nuevo campo
    metricTypes: "angle, time", // <- nuevo campo
    downloadUrl: "/downloads/posture-detection.pdf", // <- enlace de descarga
    duration: 20 * 600, // <- duración en segundos (30 minutos)
  },
  {
    id: "3",
    date: "2025-04-05",
    name: "Blink Frequency Tracker",
    description: "Alert when user blinks too infrequently.",
    progress: "Completed", // <- nuevo campo
    criterion: "Blink frequency per minute", // <- nuevo campo
    metricTypes: "blinks/minute", // <- nuevo campo
    downloadUrl: "/downloads/blink-frequency-tracker.pdf", // <- enlace de descarga
    duration: 90 * 600, // <- duración en segundos (30 minutos)
  },
  {
    id: "4",
    date: "2025-04-07",
    name: "Yawning Detector",
    description: "Detect signs of fatigue through yawns.",
    progress: "Not started", // <- nuevo campo
    criterion: "Number of yawns per hour", // <- nuevo campo
    metricTypes: "yawns/hour", // <- nuevo campo
    downloadUrl: "/downloads/yawning-detector.pdf", // <- enlace de descarga
    duration: 10 * 600, // <- duración en segundos (30 minutos)
  },
  {
    id: "5",
    date: "2025-04-10",
    name: "Eye Contact Challenge",
    description: "Encourage maintaining eye contact with camera.",
    progress: "In progress", // <- nuevo campo
    criterion: "Eye contact duration", // <- nuevo campo
    metricTypes: "seconds", // <- nuevo campo
    downloadUrl: "/downloads/eye-contact-challenge.pdf", // <- enlace de descarga
    duration: 25 * 600, // <- duración en segundos (30 minutos)
  },
];

const dummySmartTasks: SmartTask[] = [
  {
    id: "1",
    name: "Focus Sprint",
    description: "25 minutes of deep work",
    date: "2025-04-01",
  },
  {
    id: "2",
    name: "Writing Burst",
    description: "15 minutes of writing",
    date: "2025-04-05",
  },
  {
    id: "3",
    name: "Debug Mode",
    description: "20 minutes of debugging",
    date: "2025-04-10",
  },
];

function Pomodoro() {
  const [challenges, setChallenges] = useState<Challenge[]>(dummyChallenges);
  const [smartTasks, setSmartTasks] = useState<SmartTask[]>(dummySmartTasks);

  return (
    <div className="flex flex-col items-center h-full w-full gap-4">
      <PomodoroTimer challenges={challenges} />
      <ChallengeCreation
        challenges={challenges}
        setChallenges={setChallenges}
        smartTasks={smartTasks}
        setSmartTasks={setSmartTasks}
      />
    </div>
  );
}

export default Pomodoro;
