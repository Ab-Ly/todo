import React from "react";
import { motion } from "framer-motion";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Adding event (e)
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={completHandler}
        className="complete-btn"
      >
        <i className="fas fa-check"></i>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={deleteHandler}
        className="trash-btn"
      >
        <i className="fas fa-trash"></i>
      </motion.button>
    </div>
  );
};

export default Todo;
