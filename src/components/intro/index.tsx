import RightArrow from "../common/right-arrow"
import Sphere from "./sphere"
const IntroSection = () => {
    return (
        <section className="flex items-center justify-between h-screen max-w-7xl mx-auto ">
            <div className="flex flex-col items-start gap-10 justify-center max-w-xl ">
                <h3 className="text-[14px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#0A2141] to-[#55FFFA] border-[1.5px] border-white/15 rounded-full px-[14px] py-[4px]" >
                    START EARNING TODAY
                </h3>
                <h1 className="font-normal text-[#] text-[83px] tracking-tight leading-[1.04]">
                    Monetize your idle computing power <span className="text-[#2CE1FE]">securely</span>
                </h1>
                <div className="flex items-center justify-between w-full pr-20">
                    <button className="flex items-center justify-center gap-4 bg-[#EAEAEA] text-base text-black font-semibold rounded-full py-[10px] px-[22px] ">
                        Get Started Today <RightArrow color="black" />
                    </button>
                    <h4 className="w-[240px] font-normal text-[#f0f0f0bb] ">
                        A secure Web3 experience <br /> while earning passive income
                    </h4>
                </div>
            </div>
            <div>
                <Sphere />
            </div>
        </section>
    )
}

export default IntroSection

