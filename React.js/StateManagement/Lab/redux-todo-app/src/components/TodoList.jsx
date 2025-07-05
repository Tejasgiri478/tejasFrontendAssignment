import React from "react";
import { useRecoilValue } from "recoil";
import { todosState } from "../recoil/atoms";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useRecoilValue(todosState);

  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No todos yet. Add one above!</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

export default TodoList;
