import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import EstateDetails from "../components/EstateDetails";
import Agents from "../pages/Agents/Agents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error />,
        loader: () => fetch("../estatesData.json"),
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
        errorElement: <Error />,
      },
      {
        path: "/estatedetais/:id",
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
        errorElement: <Error />,
        loader: () => fetch("../estatesData.json"),
      },
      {
        path: "/agents",
        element: (
          <PrivateRoute>
            <Agents />
          </PrivateRoute>
        ),
        errorElement: <Error />,
        loader: () => fetch("../agentsData.json"),
      },
    ],
  },
]);

export default router;
