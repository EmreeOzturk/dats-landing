import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../card";
import Title from "../title";
import SwiperComp from "./swiperSlideComp";

export default function Teams() {
  return (
    <div id="team" className="w-full max-w-[1400px]">
      <Title title="Teams" />

      <div className="w-full pt-10 justify-center items-center flex">
        <SwiperComp>
          {teamData.map((teamMember, index) => (
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
  );
}

const teamData = [
  {
    id: 1,
    title: "Serkan Bilen",
    description: "Chief Executive Officer",
    image: "/images/serkan-bilen.png",
    link: "https://www.linkedin.com/in/serkan-bilen-725453137/",
  },
  {
    id: 2,
    title: "Anıl ÖZ",
    description: "Chief Technology Officer",
    image: "/images/anil-oz.png",
    link: "https://www.linkedin.com/in/aniloz/",
  },
  {
    id: 3,
    title: "Caner Topaç",
    description: "Chief Operating Officer",
    image: "/images/caner-topac.png",
    link: "https://www.linkedin.com/in/caner-topa%C3%A7-75a087138/",
  },
  {
    id: 4,
    title: "Oğuzhan Berker Koçak",
    description: "Chief Marketing Officer",
    image: "/images/oguzhan-berker-kocak.png",
    link: "https://www.linkedin.com/in/oberkerkocak/",
  },
  {
    id: 5,
    title: "Cevdet Babacan",
    description: "Chief Risk Officer",
    image: "/images/cevdet-babacan.png",
    link: "https://www.linkedin.com/in/cevdetbabacan/",
  },
  {
    id: 6,
    title: "Aylin Engin",
    description: "Director of Partnerships",
    image: "/images/aylin-engin.png",
    link: "https://www.linkedin.com/in/aylin-engin-655a548a",
  },
  {
    id: 7,
    title: "Önder Kartal",
    description: "Finance Manager",
    image: "/images/onder-Kartal.png",
    link: "https://www.linkedin.com/in/%C3%B6nder-kartal-229617229/",
  },
];
