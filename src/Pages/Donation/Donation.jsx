import { useLoaderData } from "react-router-dom";
import DonationCard from "../../Components/Dashboard/DonationCard/DonationCard";


const Donation = () => {
    const donations = useLoaderData()

    return (
        <div className=" grid grid-cols-3 gap-5">
            {
                donations?.map(donation =>
                    <DonationCard key={donation._id} donation={donation} ></DonationCard>
                )
            }

        </div>
    );
};

export default Donation;