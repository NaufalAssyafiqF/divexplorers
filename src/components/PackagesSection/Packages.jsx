import { FaArrowRightLong } from "react-icons/fa6"

function Packages() {
    return (
        <div className="bg-[#012E4D] px-20 flex h-[100vh] pt-20">
            <div className="text-white w-[50%] pe-10">
                <h1 className="text-3xl font-bold">Packages</h1>
                <h3 className="text-xl mb-5">Choose your best packages</h3>
                <p className="mb-5">Welcome to DiveExplorers, where true underwater adventurers thrive! We proudly present to you our three exclusive packages: Golden, Silver, and Bronze.</p>
                <div className="ps-10 border-l-4 border-[#0097FF] mb-5 flex flex-col gap-y-2">
                    <div className="flex  items-center justify-center">
                        <div className="w-[2.5rem] h-[2.3rem] flex items-center justify-center me-5 bg-"><h1 className="w-full h-full rounded-full border-2 text-2xl font-semibold border-white text-center">1</h1></div>
                        <div className="w-full">
                            <h3 className="text-2xl font-semibold">Golden Package</h3>
                            <p>Enjoy exclusive accommodations and five-star facilities throughout your journey.</p>
                        </div>
                    </div>
                    <div className="flex  items-center justify-center">
                        <div className="w-[2.5rem] h-[2.3rem] flex items-center justify-center me-5 bg-"><h1 className="w-full h-full rounded-full border-2 text-2xl font-semibold border-white text-center">2</h1></div>
                        <div className="w-full">
                            <h3 className="text-2xl font-semibold">Silver Package</h3>
                            <p>Experience cozy and affordable accommodations during your adventure.</p>
                        </div>
                    </div>
                    <div className="flex  items-center justify-center">
                        <div className="w-[2.5rem] h-[2.3rem] flex items-center justify-center me-5 bg-"><h1 className="w-full h-full rounded-full border-2 text-2xl font-semibold border-white text-center">3</h1></div>
                        <div className="w-full">
                            <h3 className="text-2xl font-semibold">Bronze Package</h3>
                            <p>Enjoy modest yet comfortable accommodations throughout your adventure.</p>
                        </div>
                    </div>
                </div>
                <button className="px-6 py-2 rounded-md text-2xl backdrop-blur-md bg-white/10 border-y-2 border-white flex justify-center items-center hover:text-[#0097FF] hover:border-[#0097FF] transition-all ease-in-out">View package detail <FaArrowRightLong className="ms-4" /></button>
            </div>
            <div className="w-[50%] h-full flex flex-col gap-y-5">
                <div className="w-full h-[40%] overflow-hidden"><div className="bg-[url(/dive-destination-4.jpg)] bg-cover bg-bottom w-full h-full hover:scale-110 transition-all ease-in-out duration-500"></div></div>
                <div className="w-full h-[40%] overflow-hidden"><div className="bg-[url(/dive-destination-2.jpg)] bg-cover bg-bottom w-full h-full hover:scale-110 transition-all ease-in-out duration-500"></div></div>
            </div>
        </div>
    )
}

export default Packages