import { AiFillInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import logo from '../../../assets/footer-logo.png'
import { FaPhone } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="relative z-10  bg-gray-100 my-10    shadow-lg  ">
                <div className="container">
                    <div className="-mx-4 md:flex px-5 flex-wrap">
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div className="mb-10 w-full">

                                <img
                                    src={logo}
                                    alt="logo"
                                    className="  w-44  object-cover  h-36 mx-auto "
                                />

                                <p className="mb-7  text-center ">
                                    Sed ut perspiciatis undmnis is iste natus error sit amet
                                    voluptatem totam rem aperiam.
                                </p>
                                <p className="flex  justify-center items-center text-sm font-medium text-black">
                                    <span className="mr-3 text-primary">
                                        <FaPhone className="text-xl"></FaPhone>
                                    </span>
                                    <span>+013 (123) 123 99</span>
                                </p>
                            </div>
                        </div>

                        <LinkGroup header="Resources">
                            <NavLink link="/#" label="SaaS Development" />
                            <NavLink link="/#" label="Our Products" />
                            <NavLink link="/#" label="User Flow" />
                            <NavLink link="/#" label="User Strategy" />
                        </LinkGroup>
                        <LinkGroup header="Company">
                            <NavLink link="/#" label="About PetPals Haven" />
                            <NavLink link="/#" label="Contact & Support" />
                            <NavLink link="/#" label="Success History" />
                            <NavLink link="/#" label="Setting & Privacy" />
                        </LinkGroup>
                        <LinkGroup header="Quick Links">
                            <NavLink link="/#" label="Premium Support" />
                            <NavLink link="/#" label="Our Services" />
                            <NavLink link="/#" label="Know Our Team" />
                            <NavLink link="/#" label="Download App" />
                        </LinkGroup>

                        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                            <div className="mb-10 my-5 w-full">
                                <h4 className="mb-9 text-center text-lg font-semibold text-black ">
                                    Follow Us On
                                </h4>
                                <div className="mb-6 flex justify-center items-center">
                                    <a
                                        href="javascript:void(0)"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-black hover:border-primary  hover:bg-pink-700 hover:text-white  sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <AiFillInstagram className="text-2xl"></AiFillInstagram>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-black hover:border-primary hover:bg-red-500 hover:text-white  sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <AiOutlineYoutube className="text-2xl"></AiOutlineYoutube>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-black hover:border-primary hover:bg-sky-500 hover:text-white  sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <AiOutlineTwitter className="text-2xl"></AiOutlineTwitter>
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-black hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3  sm:mr-4 lg:mr-3 xl:mr-4"
                                    >
                                        <AiOutlineFacebook className="text-2xl"></AiOutlineFacebook>
                                    </a>
                                </div>
                                <p className="text-base text-center text-body-color ">
                                    &copy; 2025 PetPals Haven
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
    return (
        <>
            <div className="w-full text-center my-5 px-4 sm:w-1/2 lg:w-2/12">
                <div className="mb-10 w-full">
                    <h4 className="mb-9 text-lg font-semibold text-black ">
                        {header}
                    </h4>
                    <ul className="space-y-3">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }) => {
    return (
        <li>
            <a
                href={link}
                className="inline-block text-base leading-loose text-body-color hover:text-orange-700 "
            >
                {label}
            </a>
        </li>
    );
};
