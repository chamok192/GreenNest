
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PlantDetails from "../Pages/PlantDetails";
import MyProfile from "../Pages/MyProfile";
import ProtectedRoute from "../Components/ProtectedRoute";
import TopPlants from "../Components/TopPlants";

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
                path:"plants",
                element:<TopPlants />
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
            }
        ]
    }
]);

export default router;