import Link from "next/link";
import { NAVBARMENU } from "@/lib/consts";
import RightArrow from "../common/right-arrow";
const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between ">
            <ul className="flex items-center justify-center gap-10 text-[#f0f0f098] ">
                {NAVBARMENU.map((item) => (
                    <li key={item.id} className="hover:text-white font-normal transition-all">
                        {item.name}
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-center gap-8">
                <button className="bg-white text-black rounded-full font-semibold py-[10px] px-[22px] flex items-center justify-center gap-4">
                    dApps
                    <RightArrow color="black" />
                </button>
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