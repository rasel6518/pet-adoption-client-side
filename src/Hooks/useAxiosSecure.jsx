import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://petpals-haven-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Access-Token')
        console.log(' a request interceptor', token);
        config.headers.authorization = `Bearer ${token}`
        return config;

    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(
        function (response) {
            return response;
        },
        async (error) => {
            console.log("Error found", error);
            const status = error.response.status;
            console.log(status);

            if (status === 401 || status === 403) {
                await logout();
                navigate("/signin", { state: { error: "Invalid token. Please log in again." } });
            }

            console.log(error);
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;