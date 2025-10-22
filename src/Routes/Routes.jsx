
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Plants from "../Pages/Plants";
import PlantDetails from "../Pages/PlantDetails";
import Profile from "../Pages/Profile";
import ProtectedRoute from "../Components/ProtectedRoute";
import ErrorPage from "../Pages/ErrorPage";
import Privacy from "../Pages/Privacy";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const router=createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        hydrateFallbackElement:<div>Loading...</div>,
        errorElement:<ErrorPage/>,
        children:[
            { index:true, element:<Home/> },
            { path: "login", element: <Login/> },
            { path: "signup", element: <Signup/> },
            { path: "plants", element: <Plants/> },
            { path: "plants/:plantId", element: (
                <ProtectedRoute>
                  <PlantDetails/>
                </ProtectedRoute>
              ) },
            { path: "profile", element: (
                <ProtectedRoute>
                  <Profile/>
                </ProtectedRoute>
              ) },
            { path: "privacy", element: <Privacy/> },
            { path: "about", element: <About/> },
            { path: "contact", element: <Contact/> },
        ]
    }
]);

export default router;