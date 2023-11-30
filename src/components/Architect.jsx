import plan from "/src/assets/architect--min.jpg";

function Architect() {
  return (
    <div>
        <div className="py-7 justify-center flex flex-wrap lg:flex-nowrap gap-6 lg:gap-[90px] w-[70%] md:w-[700px] lg:w-[850px] xl:w-[1100px] m-auto">
            <div className="mb-7 md:mb-0">
                <img src={plan} alt="" className="h-[70%] md:w-[230px] md:h-[210px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[350px] mb-5" />
                <ul className="list-disc italic xl:text-[17px]">
                    <li className="mb-1">Design-Build</li>
                    <li className="mb-1">General Contracting</li>
                    <li className="mb-1">Concerte Work</li>
                    <li className="mb-1">Fabrication Services</li>
                    <li className="mb-1">Industrial Services</li>
                    <li className="mb-1">Roofing & Siding</li>
                    <li className="mb-1">Site selection Services</li>
                    <li className="mb-1">Steel building</li>
                </ul>
            </div>
            <div className="w-[100%] md:w-[400px] lg:w-[520px] relative">
                <div className="lg:absolute bottom-0">
                    <div className="bg-yellow-400 w-[100%] md:w-[350px] lg:w-[400px] py-6 mb-6">
                        <h2 className="text-center font-bold text-xl lg:text-2xl uppercase tracking-widest text-white mb-2">building company</h2>
                        <h1 className="capitalize text-white text-5xl lg:text-6xl font-bold text-center tracking-tighter">About us</h1>
                    </div>
                    <h3 className="font-semibold text-xl mb-4 w-[100%]">Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient.</h3>
                    <div className="w-[100%] md:w-[300px] md:float-right">
                        <p className="mb-4 text-xl text-justify text-gray">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                        <button className="bg-yellow-500 uppercase font-bold py-2 px-5 tracking-widest hover:text-yellow-500 hover:bg-black mb-3">read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Architect