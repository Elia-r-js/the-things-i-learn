import { useDroppable } from "@dnd-kit/core";
import { Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { ReactNode } from "react";

type DroppableProps = {
  children: ReactNode;
  id:string
};

export default function Droppable({ children,id }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <Stack
      sx={{
        border: "2px dashed grey",
        p: 2,
        borderRadius: 2,
        bgcolor: isOver ? green[50] : "transparent",
        color: isOver ? green[500] : "inherit",
      }}
      ref={setNodeRef}
    >
      {children}
    </Stack>
  );
}
