import { ColumnDef } from "@tanstack/react-table";
import { SquareX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartTask } from "@/schema/smart-task.schema";

export const getColumns = (
  onDelete: (name: string) => void
): ColumnDef<SmartTask>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    id: "delete",
    header: "Delete",
    cell: ({ row }) => {
      const { name } = row.original;

      return (
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation(); // prevent triggering row click
            onDelete(name);
          }}
        >
          <SquareX className="text-red-500" />
        </Button>
      );
    },
  },
];
