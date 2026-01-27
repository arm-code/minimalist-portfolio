import { RouteObject } from "react-router-dom";
import { PublicRoute } from "./Guards";
import { HomePage } from "../pages/public/HomePage";
import LoginPage from "../pages/auth/LoginPage";


export const publicRoutes: RouteObject = {
    element: <PublicRoute/>,
    children: [
        { path: "/", element: <HomePage/> },
        { path: "/login", element: <LoginPage/> }
    ]
}