import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import Head from "next/head";
import { useEffect } from "react";

export default function MainLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const titleRender = title ? title + " - DATS Project" : "DATS Project";

  return (
    <>
      <Head>
        <title>{titleRender}</title>
      </Head>
      <main
        className="w-full h-full flex justify-start items-center flex-col max-w-[100vw] overflow-x-hidden text-white bg-cover  pt-16 md:pt-24 gap-20 md:gap-40 px-3 relative"
        style={{
          backgroundImage: 'url("/bg-min.jpg")',
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <div className="max-w-[1400px] w-full min-h-screen flex flex-col gap-20 xl:gap-40 ">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
}
