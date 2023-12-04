import { Link } from "react-router-dom";



const DonationCard = ({ donation }) => {
    const { donationImage, petName, maxAmount } = donation
    console.log(donation);
    const donationProgress = 60;
    return (
        <div>
            <div className="max-w-4xl mx-auto  overflow-hidden shadow-md rounded-lg">
                <div className="md:flex gap-5 bg-gray-100 flex-row-reverse ">
                    {/* Left side - Content */}
                    <div className="md:w-1/2 p-3">
                        <h2 className="text-2xl font-bold  text-black mb-4">Pet Donation Information</h2>
                        <p className=" text-xl text-black mb-4">Pet Name: {petName}</p>
                        <div className="mb-4">
                            {/* <p className=" text-sm text-black">
                                Help {petName} find a loving home! Your contribution makes a difference in their lives.
                                Every donation brings us closer to the goal and provides care, love, and a better future for {petName}.
                            </p> */}
                        </div>
                        <p className=" text-black mb-4">Maximum Donation Amount: ${maxAmount}</p>
                        <p className=" text-black mb-4"> Donation Amount: $12 </p>
                        <Link >
                            <button className="ml-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"> View Details</button></Link>

                    </div>

                    {/* Right side - Image */}
                    <div className="md:w-1/2 flex items-center">
                        <img
                            className="w-64  h-64   object-cover object-center"
                            src={donationImage}
                            alt="Pet Image"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonationCard;