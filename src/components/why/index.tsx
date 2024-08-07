import Sphere from "./left-sphere"

const WhySection = () => {
    return (
        <section className="flex flex-col items-center justify-between h-full max-w-7xl mx-auto ">
            <div className="flex  items-center justify-between ">
                <div className="w-1/2 flex items-center justify-center">
                    <Sphere />
                </div>
                <div className="flex flex-col items-start gap-6 justify-center max-w-xl  w-1/2">
                    <h3 className="text-[14px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#0A2141] to-[#55FFFA] border-[1.5px] border-white/15 rounded-full px-[14px] py-[4px]" >
                        EARN AND MAKE AN IMPACT
                    </h3>
                    <h2 className="font-normal text-[48px] tracking-tight leading-snug">
                        Simple participation, <br />
                        powerful impact
                    </h2>
                    <h3 className="font-normal text-[#f0f0f0bb] text-[18px] tracking-tight leading-loose">
                        DATS project leverages powerful something and blockchain <br /> technology to provide the service you need XX.
                    </h3>
                    <div className="flex items-start justify-between w-full pt-12 ">
                        <div className="flex flex-col items-start justify-center gap-4">
                            <h4 className="font-semibold">Something about safety</h4>
                            <p className="w-[90%] text-[#f0f0f0bb] leading-[1.8]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-4">
                            <h4 className="font-semibold">Something about empowerment</h4>
                            <p className="w-[90%] text-[#f0f0f0bb] leading-[1.8]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhySection