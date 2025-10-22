import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";

const router=createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        hydrateFallbackElement:<div>Loading...</div>,
        errorElement:<div>404 Not Found</div>,
        children:[
            {
                index: true,
                element: <Home/>
            }
        ]
    }
]);

export default router;