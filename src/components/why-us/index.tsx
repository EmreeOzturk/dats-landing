import Image from "next/image"
import Illustration from "./illustration"

const WhyUsSection = () => {
    return (
        <section className="flex pt-12 flex-col items-center justify-between h-full max-w-7xl mx-auto pb-12">
            <div className="flex  items-center justify-between ">
                <div className="flex flex-col items-start gap-6 justify-center max-w-xl  w-1/2">
                    <h3 className="text-[14px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#0A2141] to-[#55FFFA] border-[1.5px] border-white/15 rounded-full px-[14px] py-[4px]" >
                        CYBER SECURITY
                    </h3>
                    <h2 className="font-normal text-[48px] tracking-tight leading-snug">
                        We are the absolute best <br /> cybersecurity project
                    </h2>
                    <h3 className="font-normal text-[#f0f0f0bb] text-[18px] tracking-tight leading-loose">
                        Describe here why are you the best cyber security project in <br /> the entire space
                    </h3>
                    <div className="flex items-start justify-between w-full pt-12 ">
                        <div className="flex flex-col items-start justify-center gap-4">
                            <h4 className="font-semibold">Reason one</h4>
                            <p className="w-[90%] text-[#f0f0f0bb] leading-[1.8]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-4">
                            <h4 className="font-semibold">Reason two</h4>
                            <p className="w-[90%] text-[#f0f0f0bb] leading-[1.8]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex items-start justify-start">
                    <Illustration />
                </div>
            </div>
        </section>
    )
}

export default WhyUsSection