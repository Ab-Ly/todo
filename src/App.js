import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import CSS
import "./App.css";

// import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State // useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN Once when app start

  useEffect(() => {
    getLocalTodos();
  }, []);

  //Effect // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
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
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <motion.header
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>Daily Todo List</h1>
      </motion.header>
      <Form // CALLING PROPS
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
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
