import { selector } from "recoil";
import { todosState } from "./atoms";

// Selector for todo statistics
export const todoStatsSelector = selector({
  key: "todoStatsSelector",
  get: ({ get }) => {
    const todos = get(todosState);
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const uncompletedTodos = totalTodos - completedTodos;
    const percentCompleted =
      totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

    return {
      totalTodos,
      completedTodos,
      uncompletedTodos,
      percentCompleted,
    };
  },
});
