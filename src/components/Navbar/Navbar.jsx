import { CiSearch } from "react-icons/ci";
function Navbar() {
    return (
        <div className="w-full absolute top-0 left-0 z-50 flex justify-between px-20 pt-6">
            <div className="flex justify-center items-center cursor-pointer">
                <img src="/diveexplorers.png" alt="" />
                <h3 className="text-xl font-bold ms-2">Divexplorers</h3>
            </div>
            <div className="flex justify-center items-center">
                <ul className="flex gap-x-8 justify-center items-center text-lg font-medium">
                    <li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">About Us</li>
                    <li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">Destinations</li>
                    <li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">Packages</li>
                    <li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">Testimonial</li>
                    <li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">Contact Us</li>
                    <li className="cursor-pointer"><CiSearch className="text-2xl" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar