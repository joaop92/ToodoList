import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "./components/Form";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, editedText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: editedText } : todo
      )
    );
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}
