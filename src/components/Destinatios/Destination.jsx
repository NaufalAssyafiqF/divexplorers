import { dataDestinations } from "../../data/data"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow, } from 'swiper/modules';
import { FaChevronRight } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Destination() {
    return (
        <div className="bg-[#0F1922] w-full px-20 pb-11" id="destinations">
            <div className="text-white mb-12">
                <h1 className="text-3xl font-bold mb-2">Destinations</h1>
                <h3 className="text-xl">Explore the Oceans Mysteries</h3>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[Pagination, Navigation, EffectCoverflow]}
                className="mySwiper pb-10"
            >
                <div className="w-full flex">
                    {dataDestinations.map((item, index) => (
                        <SwiperSlide key={index} className="w-[30%] h-[25rem]">
                            <div className="group w-full h-full relative overflow-hidden transition-all ease-in-out">
                                <div className=" w-full h-full bg-cover group-hover:scale-110 duration-700" style={{ backgroundImage: `url(${item.img})` }}></div>
                                <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-black group opacity-0 hover:opacity-100 duration-700">
                                    <div className="w-full h-full flex flex-col justify-end items-center  text-white px-8 pb-5 opacity-0 -translate-y-5 group-hover:opacity-100 hover:translate-y-0 duration-700 cursor-default">
                                        <h1 className="text-3xl font-bold mb-5">{item.title}</h1>
                                        <h3 className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, corporis dicta.</h3>
                                        <button className="w-full py-2 rounded-md border-2 border-white hover:bg-white hover:text-black transition-all ease-in-out duration-300 font-semibold">View detail</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow cursor-pointer">
                        <FaChevronRight className="rotate-180" />
                    </div>
                    <div className="swiper-button-next slider-arrow cursor-pointer">
                        <FaChevronRight />
                    </div>
                </div>
            </Swiper>
        </div>
    )
}

export default Destination