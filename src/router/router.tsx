import { createBrowserRouter } from "react-router-dom";
import AuthenticationGuard from "src/layouts/AuthenticationGuard";
import Layout from "src/layouts/Layout";
import Login from "src/pages/auth/Login";
import ErrorPage from "src/pages/errors/ErrorPage";
import Contact from "src/pages/profile/Contact";
import { TodoListView } from "src/pages/Todo";

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
