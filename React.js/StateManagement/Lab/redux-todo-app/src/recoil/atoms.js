import { atom } from "recoil";

// Atom for the list of todos
export const todosState = atom({
  key: "todosState",
  default: [],
});

// Atom for the current input value
export const todoInputState = atom({
  key: "todoInputState",
  default: "",
});
