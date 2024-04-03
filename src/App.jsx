import About from "./components/About/About"
import Contactus from "./components/ContactUs/Contactus"
import Destination from "./components/Destinatios/Destination"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Packages from "./components/PackagesSection/Packages"
import Testimonial from "./components/Testimonial/Testimonial"

function App() {

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Destination />
      <Packages />
      <Testimonial />
      <Contactus />
      <Footer />
    </div>
  )
}

export default App
