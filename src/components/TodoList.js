import React from "react";
import Todo from "./Todo";
import { motion } from "framer-motion";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  console.log(filteredTodos);
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.8 }}
      className="todo-container"
    >
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos} // PASSING PROPS
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </motion.div>
  );
};
export default TodoList;
