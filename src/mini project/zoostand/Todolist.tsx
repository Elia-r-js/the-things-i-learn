import {
  Button,
  Checkbox,
  Icon,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTodoStore } from "./store/todolist";

export default function Todolist() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [text, setText] = useState("");
  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ p: "30", height: "100vh" }}
    >
      <Typography variant="h3"> Todolist </Typography>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add you task ..."
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleAdd}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  />
                </svg>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => removeTodo(todo.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
                  />
                </svg>
              </IconButton>
            }
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => {
                toggleTodo(todo.id);
              }}
            />
            <ListItemText
              primary={todo.text}
              sx={{
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.6 : 1,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
