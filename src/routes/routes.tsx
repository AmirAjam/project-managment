import DashboardPage from "@/pages/dashboard/DashboardPage";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  { path: "/", element: <DashboardPage /> },
  { path: "/*", element: <NotFoundPage /> },
]);
