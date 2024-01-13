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
            The DATS Project addresses a crucial need in the market by
            pioneering the #DePIN category, specifically targeting Web3
            security. Our innovative desktop application enables individuals to
            allocate system resources seamlessly, eliminating the need for
            additional hardware investments. This is made possible through our
            Proof of Resource smart contract. D-HPC, which we have obtained with
            the micro-scale system resources of our participants, addresses many
            challenges in the field of Web3 security while ensuring the
            unrivaled performance of the Security Audit services we have
            developed. <br /> <br />
            D-HPC allows us to detect security vulnerabilities before they do,
            using the methodology of hackers but with far more system resources
            than they have at their disposal. It also provides resilience
            against complex and sophisticated cyber attacks.
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
