import { useEffect, useRef, useState } from "react";

export default function Banner() {
  const videoRef: any = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
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
      <h1 className="z-10 drop-shadow-md">DePIN & Cyber Security</h1>

      <h4 className="w-full xl:w-2/5 z-10 text-center ">
        We are innovating #DePIN through our developed application and Proof of
        Resource (PoR) smart contract, fortifying Web3 & Web2 against intricate
        cyber threats.
      </h4>
      <video
        ref={videoRef}
        className={`absolute transform transition-all -bottom-[15vh] md:-bottom-[20vh] lg:-bottom-[28vh]  min-h-screen w-[100vw] md:w-[60vw] xl:w-[55vw] scale-150 md:scale-110 xl:scale-110 mx-auto animate__animated animate__fadeIn animate__faster ${
          !showVideo && ""
        } ${showVideo ? "md:opacity-[1]" : "opacity-100"} `}
        autoPlay
        loop
        muted
        playsInline
        data-loaded="true"
        id="video"
      >
        {/* earth2.webm */}
        <source src="/attack05.webm" type="video/webm" />
        <img
          src="/images/earth_3d.png" className="w-full h-full"
          alt="Video oynatılamıyorsa gösterilecek resim"
        ></img>
        Your browser does not support the video tag.
      </video>
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
