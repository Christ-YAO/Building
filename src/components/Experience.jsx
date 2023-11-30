import experience from "../assets/experience.jpg";

function Experience() {
  return (
    <div className="bg-grey w-full h-[800px] lg:h-screen relative">
        <div className="bg-yellow-500 w-[300px] md:w-[400px] h-full absolute top-0 left-1/2 -translate-x-1/2 "></div>
        <div className=" h-screen relative md:w-[750px] lg:w-[900px] xl:w-[1200px] m-auto">
            <div className="flex justify-center items-center absolute bottom-0">
                <img src={experience} alt="" className="sm:w-[65%] md:w-[500px] lg:w-[650px] xl:w-[700px] z-10 sm:-mt-[550px] md:-mt-[500px] lg:mt-0 " />
                <div className="bg-white w-[70%] md:w-[600px] lg:w-[500px] xl:w-[550px] z-10 py-4 md:py-6 px-5 xl:px-6 -ml-[250px] lg:-ml-[25%] xl:-ml-[10%] lg:-mb-7">
                    <h2 className="font-bold text-3xl md:text-5xl mb-4">We have 10+ years of experience</h2>
                    <p className=" md:text-[18px] mb-5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button className="bg-yellow-500 uppercase font-bold py-2 px-5 tracking-widest hover:text-yellow-500 hover:bg-black">read more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience