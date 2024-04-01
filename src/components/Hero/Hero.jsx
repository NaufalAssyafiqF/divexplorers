

import HeroTitle from "./HeroTitle";
function Hero() {
    return (
        <div className="w-full h-[120vh] bg-[url(/dive-hero.jpg)] bg-cover bg-center relative">
            <div className="w-full h-[50vh]"></div>
            <HeroTitle />
            <div className="w-full h-[20%] absolute bottom-0 left-0 bg-gradient-to-t from-[#0F1922]"></div>
        </div>
    )
}

export default Hero