import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { TodoListView } from "src/module/todo/presentation/Todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoListView />,
  },
]);
