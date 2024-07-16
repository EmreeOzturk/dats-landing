import Link from "next/link";
import { useState } from "react";
import { Link as SLink } from "react-scroll/modules";
import Logo from "./icon/logo";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const [showMobile, setShowMobile] = useState(false);
  const [path, setPath] = useState(pathname);
  const duration: number = 600;
  //scroll 50px down add header bg
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <>
      <header
        className={`w-full backdrop-blur-md bg-white/5 fixed left-0 top-0 flex items-center h-16 md:h-24 py-3 lg:py-5  transition-colors gap-6 justify-center  z-50 border-b-2 border-white/40  ${scroll && !showMobile
          ? "  animate__animated animate__fadeInDown animate__faster lg:shadow-sm"
          : ""
          }`}
      >
        <div className="flex justify-between px-3 lg:px-6 2xl:px-12 w-full h-full container items-center">
          <Link
            href={"/"}
            className=" shrink-0 w-fit font-brando h-full z-50 flex gap-3 font-semibold items-center text-sm md:text-base 2xl:text-2xl"
          >
            <Logo />
          </Link>
          <ul className="flex-col w-fit  hidden lg:flex lg:relative pt-12 lg:pt-0 bottom-0 left-0 items-center justify-start lg:justify-end h-full  lg:h-auto lg:flex-row lg:mt-0 text-xs -mb-2 xl:text-base font-normal  gap-6 2xl:gap-16 transition-all">
            {path === "/"
              ? menu.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-center items-center  shrink-0 w-fit "
                  >
                    {item.link.includes("http") ? (
                      <Link
                        href={item.link}
                        target={"_blank"}
                        className={`flex justify-center items-center py-3  lg:border-0 lg:hover:text-orange-400 transition-colors cursor-pointer text-center w-full font-bold `}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <SLink
                        activeClass="text-orange-400"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={duration}
                        className={`flex justify-center items-center py-3  lg:border-0 lg:hover:text-orange-400 transition-colors cursor-pointer text-center w-full font-bold `}
                      >
                        {item.title}
                      </SLink>
                    )}
                  </li>
                );
              })
              : menu.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-center items-center  shrink-0 w-fit "
                  >
                    <Link
                      href={"/"}
                      className={`flex justify-center items-center py-3 lg:border-0 lg:hover:text-orange-400 transition-colors cursor-pointer text-center w-full font-bold `}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="https://fairdrop.datsproject.io/"
              target="_blank"
              className=" !text-base xl:text-xl font-normal text-black hover:bg-white  transition-colors py-2 px-6 rounded-full bg-yellow-400"
            >
              FairDrop
            </Link>
            <Link
              href="https://dapp.datsproject.io/"
              target="_blank"
              className=" !text-base xl:text-xl font-normal text-black hover:bg-white  transition-colors py-2 px-6 rounded-full bg-[#00E5FF]"
            >
              dApp
            </Link>

            {/* <Link
              href="/download"
              className=" !text-base xl:text-xl font-normal text-[#10151A] hover:bg-white  transition-colors bg-[#12ED74] py-2 px-6 rounded-full"
            >
              Download
            </Link> */}
          </div>
          {showMobile ? (
            <button
              className="block lg:hidden shrink-0"
              onClick={() => setShowMobile(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setShowMobile(true)}
              className="block lg:hidden space-y-[6px] shrink-0"
            >
              <span className="block w-6 h-[3px] md:h-1 bg-gray-100"></span>
              <span className="block w-6 h-[3px] md:h-1 bg-gray-100"></span>
              <span className="block w-6 h-[3px] md:h-1 bg-gray-100"></span>
            </button>
          )}
        </div>
      </header>
      <ul
        className="flex lg:hidden z-40 flex-col fixed  bg-black lg:bg-transparent lg:relative  top-0 left-0 items-center justify-center lg:justify-end  lg:h-auto lg:flex-row lg:mt-0 text-xl font-normal w-full lg:w-1/2 gap-6  transition-all h-screen overflow-y-auto"
        style={{
          transform: showMobile ? "translateX(0)" : "translateX(100%)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {pathname === "/"
          ? menu.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-center items-center  shrink-0 w-fit "
              >
                <SLink
                  onClick={() => setShowMobile(!showMobile)}
                  activeClass="text-orange-400"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={duration}
                  className={`flex justify-center items-center py-0  lg:border-0 lg:hover:text-orange-400 transition-colors cursor-pointer text-center w-full `}
                >
                  {item.title}
                </SLink>
              </li>
            );
          })
          : menu.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-center items-center  shrink-0 w-fit "
              >
                <Link
                  href={`/`}
                  onClick={() => setShowMobile(!showMobile)}
                  className={`flex justify-center items-center py-0  lg:border-0 lg:hover:text-orange-400 transition-colors cursor-pointer text-center w-full `}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        <li>
          <Link
            href="https://fairdrop.datsproject.io/"
            target="_blank"
            className=" !text-base xl:text-xl font-normal  text-black hover:bg-white  transition-colors py-2 px-6 rounded-full bg-yellow-400"
          >
            FairDrop
          </Link>
        </li>
        <li>

          <Link
            href="https://dapp.datsproject.io/"
            target="_blank"
            className="flex h-fit text-base xl:text-xl font-normal text-[#10151A] hover:bg-white  transition-colors py-2 px-6 rounded-full bg-[#00CDE4]"
          >
            dApp
          </Link>
        </li>
        {/* <li>
          <Link
            href="/download"
            className=" flex h-fit text-base xl:text-xl font-normal text-[#10151A] hover:bg-white  transition-colors bg-[#12ED74] py-2 px-6 rounded-full"
          >
            Download
          </Link>
        </li> */}
      </ul>
    </>
  );
}
const menu = [
  {
    id: 1,
    title: "START",
    link: "stepOne",
  },
  {
    id: 2,
    title: "ABOUT",
    link: "bePartOfDepin",
  },
  /* {
    id: 6,
    title: "FAQ",
    link: "faq",
  }, */
  /* {
    id: 3,
    title: "TEAM",
    link: "team",
  }, */

  {
    id: 4,
    title: "DOCUMENT",
    link: "https://gitbook.datsproject.io/",
    target: "_blank",
  },
  {
    id: 5,
    title: "CONTACT",
    link: "contact",
  },
];
