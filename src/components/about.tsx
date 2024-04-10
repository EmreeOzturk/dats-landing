import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className=" w-full flex-col flex lg:flex-row gap-6 lg:gap-10 border border-white/20 card-bg -mt-60 rounded-2xl py-6 sm:py-10 lg:py-14 px-3 sm:px-6 lg:px-12 items-center"
    >
      <div className="h-full flex flex-col items-center justify-center gap-6 w-full lg:w-2/3 ">
        <div className="w-full">
          <h2 className="text-xl lg:text-3xl xxl:text-[45px] pb-3 lg:pb-6 text-left w-full leading-relaxed ">
            Cyber Security Innovation with DePIN
          </h2>
          <p className="text-xs sm:text-sm lg:text-base font-normal ">
            Installing the DATS Desktop software is much simpler than installing
            a game on your computer. By logging into the DePIN software of DATS
            with Metamask or your email address, you can allocate your system
            resources for DATS and start earning $DATS by logging into DePIN.
            <br /> <br />
            Moreover, thanks to our developed Proof of Resource smart contract,
            you become the rightful owner of the system resources you allocate
            for DATS and can track all transactions transparently. Furthermore,
            there is no need for additional hardware investment or renting
            virtual servers from cloud providers to join DATS and DePIN. You can
            easily join DePIN with just a few mouse clicks without getting
            bogged down in technical matters.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full lg:w-1/3">
        <Image
          src="/images/solutions.svg"
          className="w-2/3 md:w-1/2 lg:w-5/6 h-fit"
          width={100}
          height={100}
          alt=" "
        />
      </div>
    </div>
  );
}
