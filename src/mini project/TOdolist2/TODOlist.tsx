import {
  Button,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";


export default function TODOlist2() {
  type todo = {
    id: number;
    text: string;
    completed: boolean;
  };
  const [todos, setTodos] = useState<todo[]>([]);
  const [input, setInput] = useState("");
  const [loaded ,setloaded] =useState(false)

  React.useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
    setloaded(true)
  }, []);
  React.useEffect(() => {
    if (loaded){
        localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos , loaded]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo: todo = {
      id: Date.now() + Math.random(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, border: 1 }}>
      <Typography variant="h5"> the TodoList </Typography>
      <Stack direction={"row"} spacing={2}>
        <TextField
          fullWidth
          label={"new todo"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <Button variant="contained" onClick={addTodo}>
          add
        </Button>
      </Stack>
      <List>
        {todos.map((todo) => (
          <ListItem
            dense
            key={todo.id}
            secondaryAction={
              <IconButton
                color="error"
                edge={"end"}
                onClick={() => removeTodo(todo.id)}
              >
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
              onChange={() => toggleTodo(todo.id)}
            />
            <ListItemText
              primary={todo.text}
              sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
