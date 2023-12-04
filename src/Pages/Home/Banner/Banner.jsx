import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mb-10">
            <div className="hero min-h-screen relative" style={{ backgroundImage: 'url(https://i.ibb.co/P1ZYssC/beautiful-shot-cute-beagle-dog.jpg)' }}>

                <div className="hero-content py-5 md:py-0 text-center text-neutral-content">
                    <div className="max-w-md text-white absolute md:p-8 left-0">
                        <h1 className="mb-5 text-2xl md:text-5xl  font-bold">Ready to
                            Adopt!</h1>
                        <p className="mb-5">Find your perfect furry friend and give them a forever home. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/petlisting'>
                            <button className="btn border-none  text-white hover:bg-[#f28583] bg-[#FA524F]">View Puppies</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;