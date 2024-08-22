import { IoLogoWindows } from "react-icons/io";
import { FaLinux, FaApple, FaChevronDown } from "react-icons/fa";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import Leaderboard from "@/components/download/leaderboard-server";
import { Suspense } from "react";
import Spinner from "@/components/download/loading-spinner";
const DownloadPage = () => {
    return (
        <section className="flex items-center justify-center pt-52  max-w-7xl mx-auto relative flex-col">
            <div className="absolute top-52 blur-[250px] left-0 w-96 h-52 bg-gradient-to-r from-[#6bfbe8] to-[#0088ff] z-[-1]" />
            <div className="absolute bottom-72 blur-[250px] right-0 w-96 h-52 bg-gradient-to-r from-[#5fc4ff] to-[#03a7ee] z-[-1]" />
            <div className="absolute top-72 blur-[250px] right-0 w-96 h-52 bg-gradient-to-r from-[#5fc4ff] to-[#03a7ee] z-[-1]" />
            <div className="absolute bottom-20 blur-[250px] left-0 w-96 h-52 bg-gradient-to-r from-[#5fc4ff] to-[#03a7ee] z-[-1]" />
            <div className='flex items-center justify-center flex-col text-center mx-auto'>
                <h1 className='text-zinc-300 font-bold text-[3.5rem] tracking-wider'>
                    DATS Desktop Software</h1>
                <p className='font-thin text-[1.2rem] text-zinc-300 my-6 '>
                    The DATS Desktop Software allows users to easily contribute their spare computing power, fully managed and secured by its <br /> Proof of Resources (PoR) smart contract, negating the need for additional server investments. This method efficiently taps into <br /> existing digital resources, streamlining operations in an innovative way.
                </p>
                <div className='flex items-center justify-center gap-16 mt-12'>
                    <div className='flex items-center justify-center gap-4 flex-col'>
                        <p className='text-2xl'>Windows</p>
                        <Link href="https://dl.datsproject.io/evm-windows" target="_blank" referrerPolicy="no-referrer" >
                            <button className="bg-[#EAEAEA] hover:bg-[#ababab] transition-all text-black  rounded-full py-[10px] px-[44px] text-2xl font-thin flex items-center justify-center gap-4">
                                DOWLOAD <IoLogoWindows size={48} />
                            </button>
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-4 flex-col'>
                        <p className='text-2xl'>mac OS</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="bg-[#EAEAEA] hover:bg-[#ababab] transition-all text-black  rounded-full py-[10px] px-[44px] text-2xl font-thin flex items-center justify-center gap-4">
                                    <span className="mt-1">
                                        DOWLOAD
                                    </span>
                                    <FaApple size={48} />
                                    <FaChevronDown size={20} />
                                </button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-72">
                                <Link href="https://dl.datsproject.io/evm-macos-arm" target="_blank" referrerPolicy="no-referrer" >
                                    <DropdownMenuItem className="flex items-center justify-center gap-1">
                                        <FaApple size={24} />
                                        <span className="text-xl">MAC OS M Series</span>
                                    </DropdownMenuItem>
                                </Link>

                                <Link href="https://dl.datsproject.io/evm-macos-intel" target="_blank" referrerPolicy="no-referrer" >
                                    <DropdownMenuItem className="flex items-center justify-center gap-1">
                                        <FaApple size={24} />
                                        <span className="text-xl">MAC OS X64</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='flex items-center justify-center gap-4 flex-col'>
                        <p className='text-2xl'>Linux</p>
                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <button className="bg-[#EAEAEA] hover:bg-[#ababab] transition-all text-black  rounded-full py-[10px] px-[44px] text-2xl font-thin flex items-center justify-center gap-4">
                                    DOWLOAD <FaLinux size={48} />
                                    <FaChevronDown size={20} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-72">
                                <Link href="https://dl.datsproject.io/evm-linux-deb" target="_blank" referrerPolicy="no-referrer" >
                                    <DropdownMenuItem className="flex items-center justify-center gap-1">
                                        <FaLinux size={24} />
                                        <span className="text-xl">DEB</span>
                                    </DropdownMenuItem>
                                </Link>

                                <Link href="https://dl.datsproject.io/evm-linux-rpm" target="_blank" referrerPolicy="no-referrer" >
                                    <DropdownMenuItem className="flex items-center justify-center gap-1">
                                        <FaLinux size={24} />
                                        <span className="text-xl">RPM</span>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </div>

            <Suspense fallback={<Spinner />}>
                <Leaderboard />
            </Suspense>
        </section>
    )
}

export default DownloadPage