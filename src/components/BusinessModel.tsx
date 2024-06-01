import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BusinessModel() {
  return (
    <div
      id="services"
      className="w-full flex flex-col items-center gap-6 md:gap-12"
    >
      <div className="flex flex-col gap-3 md:gap-6 items-center justify-center w-full md:w-2/3">
        <h2>Business Model</h2>
        <p className="text-center text-xs sm:text-sm md:text-base">
          Participants in our program will share a full 60% of the DATS Project
          earnings through the business model you'll see below!
        </p>
      </div>
      <div className="flex flex-col w-full border-white/25 border rounded-[20px] px-4 pb-4 card-bg pt-20 ">
        <div className="w-full h-fit flex justify-center items-center rounded-full">
          <Image
            src="/business-model.svg"
            className="w-2/3 md:w-1/2 hidden lg:block lg:w-5/6 h-fit"
            width={100}
            height={100}
            alt=" "
          />
          <Image
            src="/businessmodel-mobil.svg"
            className="w-full lg:hidden lg:w-5/6 h-fit"
            width={100}
            height={100}
            alt=" "
          />
        </div>
      </div>
    </div>
  );
}
