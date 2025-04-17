"use client";

import React, { useState } from "react";
import { getColumns } from "./smart-task-columns";
import { DataTable } from "@/components/Datatable";
import EditSmartTaskDialog from "@/components/edit-smart-task-dialog";
import { SmartTask } from "@/schema/smart-task.schema";

export default function SmartTaskTable({
  smartTasks,
  setSmartTask,
}: {
  smartTasks: SmartTask[];
  setSmartTask: React.Dispatch<React.SetStateAction<SmartTask[]>>;
}) {
  const [selected, setSelected] = useState<SmartTask | null>(null);

  const handleDelete = (name: string) => {
    setSmartTask((prev) =>
      prev.filter((smartTasks: SmartTask) => smartTasks.name !== name)
    );
  };

  const handleUpdate = (updatedSmartTask: SmartTask) => {
    setSmartTask((prev) =>
      prev.map((st) => (st.id === updatedSmartTask.id ? updatedSmartTask : st))
    );
    setSelected(null);
    console.log("Updated SmartTask:", updatedSmartTask);
  };

  const columns = getColumns(handleDelete);

  return (
    <>
      <DataTable
        columns={columns}
        data={smartTasks}
        onRowClick={(row) => setSelected(row.original)}
      />
      {selected && (
        <EditSmartTaskDialog
          smartTask={selected}
          onClose={() => setSelected(null)}
          onSave={handleUpdate}
        />
      )}
    </>
  );
}
