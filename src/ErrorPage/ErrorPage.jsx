import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col h-screen bg-white">
                <img
                    src="https://i.ibb.co/cTKw5gN/closeup-shot-dog-lying-down-looking-quietly-camera-1.jpg"
                    alt=""
                    className="object-cover w-full h-1/2"
                />

                <div className="flex items-center justify-center flex-1">
                    <div className="max-w-xl px-4 py-8 mx-auto text-center">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            We canot find that page.
                        </h1>

                        <p className="mt-4 text-gray-500">
                            Try searching again, or return home to start from the beginning.
                        </p>

                        <Link
                            to='/'
                            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white hover:bg-[#f28583] bg-[#FA524F] focus:outline-none focus:ring"
                        >
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;