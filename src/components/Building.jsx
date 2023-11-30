import Build from "./building/index.jsx";

function Building() {
  return (
    <div style={{background: "url('/src/assets/pexels.jpeg') no-repeat center/cover", backgroundPosition: "50% 100%",}} className="text-center py-6">
        <div className="">
            <h1 className="capitalize font-bold text-white text-5xl mb-4 ">building Company</h1>
            <p className="italic text-white text-xl mb-6">From renovations and room additions to masonry and other handyman services</p>
            <div className="flex flex-wrap lg:flex-nowrap gap-3 justify-center mb-6">
                <Build image="/src/assets/1.jpg" text="Design-Build"/>
                <Build image="/src/assets/2.jpg" text="Remodeling"/>
                <Build image="/src/assets/3.jpg" text="City Spaces"/>
                <Build image="/src/assets/4.jpg" text="Civil Engineers"/>
            </div>
            <button className="bg-yellow-500 uppercase font-bold py-2 px-5 tracking-widest hover:text-yellow-500 hover:bg-black mb-3 mt-2">view more</button>
        </div>
    </div>
  )
}

export default Building