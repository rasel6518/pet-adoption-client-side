import { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Dogs = () => {
    const [dogpets, setDogPets] = useState([])
    const petlisting = useLoaderData();

    useEffect(() => {
        if (dogpets) {
            const dogpet = petlisting?.filter(
                pet => pet.petCategory?.toLowerCase() === 'dog')
            setDogPets(dogpet)
        }


    }, [petlisting])
    // const petlisting = useLoaderData();
    // console.log(petlisting);


    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5">
                {dogpets?.map(card =>
                    <div key={card._id} data-aos="fade-up" className="bg-white rounded-md shadow-md p-4">
                        <img src={card.petImage} alt={card.petName} className="rounded-lg w-[400px] h-[340px] object-cover mb-4" />
                        <h2 className="text-2xl font-bold mb-2">{card.petName}</h2>
                        <p className="text-gray-500 mb-2">
                            Age: {card.petAge}
                        </p>
                        <p className="text-gray-500 mb-2">
                            Location: {card.petLocation}
                        </p>
                        <Link to={`/detailspetadoption/${card._id}`}>

                            <button
                                className="bg-[#FA524F] text-white font-bold rounded-md px-4 py-2 hover:bg-[#f17876] active:bg-[#f17876] focus:outline-none" >
                                View Details
                            </button>
                        </Link>
                    </div>


                )}
            </div>
        </div>
    );
};

export default Dogs;