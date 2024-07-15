import { getOS, useBrowserDetect } from "@/helpers/helpers";
import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Banner() {
  const videoRef: any = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [os, setOs] = useState("Windows"); //["Windows", "MacOS", "iOS", "Android", "Linux"
  const [browser, setBrowser] = useState("Chrome"); //["Chrome", "Safari", "Diğer"]
  // console.log(os);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setBrowser(useBrowserDetect());
    setOs(getOS());
    setTimeout(() => {
      setShow(true);
    }, 500);
    let lastScrollPosition = 100;
    if (typeof window === "undefined") return;
    if (!videoRef.current) return;
    const video: any = videoRef.current;
    //play
    video.play();
    //hızı buradan ayarlıyorsun 1 normal 0.5 yavaş 2 hızlı
    video.playbackRate = 1;
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 200) {
        setShowVideo(false);
        /*  video.currentTime = 0;
        video.pause(); */
      } else {
        setShowVideo(true);
        /* video.play(); */
      }
      lastScrollPosition = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="h-screen w-full flex flex-col items-center gap-6 pt-20 xl:pt-24  relative">
      <h1 className="z-10 drop-shadow-md">
        Start Your DePIN Journey In a Minute
      </h1>

      <h4 className="w-full xl:w-3/5 z-10 text-center ">
        Begin earing points by contributing computer resources to the DATS
        Project!
      </h4>

      <Link
        href="https://fairdrop.datsproject.io/"
        target="_blank"
        className=" !text-base xl:text-xl shadow-2xl shadow-yellow-500/80 font-normal z-20 hover:bg-yellow-600 transition-all cursor-pointer text-black py-2 px-6 rounded-full bg-yellow-400"
      >
        Participate in the 3% FairDrop now!
      </Link>
      {show &&
        (browser === "Chrome" || (os !== "iOS" && os !== "MacOS") ? (
          <video
            ref={videoRef}
            className={`absolute transform transition-all -bottom-[15vh] md:-bottom-[20vh] lg:-bottom-[28vh]  min-h-screen w-[100vw] md:w-[60vw] xl:w-[55vw] scale-150 md:scale-110 xl:scale-110 mx-auto animate__animated animate__fadeIn animate__faster ${!showVideo && ""
              } ${showVideo ? "md:opacity-[1]" : "opacity-100"} `}
            autoPlay
            loop
            muted
            playsInline
            data-loaded="true"
            id="video"
          >
            {/* earth2.webm */}
            <source src="/attack06.webm" type="video/webm" />
            <img
              src="/images/earth_3d.png"
              className="w-full h-full"
              alt="Video oynatılamıyorsa gösterilecek resim"
            ></img>
            Your browser does not support the video tag.
          </video>
        ) : (
          <>
            <div className="absolute w-screen h-screen  left-0 top-0 z-10"></div>
            <div className="w-[100vw] h-[100vh] absolute flex -bottom-[20vh] md:-bottom-[30vh] z-0 lex justify-center items-center animate__animated animate__fadeIn animate__faster">
              <Spline
                className="flex justify-center w-full h-fit  items-center "
                scene="https://prod.spline.design/14RWtZimpUlwdEBF/scene.splinecode"
              />
            </div>
            {/* <div
            className={`absolute transform hidden transition-all -bottom-[35vh] md:-bottom-[20vh] lg:-bottom-[28vh]  min-h-screen w-[90vw]   mx-auto animate__animated animate__fadeIn animate__faster`}
          >
            <img
              src="/images/earth_3d.png"
              className="w-full h-full"
              alt="Video oynatılamıyorsa gösterilecek resim"
            ></img>
          </div> */}
          </>
        ))}
      {/* <video
        ref={videoRef}
        className={`absolute invisible md:visible hidden md:block transform transition-all -bottom-[20vh] md:-bottom-[28vh]  min-h-screen w-[100vw] md:w-[55vw] mx-auto ${
          showVideo && "animate__animated animate__fadeIn animate__faster"
        }`}
        autoPlay
        loop
        muted
        data-loaded="true"
        style={{ opacity: showVideo ? 1 : 0.1 }}
      >
        <source src="earthscroll.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
}
