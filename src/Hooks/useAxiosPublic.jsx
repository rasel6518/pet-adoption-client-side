import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://petpals-haven-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;