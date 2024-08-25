import Link from "next/link"
import RightArrow from "../common/right-arrow"
import DetailCard from "./detail-card"
import Ticker from "./ticker"

const SomeDetails = () => {
    return (

        <section className="flex flex-col pt-12 items-start gap-9 justify-between h-full max-w-7xl mx-auto pb-32">
            <div className="flex items-center justify-between w-full">
                <div className="flex  items-center justify-center pt-12 w-full">
                    <Ticker />
                </div>
                <div className="flex flex-col  items-start gap-6 justify-center  w-full">
                    <h3 className="text-[14px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#0A2141] to-[#55FFFA] border-[1.5px] border-white/15 rounded-full px-[14px] py-[4px]" >
                        WHY US
                    </h3>
                    <h2 className="font-normal text-[48px] tracking-tight leading-snug">
                        Resources for Profit <br /> Growth
                    </h2>
                    <h3 className="font-normal text-[#f0f0f0bb] text-[18px] tracking-tight leading-loose">
                        Our resources have set the stage for us to dive into a realm of <br /> profitable opportunities.
                    </h3>
                </div>
            </div>
            <div className="flex items-center justify-between w-full pt-32 pl-16">
                <div className="flex flex-col  items-start gap-4 justify-center  w-full">
                    <h2 className="font-normal text-[48px] tracking-tight leading-snug">
                        Download DATS App <br /> to your computer!
                    </h2>
                    {/* <h3 className="font-normal text-[#f0f0f0bb] text-[18px] tracking-tight leading-loose">
                        Why are we doing what we doing and how
                    </h3> */}
                    <Link href="/download">
                        <button className="flex items-center justify-center gap-4 mt-10 bg-[#EAEAEA] text-base text-black font-semibold rounded-full py-[10px] px-[22px] ">
                            Get Started Now <RightArrow color="black" />
                        </button>
                    </Link>
                </div>
                <div className="flex items-center justify-center pt-12 w-full gap-8">
                    <DetailCard kind="revenues" />
                    <DetailCard kind="dats" />
                </div>
            </div>
        </section>
    )
}

export default SomeDetails