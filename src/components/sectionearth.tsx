import { getOS, useBrowserDetect } from "@/helpers/helpers";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function SectionEarth() {
  const [os, setOs] = useState("Windows"); //["Windows", "MacOS", "iOS", "Android", "Linux"
  const [browser, setBrowser] = useState("Chrome"); //["Chrome", "Safari", "Diğer"]
  const [show, setShow] = useState(false);
  useEffect(() => {
    setBrowser(useBrowserDetect());
    setOs(getOS());
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);
  return (
    <>
      <div className="w-full  flex flex-col place-content-center gap-8 md:gap-10 xl:gap-20 justify-center items-center relative h-full">
        {browser === "Chrome" || (os !== "iOS" && os !== "MacOS") ? (
          <video
            className={`absolute hidden md:block invisible md:visible  transition-all -right-[80vh]  h-full w-[100vw] scale-125 z-0`}
            autoPlay
            loop
            muted
            data-loaded="true"
          >
            <source src="earthscroll.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            <div className="absolute w-screen h-screen  left-0 top-0 z-10"></div>
            <div className="w-[100vw] h-[100vh] absolute left-0 top-[15vh] scale-150 hidden md:flex -bottom-[30vh] z-0 lex justify-center items-center ">
              <Spline
                className="flex justify-center w-full h-fit -mr-[80vw] lg:-mr-[60vw] 2xl:-mr-[40vw] items-center "
                scene="https://prod.spline.design/14RWtZimpUlwdEBF/scene.splinecode"
              />
            </div>
          </>
        )}
        <div className="w-full z-10">
          <h1 className="w-full xl:w-9/12 text-left font-semibold text-lg md:text-4xl z-10 ">
            Be part of DePIN community that delivers a secure Web3 experience
            while earning{" "}
            <span className="text-[#00F79E]"> passive income</span> with your
            idle computing resources.
          </h1>
          <h1 className="w-full xl:w-9/12 text-left font-light italic text-lg md:text-4xl z-10 ">
            Simple participation, powerful impact.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 2xl:grid-cols-3 place-content-center !text-center gap-20 w-full z-10">
          <Card
            title="Participants"
            description="Participants contribute to DATS by downloading our app and sharing CPU, GPU, and bandwidth. This creates distributed high power computing. (D-HPC)"
            image="/images/main-icon/team.png"
          />
        </div>

        <div className="grid md:grid-cols-2 2xl:grid-cols-3 place-content-center gap-8 md:gap-10 xl:gap-20 w-full z-10">
          <Card
            title="SaaS Sales"
            description="Thanks to D-HPC, we ensure high-performance operability of the SaaS we develop."
            image="/images/main-icon/service-sales.png"
          />
          <Card
            title="Outcome"
            description="Our community is rewarded with 60% of our high-performing SaaS sales revenue."
            image="/images/main-icon/outcome.png"
          />
        </div>
      </div>
    </>
  );
}

function Card({ title, description, image }: any) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 card-bg border border-white/20 rounded-xl h-fit py-10">
      <div className=" w-40 h-40 md:w-60 md:h-60 flex justify-center items-center rounded-full  ">
        <Image
          width={240}
          height={240}
          className="w-full h-full"
          src={image}
          alt=""
        />{" "}
      </div>

      <div className="min-h-[130px] h-fit md:min-h-[180px] overflow-hidden flex flex-col gap-3 px-3 md:px-5">
        <h4 className="text-xl text-center font-semibold">{title}</h4>
        <p className="text-left md:text-center text-xs sm:text-sm ">
          {description}
        </p>
      </div>
    </div>
  );
}

const sectionearh = [
  {
    id: 1,
    title: "DDOS TEST",
    description:
      "This service allows participants to contribute their internet bandwidth for comprehensive DDOS testing. This approach ensures a more reliable and transparent method for cybersecurity, steering clear of traditional, less dependable services.",
    image: "/images/test.png",
    link: "#",
  },
  {
    id: 2,
    title: "WEB3&WEB2 Threat Intelligence",
    description:
      "Powered by the collective strength of D-HPC and its thousands of contributors, this service involves scanning billions of internet-connected devices. It rapidly generates detailed threat intelligence, elevating cybersecurity standards.",
    image: "/images/test.png",
    link: "#",
  },
  {
    id: 3,
    title: "DApp, Server and Cloud Based Penetration Testing",
    description:
      "Revolutionizing penetration testing for Web3 DApps and servers, this service leverages decentralized computing power for quick, comprehensive vulnerability assessments. It includes detailed reports and an NFT Certificate, all delivered in a significantly reduced timeframe.",
    image: "/images/test.png",
    link: "#",
  },
  {
    id: 4,
    title: "Blockchain Security",
    description:
      "In development, this software aims to robustly protect servers hosting Chains and DApps. By installing on these servers and integrating continuous updates from Web3 Threat Intelligence, it ensures a strong defense for the blockchain infrastructure.",
    image: "/images/test.png",
    link: "#",
  },
  {
    id: 5,
    title: "NFT Certifications",
    description:
      "Utilizing the infrastructure provided by participants, this service delivers advanced cybersecurity solutions. Customers who successfully pass the tests are awarded an NFT Certification, marking their achievement in maintaining strong cybersecurity standards.",
    image: "/images/test.png",
    link: "#",
  },
  {
    id: 6,
    title: "Vulnerability Search Engine",
    description:
      "Enhancing platform security, the Decentralized Vulnerability Search Engine, backed by Web3 Threat Intelligence, enables developers to proactively safeguard their platforms. Subscription access to this intelligence allows for effective defense against vulnerabilities.",
    image: "/images/test.png",
    link: "#",
  },
];
