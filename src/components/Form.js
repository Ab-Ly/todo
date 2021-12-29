import React from "react";
import { motion } from "framer-motion";
// props
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); // PREVENT REFRESH : "ACTUALISÉ"
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }, // *1000 TO GET UNIQUE NUMBER
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  ////// AVEC LA FONCTION EN HAUT NON REFRESH // SUBMIT HANDLER
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={submitTodoHandler}
        className="todo-button"
        type="submit"
      >
        {" "}
        <i className="fas fa-plus-square"></i>
      </motion.button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
