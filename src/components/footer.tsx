import Link from "next/link";
import Logo from "./icon/logo";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-6 md:py-6 xl:py-10">
        <div className="w-full max-w-[1400px] flex flex-col justify-center items-center gap-3 md:gap-6 h-fit   border-white/25 border rounded-[20px] py-4 md:py-6 card-bg z-0 px-3">
          <Link
            href={"/"}
            className=" w-fit font-brando h-12 md:h-14 z-50 flex gap-3 font-semibold items-center text-sm md:text-base 2xl:text-2xl"
          >
            <Logo />
          </Link>
          <p className="text-white  w-full md:w-2/3 2xl:w-[600px] text-center ">
            DATS Web3 Solutions, Inc
          </p>
          <p>8 THE GRN STE D DOVER, DE 19901 USA</p>
          <p>
            <a className="hover:text-orange-400 " href="/privacy-notice">
              Privacy Notice
            </a>
            -
            <a className="hover:text-orange-400" href="/user-agreementu">
              User Agreement
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
