import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import PlantsPage from "../Pages/PlantsPage";
import MyProfile from "../Pages/MyProfile";
import PlantDetails from "../Pages/PlantDetails";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

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
      {
        path: "/plants/:id",
        element: <PlantDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
