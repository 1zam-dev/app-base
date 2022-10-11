import { createBrowserRouter } from "react-router-dom";
import AuthenticationGuard from "src/layouts/AuthenticationGuard";
import Layout from "src/layouts/Layout";
import { Login, Register } from "src/modules/auth";
import ErrorPage from "src/modules/errors/ErrorPage";
import Contact from "src/modules/profile/Contact";
import { TodoListView } from "src/modules/todo/presentation/Todo";

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
