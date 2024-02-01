import Teams from "@/components/slide/teams";
import Contact from "@/components/contact";
import Partners from "@/components/partners";
import Backers from "@/components/backers";

import { useEffect, useRef, useState } from "react";

import Header from "@/components/header";
import Banner from "@/components/banner";
import About from "@/components/about";
import Services from "@/components/slide/services";
import Investors from "@/components/investors";
import Advisors from "@/components/slide/advisors";
import SectionEarth from "@/components/sectionearth";
import FAQ from "@/components/faq";
import MainLayout from "@/components/layout/mainLayout";

export default function Home() {
  return (
    <MainLayout title="Depin: security, redefined">
      <Banner />
      <About /> 
      <Services />
      <SectionEarth />
      <FAQ />
      <Teams />
      {/* <TeamSlider /> */}
      <Partners />
      <Investors />
      <Backers />
      <Contact />
    </MainLayout>
  );
}
