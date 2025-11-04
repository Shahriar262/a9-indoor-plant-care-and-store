import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import PlantsPage from "../Pages/PlantsPage";
import MyProfile from "../Pages/MyProfile";
import PlantDetails from "../Pages/PlantDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/plants",
        element: <PlantsPage />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
    ],
  },
  {
    path: "/plants/:plantId",
    element: (
      <PrivateRoute>
        <PlantDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);
