import React from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../recoil/atoms";

const TodoItem = ({ todo }) => {
  const [todos, setTodos] = useRecoilState(todosState);

  // Toggle the completed status of a todo
  const toggleTodo = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete a todo
  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={toggleTodo}
      />
      <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>
      <button className="delete-button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
