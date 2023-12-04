import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const PetListing = () => {
    const axiosSecure = useAxiosSecure()
    // const axiosPublic = useAxiosPublic()
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('')
    const { data: petlisting } = useQuery({
        queryKey: ['petlisting'],
        queryFn: async () => {
            const res = await axiosSecure.get('/petlistings')
            return res.data;
        }
    })
    console.log(petlisting);
    useEffect(() => {
        Aos.init()
    }, [])

    const filteredPetListing = petlisting?.filter((card) => {
        // Filter by name
        const nameMatch = card.petName.toLowerCase().includes(searchTerm.toLowerCase());
        // Filter by category
        const categoryMatch = !selectedCategory || card.petCategory === selectedCategory;
        return nameMatch && categoryMatch;
    });

    // Sort by date in descending order
    const sortedPetListing = filteredPetListing?.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div>


            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border rounded-md mr-2"
                />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-2 border rounded-md"
                >
                    <option value="">All Categories</option>
                    <option value="dog">dog</option>
                    <option value="cat">cat</option>
                    <option value="rabbit">rabbit</option>
                    <option value="bird">bird</option>

                </select>
            </div>

            {filteredPetListing?.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-5">
                    {filteredPetListing.map((card) => (
                        <div key={card._id} data-aos="fade-up" className="bg-white rounded-md shadow-md p-4">
                            <img src={card.petImage} alt={card.petName} className="rounded-lg w-[400px] h-[340px] object-cover mb-4" />
                            <h2 className="text-2xl font-bold mb-2">{card.petName}</h2>
                            <p className="text-gray-500 mb-2">Age: {card.petAge}</p>
                            <p className="text-gray-500 mb-2">Location: {card.petLocation}</p>
                            <Link to={`/detailspetadoption/${card._id}`}>
                                <button
                                    className="bg-[#FA524F] text-white font-bold rounded-md px-4 py-2 hover:bg-[#f17876] active:bg-[#f17876] focus:outline-none"
                                >
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No pets match the search criteria.</p>
            )}
        </div>


    );
};

export default PetListing;


