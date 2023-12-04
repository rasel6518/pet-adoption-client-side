import { FaAd, FaDonate, FaUser } from "react-icons/fa";
import { LiaDonateSolid } from "react-icons/lia";
import { MdPets } from "react-icons/md";
import { SiEclipseadoptium } from "react-icons/si";
import { NavLink } from "react-router-dom";

const AdminRoute = () => {
    return (
        <>
            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/dashboard/users' ? 'active' : ''}`}>
                {location.pathname === '/dashboard/users' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/dashboard/users"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 flex items-center gap-3 text-orange-600 text-xl border-orange-500"
                                : "text-black text-xl flex items-center gap-3 "
                    }
                >
                    <FaUser></FaUser>  Users
                </NavLink>
            </li>
            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/dashboard/addpetform' ? 'active' : ''}`}>
                {location.pathname === '/dashboard/addpetform' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/dashboard/addpetform"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 text-orange-600 flex items-center gap-3  text-xl border-orange-500"
                                : "text-black flex items-center gap-3  text-xl"
                    }
                >
                    <FaAd></FaAd>  Add a pet
                </NavLink>
            </li>
            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/dashboard/myaddedpets' ? 'active' : ''}`}>
                {location.pathname === '/dashboard/alladdedpet' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/dashboard/alladdedpet"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 text-orange-600 flex items-center gap-3  text-xl border-orange-500"
                                : "text-black flex items-center gap-3  text-xl"
                    }
                >
                    <FaAd></FaAd>  All Added pets
                </NavLink>
            </li>
            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/dashboard/adoptionrequest' ? 'active' : ''}`}>
                {location.pathname === '/dashboard/adoptionrequest' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/dashboard/adoptionrequest"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 text-orange-600 flex items-center gap-3  text-xl border-orange-500"
                                : "text-black flex items-center gap-3  text-xl"
                    }
                >
                    <SiEclipseadoptium />  Adoption Request
                </NavLink>
            </li>
            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/dashboard/myaddedpets' ? 'active' : ''}`}>
                {location.pathname === '/dashboard/donationcampaigns' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/dashboard/donationcampaigns"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 text-orange-600 flex items-center gap-3  text-xl border-orange-500"
                                : "text-black flex items-center gap-3  text-xl"
                    }
                >
                    <FaDonate></FaDonate>  Create Donation Campaign
                </NavLink>
            </li>
            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/dashboard/myaddedpets' ? 'active' : ''}`}>
                {location.pathname === '/dashboard/mydonationcam' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/dashboard/mydonationcam"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 text-orange-600 flex items-center gap-3  text-xl border-orange-500"
                                : "text-black flex items-center gap-3  text-xl"
                    }
                >
                    <FaDonate></FaDonate>  My Donation Campaigns

                </NavLink>
            </li>

            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/dashboard/myaddedpets' ? 'active' : ''}`}>
                {location.pathname === '/dashboard/mydonations' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/dashboard/mydonations"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 text-orange-600 flex items-center gap-3  text-xl border-orange-500"
                                : "text-black flex items-center gap-3  text-xl"
                    }
                >
                    <LiaDonateSolid /> My Donations
                </NavLink>
            </li>

        </>
    );
};

export default AdminRoute;