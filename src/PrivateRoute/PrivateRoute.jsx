import { useContext } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to='/signin'></Navigate>
    );
};

export default PrivateRoute;