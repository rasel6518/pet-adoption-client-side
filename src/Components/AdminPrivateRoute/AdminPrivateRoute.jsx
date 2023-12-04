import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Loading/Loading";



const AdminPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isLoading] = useAdmin()


    if (loading || isLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return (
        <Navigate to='/signin' >

        </Navigate>
    );
};

export default AdminPrivateRoute;