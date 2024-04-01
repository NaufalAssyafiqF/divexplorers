import { FaPhoneAlt } from "react-icons/fa";
function HeroTitle() {
    return (
        <div className="px-20 text-white w-[60%] mb-32">
            <h1 className="text-5xl font-bold mb-5">Unleash Your Spirit of Adventure Underwater.</h1>
            <h2 className="text-md mb-4">Join us on unforgettable journeys as we delve into the mysteries of the deep, discovering hidden treasures and vibrant marine life along the way. Dive deeper, discover more, and create memories that will last a lifetime with DiveExplorers.</h2>
            <button className="px-11 py-3 rounded-md text-2xl backdrop-blur-md border-y-2 border-white flex justify-center items-center hover:text-[#0097FF] hover:border-[#0097FF] transition-all ease-in-out"><FaPhoneAlt className="me-4" /> Book a call</button>
        </div>
    )
}

export default HeroTitle