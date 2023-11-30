import AboutUs from "../components/AboutUs"
import Building from "../components/Building"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Information from "../components/Information"
import JoinUs from "../components/JoinUs"
import Patnerships from "../components/Patnerships"
import Planning from "../components/Planning"
import Architect from "../components/architect"

function Home() {
  return (
    <div className="">
        <AboutUs />
        <JoinUs />
        <Building />
        <Experience />
        <Planning />
        <Architect />
        <Patnerships />
        <Information />
        <Footer />
    </div>
  )
}

export default Home