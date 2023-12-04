import { FaBone } from "react-icons/fa";
import { GoDash } from "react-icons/go";


const About = () => {
    return (
        <div>
            <div className="md:flex items-center bg-gray-100 py-10 gap-10 ">
                <div className="flex-1">
                    <img src="https://i.ibb.co/QnXcRnB/dog-P228-UWM-removebg-preview.png" alt="" />
                </div>
                <div className="flex-1 p-5">
                    <p className="text-[#FBAE53] flex items-center"> <GoDash className="text-[#FBAE53]" /><GoDash className="text-[#FBAE53]" />About us</p>
                    <h1 className=" text-2xl md:text-5xl mt-10 text-black">The Best for Your Pet!</h1>
                    <p className="mt-5">Ensuring the well-being of your furry friend is our top priority. We understand the importance of providing the best care for your pet, and we are committed to delivering exceptional services tailored to their needs.</p>

                    <p className="flex items-center mt-10 gap-2"> <FaBone className="text-orange-500"></FaBone> we go above and beyond to provide unparalleled care.</p>
                    <p className="flex items-center gap-2"> <FaBone className="text-orange-500"></FaBone> Your peace of mind is important to us.</p>
                    <p className="flex items-center gap-2"> <FaBone className="text-orange-500"></FaBone> Whether its regular check-ups, specialized treatments.</p>
                </div>
            </div>
        </div>
    );
};

export default About;