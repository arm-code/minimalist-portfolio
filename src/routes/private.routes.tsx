import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "./Guards";
import DashboardPage from "../pages/private/DashboardPage";
import ProfilePage from "../pages/private/ProfilePage";
import SettingsPage from "../pages/private/SettingsPage";


export const privateRoutes: RouteObject = {

    element : <PrivateRoute/>,
    children: [
        { path: "/dashboard", element: <DashboardPage/> },
        { path: '/profile', element: <ProfilePage/> },
        { path: '/settings', element: <SettingsPage/> }
    ]

}