import React from "react";
import { useRecoilState } from "recoil";
import { todoInputState, todosState } from "../recoil/atoms";

const TodoForm = () => {
  const [inputValue, setInputValue] = useRecoilState(todoInputState);
  const [todos, setTodos] = useRecoilState(todosState);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    // Add new todo with a unique ID
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task..."
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
