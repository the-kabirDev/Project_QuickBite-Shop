import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <RouterProvider router={MainRoutes} />
    </>
  );
}

export default App;
