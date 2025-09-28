import { Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function TodoList() {
  interface Todo {
    id: number;
    text: string;
    Completed: boolean;
  }
  const [Todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string): void => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      Completed: false,
    };
    setTodos([...Todos, newTodo]);
  };
  const toggleTodo = (id: number): void => {
    setTodos(
      Todos.map((todo) =>
        todo.id === id ? { ...todo, Completed: !todo.Completed } : todo
      )
    );
  };
  const removeTodo = (id: number): void => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>todo list</h1>
      <button onClick={() => addTodo("buy milk")}>add todo</button>
      <ul>
        {Todos.map((todo) =>(
            <li key={todo.id}>
                <span
                    style ={{textDecoration:todo.Completed ? "line-through" : "none"}}
                >
                    {todo.text}
                </span>
                <button onClick={() => toggleTodo(todo.id)}>toggle</button>
                <button onClick={() => removeTodo(todo.id)}>remove</button>
            </li>
        ))}
      </ul>
    </div>
  );
}
