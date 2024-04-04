import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { dataTestimonial } from "../../data/data";
function Testimonial() {
    return (
        <div className="bg-[#0F1922]  px-20 pt-20" id="testimonial">
            <h1 className="text-3xl text-white font-bold">Testimonial</h1>
            <h3 className="text-xl text-white mb-10">What our client say about us</h3>
            <div className="w-full h-[80%] flex justify-between">
                {dataTestimonial.map((item, index) => (
                    <div className="bg-slate-500 w-[30%] mb-20  rounded-lg text-white px-6 py-8" key={index}>
                        <div className="w-full h-[30%] mb-2 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-cover" style={{ backgroundImage: `url(${item.img})` }}></div>
                            <div className="ms-3 flex flex-col justify-center">
                                <h1 className="text-xl font-semibold mb-2">{item.name}</h1>
                                <div className="flex text-lg">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>
                            </div>
                        </div>
                        <p className="text-justify">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial