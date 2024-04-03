import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <div className="px-20 flex justify-between bg-[#012E4D] text-white">
            <div>
                <img src="/diveexplorers.png" alt="" className="filter invert brightness-110" />
                <h1>DiveExplorers</h1>
                <p>diveexplorers@gmail.com</p>
                <p>Phone: +01 2345 6789</p>
                <div className="flex">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />
                    <FaYoutube />
                </div>
            </div>
            <div>
                <h1>Quick links</h1>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Destination</li>
                    <li>Packages</li>
                    <li>Testimonial</li>
                    <li>Conatct us</li>
                </ul>
            </div>
            <div>
                <h1>Resources</h1>
                <ul>
                    <li>Support</li>
                    <li>Privacy policy</li>
                    <li>Term & condition</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer