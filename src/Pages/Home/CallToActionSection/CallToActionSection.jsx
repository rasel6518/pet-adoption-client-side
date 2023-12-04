import { Link } from "react-router-dom";


const CallToActionSection = () => {
    return (
        <div className="my-10">
            <section className="flex-row md:flex items-center justify-center bg-gray-100  ">
                {/* Left side (Image) */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://i.ibb.co/xjrZ7Cn/2150782489.jpg"
                        alt="Inspirational Image"
                        className="object-cover w-full h-[440px] rounded-md shadow-lg"
                    />
                </div>

                {/* Right side (Content) */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                        Adopt a Pet, <br /> Change a Life
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Give a loving home to a furry friend and make a positive impact on
                        their life. Adopt, dont shop!
                    </p>
                    <Link to='/petlisting'>
                        <button className="px-6 py-3  text-white rounded-m hover:bg-[#f28583] bg-[#FA524F] focus:outline-none focus:shadow-outline-blue active:bg-[#f28583]">
                            Adopt Now
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CallToActionSection;
