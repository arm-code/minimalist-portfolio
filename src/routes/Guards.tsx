

import { Navigate, Outlet} from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


export const PrivateRoute = () =>{
    const { isAuthenticated } = useAuthContext();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>;
}

export const PublicRoute = () => {
    const { isAuthenticated } = useAuthContext();

    //Si ya está autenticado, redirige al dashboard
    return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace/>;
}