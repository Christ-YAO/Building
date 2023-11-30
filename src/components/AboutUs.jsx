import { BsBuildings, BsCalendar2Date } from "react-icons/bs";
import { IoAnalytics } from "react-icons/io5";
import { SiSemaphoreci } from "react-icons/si";
import man from "../assets/guy.png";
import About from "./about/index.jsx";

function AboutUs() {
  return (
    <div className="bg-grey">
        <div className="w-[85%] md:w-[95%] sm:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1100px] m-auto pt-6 pb-[90px] ">
            <div className="flex flex-wrap md:flex-nowrap md:flex-row-reverse">
                <div className="py-6 sm:px-[10%] md:px-0">
                    <h1 className="uppercase font-bold tracking-wider text-xl mb-2 md:mb-4">about us</h1>
                    <p className="font-bold capitalize text-[40px] md:text-4xl lg:text-6xl mb-2 md:mb-5 leading-10">plan. perform. inspire.</p>
                    <p className="italic lg:text-[17px] mb-5">Our Company is a relationship-based company, meaning that we focus on developing and maintaining long-term relationships with all of our business partners. </p>
                    <button className="bg-yellow-500 uppercase font-bold py-2 px-5 tracking-widest hover:text-yellow-500 hover:bg-black">read more</button>
                </div>
                <img src={man} alt="" className="w-[480px] xl:w-[550px] md:w-[450px] m-x-auto" />
            </div>
            <div className="flex lg:flex-nowrap xl:flex-nowrap flex-wrap">
                <About icon={<IoAnalytics className="text-4xl" />} title={"anlysis"} color="#eab308" description={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."} />
                <About icon={<BsCalendar2Date className="text-4xl" />} title={"planning"} color="#facc15" description={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."} />
                <About icon={<SiSemaphoreci className="text-4xl text-black" />} title={"design"} color="#fde047" description={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."} />
                <About icon={<BsBuildings className="text-4xl" />} title={"building"} color="#fef08a" description={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."} />
            </div>
        </div>
    </div>
  )
}

export default AboutUs