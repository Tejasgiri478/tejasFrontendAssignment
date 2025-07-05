import React from "react";
import { useRecoilValue } from "recoil";
import { todoStatsSelector } from "../recoil/selectors";

const TodoStats = () => {
  const { totalTodos, completedTodos, uncompletedTodos, percentCompleted } =
    useRecoilValue(todoStatsSelector);

  if (totalTodos === 0) return null;

  return (
    <div className="todo-stats">
      <p>
        {completedTodos} completed / {uncompletedTodos} remaining (
        {percentCompleted}%)
      </p>
    </div>
  );
};

export default TodoStats;
