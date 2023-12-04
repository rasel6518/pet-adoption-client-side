import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AdoptModal from "../Modal/AdoptModal";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const DetailsPetAdoption = () => {
    let [isOpen, setIsOpen] = useState(false)
    const { user } = useContext(AuthContext)

    console.log(user);

    const closeModal = () => {
        setIsOpen(false)
    }
    const pet = useLoaderData()
    const [adoptionInfo, setAdoptionInfo] = useState({
        userInfo: {
            name: user.displayName,
            email: user.email,
            image: user.photoURL
        },
        petInfo: {
            petName: pet.petName,
            petImage: pet.petImage,
            petCategory: pet.petCategory,
            petLocation: pet.petName,

        }
    })
    return (
        <div className="bg-gray-100">
            <div className=" md:flex items-center  px-5 max-w-full md:max-w-5xl h-full w-full mx-auto  rounded-xl overflow-hidden  my-4 shadow-lg">
                <div className="md:w-1/2">
                    <img
                        className="w-full h-[400px] object-cover object-center"
                        src={pet.petImage}
                        alt={pet.petName}
                    />
                </div>

                <div className="md:w-1/2 p-6">
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold text-gray-800">{pet.petName}</h2>
                        <p className="text-sm text-gray-500">{pet.shortDescription}</p>
                    </div>

                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600">Category: {pet.petCategory}</p>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-600">Location: {pet.petLocation}</p>
                        </div>
                    </div>

                    <p className="text-gray-700">{pet.longDescription}</p>

                    <div className="mt-4">
                        <button onClick={() => setIsOpen(true)} className="hover:bg-[#f28583] bg-[#FA524F] text-white font-bold py-2 px-4 rounded">
                            Adopt
                        </button>
                    </div>
                </div>
            </div>

            <AdoptModal closeModal={closeModal} isOpen={isOpen} adoptionInfo={adoptionInfo}></AdoptModal>

        </div>
    );
};

export default DetailsPetAdoption;