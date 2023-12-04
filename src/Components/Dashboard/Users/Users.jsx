import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const Users = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {

                    Swal.fire({
                        title: "Are you sure?",
                        text: `Do you want to elevate ${user.name} to an admin role`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes,I do !"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Admin Action Successful!",
                                text: "The admin task has been completed successfully.",
                                icon: "success"
                            });
                        }
                        refetch()
                    });
                }
            })
    }

    // console.log(users);
    return (
        <div>
            <p className="text-3xl text-center text-black">Total User :{users.length}</p>

            <div className="flex min-h-screen items-center justify-center bg-white">
                <div className="p-6 o px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">#</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Image</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">name</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Email</p>
                                </th>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Role</p>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) =>
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-3">
                                            <img src={user?.image} alt="Spotify" className="inline-block relative object-center !rounded-full w-12 h-12  border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />

                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{user.name}</p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{user.email}</p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="w-max">
                                            {
                                                user.role === 'admin' ? <button className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md" >
                                                    <span className="">Admin</span>
                                                </button> : <button onClick={() => handleMakeAdmin(user)} className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md" >
                                                    <span className="">User</span>
                                                </button>
                                            }
                                        </div>
                                    </td>

                                </tr>


                            )}



                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
};

export default Users;