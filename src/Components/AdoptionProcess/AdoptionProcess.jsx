
const AdoptionProcess = () => {
    return (
        <div>
            <div className="text-center my-10">
                <p className="text-[#FBAE53] py-5">How We Work</p>
                <h1 className="text-5xl text-black">Pet Adoption Process</h1>
            </div>
            <div className="grid md:grid-cols-2 px-5 lg:grid-cols-3 mt-10 gap-10">
                <div className="">
                    <div className=" relative">
                        <img src="https://i.ibb.co/8DB8m4X/process-1.jpg" className="rounded-full" alt="" />
                        <p className="w-32 h-32 absolute top-0 md:-top-5 md:-right-5 flex items-center justify-center rounded-full text-6xl  bg-gradient-to-r from-[#FBAE53] to-[#eb8910]  ">1</p>
                    </div>
                    <h2 className="text-3xl text-black text-center mt-5">Find your pet</h2>
                </div>
                <div className="">
                    <div className=" relative">
                        <img src="https://i.ibb.co/XYR4YnR/process-2.jpg" className="rounded-full" alt="" />
                        <p className="w-32 h-32 absolute top-0 md:-top-5 md:-right-5 flex items-center justify-center rounded-full text-6xl bg-gradient-to-r from-[#FBAE53] to-[#eb8910]  bg-[#c67e26]">2</p>
                    </div>

                    <h2 className="text-3xl text-black text-center mt-5">Know your pet</h2>
                </div>
                <div className="">
                    <div className=" relative">
                        <img src="https://i.ibb.co/R2LKV4F/process-3.jpg" className="rounded-full" alt="" />
                        <p className="w-32 h-32 absolute top-0 md:-top-5 md:-right-5 flex items-center justify-center rounded-full text-6xl bg-gradient-to-r from-[#FBAE53] to-[#eb8910]  bg-[#c67e26]">3</p>
                    </div>

                    <h2 className="text-3xl text-black text-center mt-5">Take your pet home</h2>
                </div>
            </div>
        </div>
    );
};

export default AdoptionProcess;