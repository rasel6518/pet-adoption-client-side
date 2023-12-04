import { useContext, useState } from "react";
import logo from '../../../assets/logo.png';
import { AiOutlineCloseCircle, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const location = useLocation();
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => {

            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleToggleUserDropdown = () => {
        setUserDropdownOpen(!isUserDropdownOpen);
    };
    const { isAmin } = useAdmin()

    const navlinks = (
        <>

            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/' ? 'active' : ''}`}>
                {location.pathname === '/' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 text-orange-600 text-xl border-orange-500"
                                : "text-black text-xl"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/petlisting' ? 'active' : ''}`}>
                {location.pathname === '/petlisting' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/petlisting"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 text-orange-600 text-xl border-orange-500"
                                : "text-black text-xl"
                    }
                >
                    Pet Listing
                </NavLink>
            </li>
            <li className={`flex items-center gap-3 text-orange-600 ${location.pathname === '/donation' ? 'active' : ''}`}>
                {location.pathname === '/donation' && <MdPets className="text-orange-600" />} {/* Show icon only when active */}
                <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? "active border-b-2 text-orange-600 text-xl border-orange-500"
                                : "text-black text-xl"
                    }
                >
                    Donation
                </NavLink>
            </li>






        </>
    );

    return (
        <div>
            <div className="">
                <nav className="relative  bg-gray-100 px-4 py-4 mb-5
                flex shadow-lg justify-between items-center ">
                    <div className="md:hidden">
                        <button
                            className="navbar-burger flex items-center text-blue-600 p-3"
                            onClick={handleToggleMenu}
                        >
                            <AiOutlineMenu className="text-xl"></AiOutlineMenu>
                        </button>
                    </div>

                    <a className="text-3xl font-bold leading-none" href="#">
                        <img src={logo} alt="" className="w-[170px] h-[80px]" />
                    </a>

                    <div className="flex mx-5 gap-5 items-center">
                        <div
                            className="  rounded-full"
                            onClick={handleToggleUserDropdown}
                        >
                            {user ?
                                <img src={user.photoURL} className="w-[40px] h-[40px] rounded-full " alt="" />
                                : <AiOutlineUser></AiOutlineUser>}
                        </div>

                        {isUserDropdownOpen && (
                            <div className={`absolute right-24 mt-[170px]  z-30 bg-white border  rounded shadow-md transition-max-height transition-opacity overflow-hidden ${isUserDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-3 pt-2">{user?.displayName}</div>
                                <div className="px-3 text-sm ">{user?.email}</div>
                                <hr />
                                {
                                    user ? <>
                                        {
                                            isAmin ? <Link to='/dashboard/users' className="block p-4 text-sm font-semibold hover:text-white hover:bg-[#FA524F] rounded">
                                                Dashboard
                                            </Link> : <Link to='/dashboard/addpetform' className="block p-4 text-sm font-semibold hover:text-white hover:bg-[#FA524F] rounded">
                                                Dashboard
                                            </Link>
                                        }
                                        <Link onClick={handleLogout} >   <div className="block p-4 text-sm font-semibold hover:text-white hover:bg-[#FA524F]  rounded"> SIGN OUT</div></Link>
                                    </> : <>
                                        {
                                            isAmin ? <Link to='/dashboard/users' className="block p-4 text-sm font-semibold hover:hover:text-white hover:bg-[#FA524F] rounded">
                                                Dashboard
                                            </Link> : <Link to='/dashboard/addpetform' className="block p-4 text-sm font-semibold thover:text-white hover:bg-[#FA524F] rounded">
                                                Dashboard
                                            </Link>
                                        }</>
                                }

                            </div>
                        )}

                        {user ? '' : <Link to='/signin'>   <div className="btn border-none  text-white hover:bg-[#f28583] bg-[#FA524F] ">SIGN IN</div></Link>}
                    </div>

                    <ul className={` hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:flex md:mx-auto md:items-center md:w-auto md:space-x-6 ${isMenuOpen ? '' : ' hidden'}`}>
                        {navlinks}
                    </ul>
                </nav>

                <div className={`navbar-menu w-[450px] duration-1000 top-0 left-0 h-[100vh] md:hidden absolute transition-all z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-[1000px]'}`}>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <ul>{navlinks}</ul>
                    </nav>
                    <div className="navbar-backdrop top-2 right-20 fixed" onClick={handleToggleMenu}>
                        <AiOutlineCloseCircle className="text-3xl text-red-500"></AiOutlineCloseCircle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
