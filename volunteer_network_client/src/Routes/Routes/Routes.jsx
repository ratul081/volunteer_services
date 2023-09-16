import { createBrowserRouter } from "react-router-dom";
import Main from "../../Component/Layers/Main";
import Home from "../../Component/Home/Home";
import ServicesDetails from "../../Component/ServicesDetails/ServicesDetails";
import ErrorPage from "../../Component/Share/ErrorPage";
import Orders from "../../Component/Orders/Orders";
import LogIn from "../../Component/Login/LogIn/LogIn";
import Blogs from "../../Component/Blogs/Blogs";
import Register from "../../Component/login/Register/Register";
import PrivateRoute from "../Private Route/PrivateRoute";
import TermsAndConditions from "../../Component/Others/TermsAndConditions";

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
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/terms_and_condition",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
