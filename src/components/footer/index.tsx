import { FaXTwitter, FaTelegram, FaMedium, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Logo from "../header/logo";
const Footer = () => {
    return (
        <section className="flex flex-col  items-center justify-between gap-6 overflow-hidden max-w-7xl mx-auto pt-32 pb-12">
            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 flex items-start justify-start gap-60">
                    <div className="flex flex-col  items-start justify-center">
                        <h5 className="text-[#f0f0f098]">QUICK LINKS</h5>
                        <div className="flex flex-col items-start justify-start gap-4 mt-12">
                            <h6>How it works</h6>
                            <h6>About DATS</h6>
                            <h6>FAQ</h6>
                            <h6>Get in touch</h6>
                        </div>
                    </div>
                    <div className="flex flex-col  items-start justify-center">
                        <h5 className="text-[#f0f0f098]">LEGAL</h5>
                        <div className="flex flex-col items-start justify-start gap-4 mt-12">
                            <h6>Privacy Policy</h6>
                            <h6>User Agreement</h6>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex items-start justify-end">
                    <div className="flex flex-col items-start justify-center w-3/5">
                        <h5 className="text-[#f0f0f098]">STAY UP TO DATE</h5>
                        <div className="flex flex-col items-start justify-start gap-4 w-full mt-12">
                            <div className="flex items-center justify-start gap-4 w-full">
                                <FaXTwitter size={22} />
                                <MdOutlineMail size={22} />
                                <FaTelegram size={22} />
                                <FiGithub size={22} />
                                <FaMedium size={22} />
                                <FaLinkedinIn size={22} />
                                <FaDiscord size={22} />
                            </div>
                            <input type="email" placeholder="Enter email" className="w-full bg-[#1e1e1e] text-[#f0f0f0] rounded-xl py-4 px-6" />
                            <button className="flex items-center justify-center w-full gap-4 mt-4 bg-[#EAEAEA] text-base text-black font-semibold rounded-full py-[10px] px-[22px] ">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-between items-center mt-20">
                <Logo />
                <div className="flex items-center justify-center flex-col">
                    <p className="text-[#f0f0f0bb] text-sm">©2024 DATS Web3 Solutions, Inc.</p>
                    <p className="text-[#f0f0f0bb] text-sm">8 THE GRN STE D DOVER, DE 19901</p>
                </div>
            </div>
        </section >
    )
}

export default Footer