import { RouteObject } from "react-router-dom";
import { PublicRoute } from "./Guards";
import { HomePage } from "../pages/public/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import PublicLayout from "../layouts/PublicLayout";


export const publicRoutes: RouteObject = {
    element: <PublicRoute />,
    children: [
        {
            element: <PublicLayout />,
            children: [
                { path: "/", element: <HomePage /> },
                { path: "/login", element: <LoginPage /> }
            ]
        }
    ]
}