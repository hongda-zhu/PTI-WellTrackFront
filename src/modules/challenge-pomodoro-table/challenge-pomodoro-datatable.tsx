"use client";

import { DataTable } from "@/components/Datatable";
import React, { useState } from "react";
import EditChallengeDialog from "@/components/edit-challenge-dialog";
import { getColumns } from "./challenge-pomodoro-columns";
import { Challenge } from "@/schema/challenge-schema";

export default function ChallengePomodoroDataTable({
  challenges,
  setChallenges,
}: {
  challenges: Challenge[];
  setChallenges: React.Dispatch<React.SetStateAction<Challenge[]>>;
}) {
  const [selected, setSelected] = useState<Challenge | null>(null);

  const handleDelete = (name: string) => {
    setChallenges((prev) =>
      prev.filter((challenge) => challenge.name !== name)
    );
  };

  const handleUpdate = (updatedChallenge: Challenge) => {
    setChallenges((prev) =>
      prev.map((ch) => (ch.id === updatedChallenge.id ? updatedChallenge : ch))
    );
    setSelected(null); // close modal
    console.log(
      `Updated challenge: ${
        updatedChallenge.name
      } with new data: ${JSON.stringify(updatedChallenge)}`
    );
  };

  const columns = getColumns(handleDelete);
  return (
    <>
      <DataTable
        columns={columns}
        data={challenges}
        onRowClick={(row) => setSelected(row.original)}
      />
      {selected && (
        <EditChallengeDialog
          challenge={selected}
          onClose={() => setSelected(null)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
}
