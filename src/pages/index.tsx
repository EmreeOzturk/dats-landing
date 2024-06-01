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
import LiveOn from "@/components/liveOn";
import PastCustomers from "@/components/pastCustomers";
import BusinessModel from "@/components/BusinessModel";
import Link from "next/link";
import ServicesTwo from "@/components/servicesTwo";

export default function Home() {
  return (
    <MainLayout title="Depin: security, redefined">
      <Banner />
      <ServicesTwo />
      <SectionEarth />
      <BusinessModel />
      <FAQ />

      <Services />

      {/* <Teams /> */}
      {/* <TeamSlider /> */}
      <LiveOn />
      <Partners />
      <Investors />
      <Backers />
      <PastCustomers />
      <Contact />
    </MainLayout>
  );
}
