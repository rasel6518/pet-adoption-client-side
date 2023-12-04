import { useContext } from "react";
import { FaAd, FaHome, FaUser } from "react-icons/fa";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdPets } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin";
import UserRoute from "./UserRoute/UserRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
    const location = useLocation();
    const [isAdmin] = useAdmin();
    const { logout, user } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex flex-col md:flex-row ">

            <div className="w-full md:w-64 min-h-screen px-5 py-2 bg-gray-200">
                <div className="">
                    <img src={user.photoURL} alt="" className="rounded-full w-[45px] h-[45] mx-auto" />
                    <p className="text-center text-sm ">{user.displayName}</p>
                    <p className="text-center text-sm ">{user.email}</p>
                </div>
                <hr className="border-2 border-black my-5 hidden md:block" />
                <ul className="space-y-5">
                    {isAdmin ? (
                        <AdminRoute></AdminRoute>
                    ) : (
                        <UserRoute></UserRoute>
                    )}
                </ul>
                <hr className="border-2 border-black my-10 hidden md:block" />
                <ul className="flex flex-col items-center  md:items-baseline">
                    <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/' ? 'active' : ''}`}>
                        {location.pathname === '/' && <MdPets className="text-orange-600" />}
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "active border-b-2 text-orange-600 flex items-center gap-3  text-xl border-orange-500"
                                        : "text-black flex items-center gap-3  text-xl"
                            }
                        >
                            <FaHome></FaHome> Home
                        </NavLink>
                    </li>
                    <li>
                        <button
                            className="text-black flex items-center gap-3 my-5 text-xl"
                            onClick={handleLogout}
                        >
                            <CiLogout /> Sign Out
                        </button>
                    </li>
                </ul>
            </div>
            <div className="flex-1 my-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
