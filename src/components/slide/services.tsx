import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperComp from "./swiperSlideComp";

export default function Services() {
  return (
    <div
      id="services"
      className="w-full flex flex-col items-center gap-6 md:gap-12"
    >
      <div className="flex flex-col gap-3 md:gap-6 items-center justify-center w-full md:w-2/3">
        <h2>Resources for Profit Growth</h2>
        <p className="text-center text-xs sm:text-sm md:text-base">
          our resources have set the stage for us to dive into a realm of
          profitable opportunities.
        </p>
      </div>
      <div className="w-full slider pt-0 justify-center items-center flex services">
        <SwiperComp>
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="flex flex-col items-start justify-start pb-4 md:pb-6 pt-2 gap-3 card-bg border border-white/20 rounded-xl h-full px-3 md:px-5">
                <div className="w-full h-fit flex justify-center items-center rounded-full">
                  <Image
                    width={200}
                    height={200}
                    src={service.image}
                    className="h-48 w-fit"
                    alt={service.title}
                  />
                </div>

                <div className="h-fit w-full flex justify-center items-center">
                  <h4 className="text-center font-semibold text-lg h-16">
                    {service.title}
                  </h4>
                  {/*<p className=" text-xs sm:text-sm text-left">
                    {service.description}
          </p>*/}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComp>
      </div>
    </div>
  );
}

const services = [
  {
    id: 1,
    title: "DDOS TEST",
    /* description:
      "This service allows participants to contribute their internet bandwidth for comprehensive DDOS testing. This approach ensures a more reliable and transparent method for cybersecurity, steering clear of traditional, less dependable services.",
    */ image: "/images/main-icon/ddos-attack.png",
    link: "#",
  },
  {
    id: 2,
    title: "Threat Intelligence",
    /*description:
      "Powered by the collective strength of D-HPC and its thousands of contributors, this service involves scanning billions of internet-connected devices. It rapidly generates detailed threat intelligence, elevating cybersecurity standards.",
    */ image: "/images/main-icon/secret.png",
    link: "#",
  },
  {
    id: 3,
    title: "Penetration Testing",
    /* description:
      "Revolutionizing penetration testing for Web3 DApps and servers, this service leverages decentralized computing power for quick, comprehensive vulnerability assessments. It includes detailed reports and an NFT Certificate, all delivered in a significantly reduced timeframe.",
    */ image: "/images/main-icon/shield-and-sword.png",
    link: "#",
  },
  /* {
    id: 4,
    title: "Blockchain Security",
    description:
      "In development, this software aims to robustly protect servers hosting Chains and DApps. By installing on these servers and integrating continuous updates from Web3 Threat Intelligence, it ensures a strong defense for the blockchain infrastructure.",
    image: "/images/main-icon/security.png",
    link: "#",
  }, */
  {
    id: 6,
    title: "Vulnerability Search Engine",
    /*description:
      "Enhancing platform security, the Decentralized Vulnerability Search Engine, backed by Web3 Threat Intelligence, enables developers to proactively safeguard their platforms. Subscription access to this intelligence allows for effective defense against vulnerabilities.",
    */ image: "/images/main-icon/search.png",
    link: "#",
  },
  {
    id: 5,
    title: "Proof of Resources Smart Contract",
    /*description:
      "Utilizing the infrastructure provided by participants, this service delivers advanced cybersecurity solutions. Customers who successfully pass the tests are awarded an NFT Certification, marking their achievement in maintaining strong cybersecurity standards.",
    */ image: "/images/main-icon/paper.png",
    link: "#",
  },
];
