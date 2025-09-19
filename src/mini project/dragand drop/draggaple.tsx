import { useDraggable } from "@dnd-kit/core";
import { Button } from "@mui/material";
import React, { ReactNode } from "react";

type DraggableProps = {
  children: ReactNode;
  id:string
  
};

export default function Draggaple({ children,id }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px , ${transform.y}px , 0)`,
      }
    : undefined;
  return (
    <Button variant="contained" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </Button>
  );
}
