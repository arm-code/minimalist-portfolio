import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./public.routes";
import { privateRoutes } from "./private.routes";


export const router = createBrowserRouter([
    publicRoutes,
    privateRoutes,
    // route for not found pages 404
    { path: "*", element: <h1>404 - Not Found</h1> }
])