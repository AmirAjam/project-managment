import "@/styles/app.css";
import "@/styles/customStyles.css";
import { routes } from "./routes/routes";
import { RouterProvider, ScrollRestoration } from "react-router";
import { ToastContainer } from "react-toastify";

function App() {
  const theme = localStorage.getItem("theme-storage");
  if (theme) {
    const parsed = JSON.parse(theme).state.theme;
    document.documentElement.classList.toggle("dark", parsed === "dark");
  }
  return (
    <>
      <RouterProvider router={routes}>
        <ScrollRestoration />
      </RouterProvider>
      <ToastContainer
        position="top-left"
        autoClose={4000}
        closeButton={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        limit={3}
        stacked
        className="right-1/2 translate-x-1/2 sm:right-auto sm:translate-x-0 sm:left-3"
      />
    </>
  );
}

export default App;
