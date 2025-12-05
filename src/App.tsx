import "@/styles/app.css";
import { routes } from "./routes/routes";
import { RouterProvider, ScrollRestoration } from "react-router";
import { useThemeStore } from "./store/theme.store";

function App() {
  const theme = localStorage.getItem("theme-storage");
  if (theme) {
    const parsed = JSON.parse(theme).state.theme;
    document.documentElement.classList.toggle("dark", parsed === "dark");
  }
  return (
    <RouterProvider router={routes}>
      <ScrollRestoration />
    </RouterProvider>
  );
}

export default App;
