import { createBrowserRouter } from "react-router-dom";
import AuthenticationGuard from "src/layouts/AuthenticationGuard";
import Layout from "src/layouts/Layout";
import { Login, Register } from "src/module/auth";
import ErrorPage from "src/module/errors/ErrorPage";
import Contact from "src/module/profile/Contact";
import { TodoListView } from "src/module/todo/presentation/Todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <TodoListView />,
      },
      {
        path: "todo",
        element: <TodoListView />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "contacts",
        element: (
          <AuthenticationGuard>
            <Contact />
          </AuthenticationGuard>
        ),
      },
    ],
  },
]);
