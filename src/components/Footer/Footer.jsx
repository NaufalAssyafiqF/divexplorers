import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <div className="px-20 flex justify-between bg-[#012E4D] text-white py-20">
            <div className="w-[50%]">
                <img src="/diveexplorers2.png" alt="" className="mb-2" />
                <h1 className="text-3xl font-semibold mb-5">DiveExplorers</h1>
                <p>diveexplorers@gmail.com</p>
                <p className="mb-2">Phone: +01 2345 6789</p>
                <div className="flex gap-x-5">
                    <FaFacebookF className="text-xl brightness-75" />
                    <FaTwitter className="text-xl brightness-75" />
                    <FaInstagram className="text-xl brightness-75" />
                    <FaLinkedinIn className="text-xl brightness-75" />
                    <FaYoutube className="text-xl brightness-75" />
                </div>
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold mb-5">Quick links</h1>
                <ul className="flex flex-col gap-y-2 text-sm">
                    <li className="hover:text-[#0097FF]">Home</li>
                    <li className="hover:text-[#0097FF]">About us</li>
                    <li className="hover:text-[#0097FF]">Destination</li>
                    <li className="hover:text-[#0097FF]">Packages</li>
                    <li className="hover:text-[#0097FF]">Testimonial</li>
                    <li className="hover:text-[#0097FF]">Conatct us</li>
                </ul>
            </div>
            <div className="">
                <h1 className="text-2xl font-semibold mb-5">Resources</h1>
                <ul className="flex flex-col gap-y-2 text-sm">
                    <li className="hover:text-[#0097FF]">Support</li>
                    <li className="hover:text-[#0097FF]">Privacy policy</li>
                    <li className="hover:text-[#0097FF]">Term & condition</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer