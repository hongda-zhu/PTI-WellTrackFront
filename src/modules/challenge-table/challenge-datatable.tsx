import { DataTable } from "@/components/Datatable";
import React from "react";
import { Challenge, columns } from "./challenge-columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ChallengeDataTable({ challenges }: { challenges: Challenge[] }) {
  return (
    <div className="h-full w-full p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={challenges.map((challenge) => ({
              ...challenge,
              downloadUrl: challenge.downloadUrl || "",
            }))}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default ChallengeDataTable;
