import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-black">
        <div className="text-white text-center p-[70px] lg:w-[50%] m-auto">
            {/* <p className="text-[16px] mb-6">Sample text. Click to select the Text Element.</p> */}
            <p className="font-light text-grey">Copyright &copy; Tous droits réservés | <Link to="/" className="underline underline-offset-2 hover:no-underline font-semibold">SoftSkills</Link></p>
        </div>
    </footer>
  )
}

export default Footer