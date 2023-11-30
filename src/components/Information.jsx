function Information() {
  return (
    <div  style={{background: "url('/src/assets/pexels-photo.jpeg') no-repeat center/cover", backgroundPosition: "50% 0%",}} className="min-h-[550px] py-6 lg:py-7">
        <div className="text-center w-[80%] max-w-[1100px] m-auto">
            <div className="w-[500px] m-auto mb-5">
                <h1 className="font-bold text-5xl tracking-tighter mb-5">Information partners</h1>
                <p className="text-lg">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            </div>
            <div className="bg-white w-[350px] md:w-full m-auto py-5 px-6 flex flex-col md:flex-row items-center flex-wrap gap-x-7 gap-y-6 justify-evenly">
                <img src="/src/assets/logo/logo1.png" alt="" />
                <img src="/src/assets/logo/logo2.png" alt="" />
                <img src="/src/assets/logo/logo3.png" alt="" />
                <img src="/src/assets/logo/logo4.png" alt="" />
                <img src="/src/assets/logo/logo5.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Information