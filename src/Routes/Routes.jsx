
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";

const router=createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        hydrateFallbackElement:<div>Loading...</div>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
    }
]);

export default router;