import About from "./components/About/About"
import Destination from "./components/Destinatios/Destination"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Destination />
    </div>
  )
}

export default App
