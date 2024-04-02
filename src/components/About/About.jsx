import { FaArrowRightLong } from "react-icons/fa6";
function About() {
    return (
        <div className="px-20 text-white w-full h-[70vh]  bg-[#0F1922]">
            <div className="-translate-y-20 flex justify-center items-center">
                <div className="flex w-[50%]">
                    <div className="pe-4"><img src="/dive-1.png" alt="" /></div>
                    <div className="flex flex-col justify-between ">
                        <div><img src="/dive-2.png" alt="" className="w-full h-full bg-cover" /></div>
                        <div><img src="/dive-3.png" alt="" className="w-full h-full bg-cover" /></div>
                    </div>
                </div>
                <div className="w-[50%] ms-10">
                    <h1 className="text-3xl font-bold mb-2">About Us</h1>
                    <h2 className="mb-10 text-xl">Explore the Depths, Discover the Wonders</h2>
                    <p className="mb-10 ps-4 border-l-4 border-[#0097FF]">DiveExplorers is a passionate team of experienced divers dedicated to sharing the beauty and excitement of underwater exploration. With a commitment to safety and sustainability, we offer unforgettable diving experiences for adventurers of all levels. Our expert guides lead expeditions to some of the worlds most breathtaking dive sites, where you can immerse yourself in the wonders of the ocean while preserving its delicate ecosystem. Join us on a journey to discover the hidden treasures beneath the waves.</p>
                    <button className="px-6 py-2 rounded-md text-2xl backdrop-blur-md bg-white/10 border-y-2 border-white flex justify-center items-center hover:text-[#0097FF] hover:border-[#0097FF] transition-all ease-in-out">Read more <FaArrowRightLong className="ms-4" /></button>
                </div>
            </div>

        </div>
    )
}

export default About