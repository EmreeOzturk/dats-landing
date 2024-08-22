import { IoLogoWindows } from "react-icons/io";
import { FaLinux, FaApple } from "react-icons/fa";

const DownloadPage = () => {
    return (
        <section className="flex items-center justify-center h-screen max-w-7xl mx-auto relative flex-col">
            <div
                className="absolute top-52 blur-[250px] left-0 w-96 h-52 bg-gradient-to-r from-[#6bfbe8] to-[#0088ff] z-[-1]"
            />

            <div className="absolute bottom-72 blur-[250px] right-0 w-96 h-52 bg-gradient-to-r from-[#5fc4ff] to-[#03a7ee] z-[-1]" />
            <div className='flex items-center justify-center flex-col text-center mx-auto'>
                <h1 className='text-zinc-300 font-bold text-[3.5rem] tracking-wider'>
                    DATS Desktop Software</h1>
                <p className='font-thin text-[1.2rem] text-zinc-300 my-6 '>
                    The DATS Desktop Software allows users to easily contribute their spare computing power, fully managed and secured by its <br /> Proof of Resources (PoR) smart contract, negating the need for additional server investments. This method efficiently taps into <br /> existing digital resources, streamlining operations in an innovative way.
                </p>

                <div className='flex items-center justify-center gap-16 mt-24'>
                    <div className='flex items-center justify-center gap-4 flex-col'>
                        <p className='text-2xl'>Windows</p>
                        <button className="bg-[#EAEAEA] hover:bg-[#ababab] transition-all text-black  rounded-full py-[10px] px-[44px] text-2xl font-thin flex items-center justify-center gap-4">
                            DOWLOAD <IoLogoWindows size={48} />
                        </button>
                    </div>
                    <div className='flex items-center justify-center gap-4 flex-col'>
                        <p className='text-2xl'>mac OS</p>
                        <button className="bg-[#EAEAEA] hover:bg-[#ababab] transition-all text-black  rounded-full py-[10px] px-[44px] text-2xl font-thin flex items-center justify-center gap-4">
                            <span className="mt-1">
                                DOWLOAD
                            </span>
                            <FaApple size={48} />
                        </button>
                    </div>
                    <div className='flex items-center justify-center gap-4 flex-col'>
                        <p className='text-2xl'>Linux</p>
                        <button className="bg-[#EAEAEA] hover:bg-[#ababab] transition-all text-black  rounded-full py-[10px] px-[44px] text-2xl font-thin flex items-center justify-center gap-4">
                            DOWLOAD <FaLinux size={48} />
                        </button>
                    </div>
                </div>
            </div>
            {/* LEADERBOARD */}

            <div>
                <h2 className='text-zinc-300 font-bold text-[3.5rem] tracking-wider'>Leaderboard</h2>
            </div>


        </section>
    )
}

export default DownloadPage