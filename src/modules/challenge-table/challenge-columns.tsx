"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Challenge } from "@/schema/challenge-schema";

export const columns: ColumnDef<Challenge>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "download",
    header: "",
    cell: ({ row }) => {
      const { downloadUrl, name } = row.original;

      return (
        <a href={downloadUrl} download={name + ".pdf"}>
          <Button variant="ghost" size="icon">
            <Download className="w-4 h-4" />
          </Button>
        </a>
      );
    },
  },
];
