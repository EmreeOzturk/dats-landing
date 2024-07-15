import Link from "next/link";
import Image from "next/image";

export default function ServicesTwo() {
  return (
    <>
      <div className="grid -mt-24 lg:grid-cols-2 justify-center items-center m-auto lg:w-10/12 p-6 gap-20">
        <div className="card-bg lg:-mt-32  relative text-center min-h-[400px] lg:min-h-[550px] flex flex-col items-center justify-center gap-10 border border-white/20 rounded-xl p-10 lg:p-20">
          <div id="stepOne" className="!bg-[#070214] absolute border border-white/20 rounded-xl px-3 flex items-center left-6 -top-6 h-12">
            Step One
          </div>
          <div className="border rounded-full border-white/20 aspect-square p-6 flex items-center justify-center">
            <Image src="/download-icon.png" width={100} height={150} alt=" " />
          </div>
          <h4>Download the DATS Project desktop app </h4>
          <Link
            href="https://datsproject.io/download"
            className="card-bg border border-white/20 rounded-xl w-full p-3"
          >
            Download desktop app 
          </Link>
        </div>
        <div className="card-bg relative text-center min-h-[400px] lg:min-h-[550px] flex flex-col items-center justify-center gap-10 border border-white/20 rounded-xl p-10 lg:p-20">
          <div className="!bg-[#070214] absolute border border-white/20 rounded-xl px-3 flex items-center left-6 -top-6 h-12">
            Step Two
          </div>
          <div className="border rounded-full border-white/20 aspect-square p-6 flex items-center justify-center">
            <Image src="/laptop-icon.png" width={100} height={150} alt=" " />
          </div>
          <h4>
            Sign in to the DATS desktop app with your Metamask or email address
            (powered by XION)
          </h4>
        </div>
        <div className="card-bg lg:-mt-20 relative text-center min-h-[400px] lg:min-h-[550px] flex flex-col items-center justify-center gap-10 border border-white/20 rounded-xl p-10 lg:p-20">
          <div className="!bg-[#070214] absolute border border-white/20 rounded-xl px-3 flex items-center left-6 -top-6 h-12">
            Step Three
          </div>
          <div className="border rounded-full border-white/20 aspect-square px-5 flex items-center justify-center">
            <Image
              src="/Dats-project-logo.png"
              width={100}
              height={150}
              alt=" "
            />{" "}
          </div>
          <h4>
            Dedicate your computing power resources to DATS Project Internet
            Bandwidth and CPU
          </h4>
        </div>
        <div className="card-bg relative text-center lg:min-h-[550px] min-h-[400px] flex pt-8 flex-col items-center justify-center gap-10 border border-white/20 rounded-xl p-10 lg:p-20">
          <div className="!bg-[#070214] absolute border border-white/20 rounded-xl px-3 flex items-center left-6 -top-6 h-12">
            Step Four
          </div>
          <div className="border rounded-full border-white/20 aspect-square p-6 flex items-center justify-center">
            <Image src="/money-icon.png" width={100} height={150} alt=" " />
          </div>
          <h4>
            Keep it open and enjoy getting free tokens from your resources
          </h4>
        </div>
      </div>
    </>
  );
}
