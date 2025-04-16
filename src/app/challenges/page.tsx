import ChallengeSettings from "@/components/challenge-setting";
import React from "react";
import Image from "next/image";
import { Goal } from "lucide-react";
import { DataTable } from "@/components/Datatable";
import {
  Challenge,
  columns,
} from "@/modules/challenge-table/challenge-columns";
import ChallengeDataTable from "@/modules/challenge-table/challenge-datatable";

function Challenges() {
  return (
    <div className="flex flex-col h-full w-full bg-gray-200">
      <div className="flex flex-col flex-1 p-4 w-full">
        <div className="w-full">
          <ChallengeSettings />
        </div>
      </div>
      <div className="w-full mt-4">
        <ChallengeDataTable />
      </div>
    </div>
  );
}

export default Challenges;
