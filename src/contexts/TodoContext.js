import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoMsg: "Todo Message",
      completed: false,
    },
  ],
  addTodo: (todoMsg) => {},
  updateTodo: (id, todoMsg) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export default function useTodoContext() {
  return useContext(TodoContext);
}
