import { CiMail } from "react-icons/ci";
function Contactus() {
    return (
        <div className="bg-[url(/dive-contactus.png)] bg-cover w-full h-[40vh] flex px-20 justify-between items-center" >
            <div className="text-white w-[40%]">
                <h1 className="text-3xl font-bold">Contact us</h1>
                <h3 className="text-xl">Dont hesitate to get in touch with us!</h3>
            </div>

            <div className="w-[40%] h-[20%] flex backdrop-blur-md bg-white/10 rounded-md py-2 justify-center items-center px-2">
                <div className="relative w-[70%] h-full">
                    <input type="text" placeholder="youremail@domain.com" className="w-full h-full bg-transparent text-white placeholder-white pl-10" />
                    <span className="absolute left-3 top-1/2 transform -translate-y-[40%]">
                        <CiMail className="text-white text-2xl" />
                    </span>
                </div>
                <button className="w-[30%] h-full bg-black text-white rounded-md ms-2">Send</button>
            </div>
        </div>
    )
}

export default Contactus