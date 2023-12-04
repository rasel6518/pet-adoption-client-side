import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllPet = () => {
    const axiosSecure = useAxiosSecure()

    const { data: allPet, refetch } = useQuery({
        queryKey: ['allPet'],
        queryFn: async () => {
            const res = await axiosSecure.get('/petlistings')
            // console.log(res.data);
            return res.data;
        }

    })

    return [allPet, refetch]
};

export default useAllPet;