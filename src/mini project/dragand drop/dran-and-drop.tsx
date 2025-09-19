import { DndContext } from "@dnd-kit/core";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Draggable from "./draggaple";
import Droppable from "./droppable";

export default function DragandDrop() {
  const [parent, setParent] = useState<"outside" | "zone1" | "zone2">(
    "outside"
  );

  const handleDragEnd = (event: any) => {
    const { over } = event;
    if (over) {
      if (over.id === "drop-zone-1") setParent("zone1");
      else if (over.id === "drop-zone-2") setParent("zone2");
      else setParent("outside");
    } else {
      setParent("outside");
    }
  };
  return (
    <Stack
      spacing={3}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh" }}
    >
      <DndContext onDragEnd={handleDragEnd}>
        {parent === "outside" && (<Draggable id="draggable-1"> drag me </Draggable>)}
        
        <Droppable id="drop-zone-1">
          {parent === "zone1" ? (
            <Draggable id="draggable-1">I'm in Zone 1</Draggable>
          ) : (
            <Typography>drop zone1</Typography>
          )}
        </Droppable>

        <Droppable id="drop-zone-2">
          {parent === "zone2" ? (
            <Draggable id="draggable-1">I'm in Zone 2</Draggable>
          ) : (
            <Typography>drop zone2</Typography>
          )}
        </Droppable>
      </DndContext>
    </Stack>
  );
}
