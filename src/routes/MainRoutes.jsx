import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../components/pages/homepage/Homepage";
import SignIn from "../components/pages/signIn/SignIn";
import Menu from "../components/pages/menu/Menu";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },

  {
    path: "/menu",
    element: <Menu />,
  },
]);

export default MainRoutes;
