import { createBrowserRouter } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { PrivateRoute, PublicRoute } from "./Guards";


const LoginPage = () => {
    const { login } = useAuthContext();

    return <button onClick={() => login("dummyToken")}>Login</button>
}

const DashboardPage = () => <h1>Panel de Control privado</h1>

const Home = () => <h1>Página Pública</h1>

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    // Rutas para usuarios no autenticados
    {
        element: <PublicRoute />,
        children: [
            { path: "/login", element: <LoginPage /> }
        ]
    }

    // Rutas para usuarios autenticados
    , {
        element: <PrivateRoute />,
        children: [
            { path: "/dashboard", element: <DashboardPage /> },
            { path: '/profile', element: <h1>Perfil Privado</h1> }
        ]
    }
])