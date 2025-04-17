"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

import CreateChallengeDialog from "./create-challenge-dialog";
import { Challenge } from "@/schema/challenge-schema";
import ChallengePomodoroDataTable from "@/modules/challenge-pomodoro-table/challenge-pomodoro-datatable";
import { SmartTask } from "@/schema/smart-task.schema";
import SmartTaskTable from "@/modules/smart-task-table/smart-task-datatable";
import CreateSmartTaskDialog from "./create-smart-task-dialog";

function ChallengeCreation({
  challenges,
  smartTasks,
  setChallenges,
  setSmartTasks,
}: {
  challenges: Challenge[];
  smartTasks: SmartTask[];
  setSmartTasks: React.Dispatch<React.SetStateAction<SmartTask[]>>;
  setChallenges: React.Dispatch<React.SetStateAction<Challenge[]>>;
}) {
  const [openCreateChallengeDialog, setOpenCreateChallengeDialog] =
    useState(false);

  const addChallenge = (newChallenge: Challenge) => {
    setChallenges((prevChallenges) => [...prevChallenges, newChallenge]);
  };

  const handleCreateChallenge = (newChallenge: Challenge) => {
    console.log("Nuevo desafío creado:", newChallenge);
    setOpenCreateChallengeDialog(false);
    addChallenge(newChallenge); // Agregar el nuevo desafío a la lista
  };

  const [openCreateSmartTaskDialog, setOpenCreateSmartTaskDialog] =
    useState(false);

  const addSmartTask = (newSmartTask: SmartTask) => {
    setSmartTasks((prevSmartTasks) => [...prevSmartTasks, newSmartTask]);
  };

  const handleCreateSmartTask = (newSmartTask: SmartTask) => {
    console.log("Nuevo smartTask creado:", newSmartTask);
    setOpenCreateSmartTaskDialog(false);
    addSmartTask(newSmartTask); // Agregar el nuevo desafío a la lista
  };

  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-4 h-full w-full">
      <Card className="h-full">
        <div className="flex flex-row justify-between mr-4">
          <CardHeader className="w-full">
            <CardTitle>Challenges</CardTitle>
            <CardDescription>Manage your challenges here</CardDescription>
          </CardHeader>
          <Button onClick={() => setOpenCreateChallengeDialog(true)}>
            Create Challenge
          </Button>
          {openCreateChallengeDialog && (
            <CreateChallengeDialog
              onClose={() => setOpenCreateChallengeDialog(false)}
              onCreate={handleCreateChallenge}
            />
          )}
        </div>
        <CardContent className="h-full">
          <ChallengePomodoroDataTable
            challenges={challenges}
            setChallenges={setChallenges}
          />
        </CardContent>
      </Card>
      <Card className="h-full">
        <div className="flex flex-row justify-between mr-4">
          <CardHeader className="w-full">
            <CardTitle>Smart Tasks</CardTitle>
            <CardDescription>Manage your Smart Tasks here</CardDescription>
          </CardHeader>
          <Button onClick={() => setOpenCreateSmartTaskDialog(true)}>
            Create Smart Task
          </Button>
          {openCreateSmartTaskDialog && (
            <CreateSmartTaskDialog
              onClose={() => setOpenCreateSmartTaskDialog(false)}
              onCreate={handleCreateSmartTask}
            />
          )}
        </div>
        <CardContent className="h-full">
          <SmartTaskTable
            smartTasks={smartTasks}
            setSmartTask={setSmartTasks}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default ChallengeCreation;
