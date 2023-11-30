import architect from "../assets/billionphotos.png";

function JoinUs() {
  return (
    <div className="w-[85%] md:w-[90%] sm:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1100px] m-auto pt-7 pb-6">
        <div className="flex flex-wrap md:flex-nowrap gap-1 lg:gap-6">
            <div className=" px-6 md:basis-1/2">
                <h2 className="uppercase font-bold leading-9 lg:leading-[45px] tracking-widest text-2xl md:text-xl lg:text-2xl">OUR PROJECTS ARE WELL KNOWN. OUR PEOPLE SET US APART. WE INSPIRE GREATNESS. JOIN US TO BUILD A BETTER FUTURE.</h2>
                <img src={architect} alt="" className="w-[350px] md:w-[330px] float-right mb-6 md:mb-0" />
            </div>
            <div className="w-[90%] m-auto md:basis-1/2 lg:basis-1/3">
                <h1 className="font-bold text-5xl md:text-4xl lg:text-5xl mb-4">Let&apos;s Do Great Things Together - Join Us</h1>
                <p className="text-justify mb-3 text-lg">Facilisi morbi tempus iaculis urna id volutpat lacus. Est placerat in egestas erat imperdiet sed euismod nisi porta. Eget arcu dictum varius duis. Adipiscing vitae proin sagittis nisl rhoncus. Sit amet commodo nulla facilisi nullam.</p>
                <p className="text-justify mb-5 text-lg">Cursus sit amet dictum sit amet. Nisl vel pretium lectus quam id leo in. Elementum tempus egestas sed sed risus. Feugiat in ante metus dictum at tempor commodo ullamcorper a.</p>
                <button className="bg-yellow-500 uppercase font-bold py-2 px-5 tracking-widest hover:text-yellow-500 hover:bg-black">read more</button>
            </div>
        </div>
    </div>
  )
}

export default JoinUs