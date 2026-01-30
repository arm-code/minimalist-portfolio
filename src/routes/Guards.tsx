

import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export const PrivateRoute = () =>{
    const { session } = useAuth();
    return session ? <Outlet /> : <Navigate to="/login" replace/>;
}

export const PublicRoute = () => {
    const { session } = useAuth();

    //Si ya está autenticado, redirige al dashboard
    return !session ? <Outlet /> : <Navigate to="/dashboard" replace/>;
}