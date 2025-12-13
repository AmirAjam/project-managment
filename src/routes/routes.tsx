import DashboardPage from "@/pages/dashboard/DashboardPage";
import LoginPage from "@/pages/login/LoginPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import MembersPage from "@/pages/Members/MembersPage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/members", element: <MembersPage /> },
  { path: "/*", element: <NotFoundPage /> },
]);
