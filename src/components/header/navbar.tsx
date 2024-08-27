import Link from "next/link";
import { NAVBARMENU } from "@/lib/consts";
import RightArrow from "../common/right-arrow";
import PeaqLogo from "./peaq-logo";
const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between z-10 ">
            <ul className="flex items-center justify-center gap-10 text-[#f0f0f098] ">
                {NAVBARMENU.map((item) => (
                    <Link key={item.id} href={item.href}>
                        <li className="hover:text-white font-normal transition-all cursor-pointer">
                            {item.name}
                        </li>
                    </Link>
                ))}
            </ul>

            <div className="flex items-center justify-center ">
                <div className=" bg-gradient-to-l from-[#fff] to-[#2F1D74] 
                    h-0.5 w-20 rounded-lg" />
                <div className="
                   text-zinc-400 font-bold bg-transparent rounded-full
                   shadow-2xl shadow-[#2F1D74]
                    border-l-[#2F1D74] border-r-[#2F1D74] border-t-[#2F1D74] border-b-[#2F1D74]
               px-1 flex items-center justify-center">
                    built on
                    <div className="w-28 h-full flex items-center justify-center px-2">
                        <PeaqLogo />
                        {/* <Example /> */}
                    </div>
                    network
                </div>
                <div className=" bg-gradient-to-r from-[#fff] to-[#2F1D74]  h-0.5 w-20 rounded-lg" />
            </div>

            <div className="flex items-center justify-center gap-8">
                <Link href="https://dapp.datsproject.io/" target="_blank" >
                    <button className="bg-white text-black rounded-full font-semibold py-[10px] px-[22px] flex items-center justify-center gap-4">
                        dApps
                        <RightArrow color="black" />
                    </button>
                </Link>
                <Link href="/download" >
                    <button className="text-white border border-white/15 rounded-full py-[10px] px-[22px] flex items-center justify-center gap-4">
                        Download
                        <RightArrow color="white" />
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar