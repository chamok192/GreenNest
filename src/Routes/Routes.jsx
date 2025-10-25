
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PlantDetails from "../Pages/PlantDetails";
import MyProfile from "../Pages/MyProfile";
import AllPlants from "../Pages/AllPlants";
import Favorites from "../Pages/Favorites";
import ProtectedRoute from "../Components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "plants",
                element: <AllPlants />
            },
            {
                path: "signup",
                element: <Signup />
            },
            {
                path: "plants/:plantId",
                element: (
                    <ProtectedRoute>
                        <PlantDetails />
                    </ProtectedRoute>
                )
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <MyProfile />
                    </ProtectedRoute>
                )
            },
            {
                path: "favorites",
                element: (
                    <ProtectedRoute>
                        <Favorites />
                    </ProtectedRoute>
                )
            }
        ]
    }
]);

export default router;