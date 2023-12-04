import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Categories = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('https://petpals-haven-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    console.log(category);
    return (
        <div className="py-10 bg-gray-100">

            <h1 className=" font-serif mb-5 text-center text-5xl font-bold">Our Pet Category</h1>
            <div className="grid md:grid-cols-4 my-10 gap-10">
                {category?.map((item) => (
                    <div key={item._id} className=" w-64 h-64 mx-auto  rounded-lg">
                        <Link to={`/${item.name.toLowerCase()}`} className="relative  overflow-hidden">
                            <img
                                src={item.img}
                                className="w-full h-full rounded-xl  object-cover hover:scale-125 "
                                alt={`Image of ${item.name}`}
                            />

                            <div className="absolute inset-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 hover:opacity-70"></div>




                        </Link>
                        <div className="text-center text-[#FA524F] text-2xl font-semibold">
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Categories;