import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Layers/Main";
import Home from "../Component/Home/Home";
import ServicesDetails from "../Component/ServicesDetails/ServicesDetails";
import ErrorPage from "../Component/Share/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services/:id",
        element: <ServicesDetails></ServicesDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
