import { createBrowserRouter } from "react-router-dom";
import AuthenticationGuard from "src/core/layouts/AuthenticationGuard";
import Layout from "src/core/layouts/Layout";
import Auth from "src/pages/Auth/Auth";
import ErrorPage from "src/pages/errors/ErrorPage";
import { Front } from "src/pages/Front";
import { User } from "src/pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Front />
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "user",
        element: (
          <AuthenticationGuard>
            <User />
          </AuthenticationGuard>
        ),
      },
    ],
  },
]);
