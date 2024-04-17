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
    element: <MainLayout/>,
    errorElement: <Error />,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("../estatesData.json"), 
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
          path: "/updateprofile",
          element: <PrivateRoute><UpdateProfile/></PrivateRoute>
        },
        {
          path: "/estatedetais/:id",
          element: <PrivateRoute><EstateDetails/></PrivateRoute>,
          loader: () => fetch("../estatesData.json"),
        },
        {
          path: "/agents",
          element: <PrivateRoute><Agents /></PrivateRoute>,
          loader: () => fetch("../agentsData.json"),
        }
    ]
  },
]);

export default router;
