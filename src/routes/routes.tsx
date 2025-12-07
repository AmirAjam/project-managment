import DashboardPage from "@/pages/dashboard/DashboardPage";
import LoginPage from "@/pages/login/LoginPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/*", element: <NotFoundPage /> },
]);
