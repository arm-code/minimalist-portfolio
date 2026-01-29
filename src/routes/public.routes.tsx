import { RouteObject } from "react-router-dom";
import { PublicRoute } from "./Guards";
import { HomePage } from "../pages/public/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import PublicLayout from "../layouts/PublicLayout";
import { ProjectsPage } from "../pages/public/ProjectsPage";
import { AboutPage } from "../pages/public/AboutPage";
import { ContactPage } from "../pages/public/ContactPage";


export const publicRoutes: RouteObject = {
    element: <PublicRoute />,
    children: [
        {
            element: <PublicLayout />,
            children: [
                { path: "/", element: <HomePage /> },
                { path: "/login", element: <LoginPage /> },
                { path: "/home-page", element: <HomePage />},
                { path: "/projects-page", element: <ProjectsPage />},
                { path: "/about-page", element: <AboutPage />},
                { path: "/contact-page", element: <ContactPage />}, // Placeholder for ContactPage
            ]
        }
    ]
}