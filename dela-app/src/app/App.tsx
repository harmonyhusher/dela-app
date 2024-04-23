import { RouterProvider } from "atomic-router-react";
import { router } from "./routes";
import { Pages } from "../pages/index";
function App() {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  );
}

export default App;
