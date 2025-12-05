import "@/styles/app.css";
import { routes } from "./routes/routes";
import { RouterProvider, ScrollRestoration } from "react-router";

function App() {
  return (
    <RouterProvider router={routes}>
      <ScrollRestoration />
    </RouterProvider>
  );
}

export default App;
