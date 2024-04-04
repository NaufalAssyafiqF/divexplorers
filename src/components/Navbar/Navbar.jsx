import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const shouldAddBlur = scrollTop > 0;
            setIsScrolled(shouldAddBlur);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`w-full fixed top-0 left-0 z-50 flex justify-between px-20 pt-6 pb-3 ${isScrolled ? 'backdrop-blur-md text-white' : ''}`}>
            <div className="flex justify-center items-center cursor-pointer">
                <img src="/diveexplorers.png" alt="" />
                <h3 className="text-xl font-bold ms-2">Divexplorers</h3>
            </div>
            <div className="flex justify-center items-center">
                <ul className="flex gap-x-8 justify-center items-center text-lg font-medium">
                    <a href="#about"><li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">About Us</li></a>
                    <a href="#destinations"><li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">Destinations</li></a>
                    <a href="#packages"><li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">Packages</li></a>
                    <a href="#testimonial"><li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">Testimonial</li></a>
                    <a href="#contact"><li className="hover:text-[#0097FF] transition-all ease-in-out duration-150 cursor-pointer">Contact Us</li></a>
                    <li className="cursor-pointer"><CiSearch className="text-2xl" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar