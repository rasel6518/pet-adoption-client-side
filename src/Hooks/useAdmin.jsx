import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading && !!localStorage.getItem('Access-Token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin
        }
    })


    return [isAdmin, isLoading]
};

export default useAdmin;