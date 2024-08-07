import SectionBG from "./section-bg"
// bg-[url('/bg.png')] bg-cover bg-right bg-no-repeat
const FinalCTA = () => {
    return (
        <section className="flex items-center justify-center relative  ">
            <div className="-z-10">
                <SectionBG />
            </div>
            <div className="absolute  bottom-32 cursor-pointer opacity-0  w-2/5 mx-auto h-24">
                butasdasd
            </div>
            {/* <div>
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <h3 className="text-[14px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#0A2141] to-[#55FFFA] border-[1.5px] border-white/15 rounded-full px-[14px] py-[4px]" >
                        DATS OFFER THIS AND THAT
                    </h3>
                    <h2 className="font-normal text-[48px] tracking-tight leading-snug text-white">
                        Start earning today
                    </h2>
                    <h3 className="font-normal text-[#f0f0f0bb] text-[18px] tracking-tight leading-loose text-white">
                    Some text here telling users why it would make sense for <br /> them to download and why now 
                    </h3>
                    <button className="flex w-5/6 items-center justify-center gap-4 mt-10 bg-[#EAEAEA] text-base text-black font-semibold rounded-full py-[10px] px-[22px] ">
                         Download
                    </button>
                </div>
            </div> */}
        </section>
    )
}

export default FinalCTA