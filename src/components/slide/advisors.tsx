import React, { useRef, useState } from "react";

import Card from "../card";
import Title from "../title";
import SwiperComp from "./swiperSlideComp";
import { SwiperSlide } from "swiper/react";

export default function Advisors() {
  return (
    <>
      <div id="team" className="w-full max-w-[1400px]">
        <Title title="Advisors" />
        <div className="w-full pt-10 justify-center items-center flex">
        <SwiperComp>
            {advisorsData.map((teamMember, index) => (
              <SwiperSlide
                key={teamMember.id}
                className={` ${index % 2 !== 0 && "md:pt-32"}`}
              >
                <Card data={[teamMember]} />
              </SwiperSlide>
            ))}
          </SwiperComp>
        </div>
      </div>
    </>
  );
}


const advisorsData = [
  {
    id: 1,
    title: "Serkan Bilen",
    description: "Chief Executive Officer",
    image: "/images/serkan-bilen.png",
    link: "#",
  },
  {
    id: 2,
    title: "Anıl ÖZ",
    description: "Chief Technology Officer",
    image: "/images/anil-oz.png",
    link: "#",
  },
  {
    id: 3,
    title: "Caner Topaç",
    description: "Chief Operating Officer",
    image: "/images/caner-topac.png",
    link: "#",
  },
  {
    id: 4,
    title: "Oğuzhan Berker Koçak",
    description: "Chief Marketing Officer",
    image: "/images/oguzhan-berker-kocak.png",
    link: "#",
  },
  {
    id: 5,
    title: "Serkan Bilen",
    description: "Chief Executive Officer",
    image: "/images/serkan-bilen.png",
    link: "#",
  },
  {
    id: 6,
    title: "Serkan Bilen",
    description: "Chief Executive Officer",
    image: "/images/serkan-bilen.png",
    link: "#",
  },
];