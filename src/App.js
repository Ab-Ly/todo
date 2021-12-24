import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

function App() {
  //State // useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Effect // useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  //Function & Events

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((Todo) => Todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((Todo) => Todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Save to Local
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Daily Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
