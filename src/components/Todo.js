import React from "react";
import { motion } from "framer-motion";
import trash from "../sound-files/navigation_transition-right.wav";
import add from "../sound-files/state-change_confirm-up.wav";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Adding event (e)

  const trashAudio = new Audio(trash);
  const addAudio = new Audio(add);

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    trashAudio.play();
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
    addAudio.play();
  };
  return (
    <div className="todo">
      <motion.li
        whileHover={{ scale: 1.3, originX: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`todo-item ${todo.completed ? "completed" : ""}`}
      >
        {text}
      </motion.li>
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
