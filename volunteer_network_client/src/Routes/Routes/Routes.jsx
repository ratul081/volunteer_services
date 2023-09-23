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
import CheckOut from "../../Component/CheckOut/CheckOut";
import Profile from "../../Component/Profile/Profile";

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
          fetch(
            `https://volunteer-network-server-ratul-44.vercel.app/services/${params.id}`
          ),
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
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
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
        path: "/terms_and_conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(
            `https://volunteer-network-server-ratul-44.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
