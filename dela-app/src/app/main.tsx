import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "atomic-router-react";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
