import MainLayout from "@/components/layout/mainLayout";
import Image from "next/image";
import NewButton from "@/components/button";

export default function App() {
  return (
    <MainLayout title="DATS Desktop Software">
      <div className="h-full flex flex-col items-center justify-center text-center gap-4 md:gap-6 pt-10 md:pt-20">
        <h2 className=" text-center  ">DATS Desktop Software </h2>

        <p className="w-full md:w-5/6 max-w-[1200px] text-xs pb-6 md:pb-10 md:text-lg">
          The DATS Desktop Software allows users to easily contribute their
          spare computing power, fully managed and secured by its Proof of
          Resources (PoR) smart contract, negating the need for additional
          server investments. This method efficiently taps into existing digital
          resources, streamlining operations in an innovative way.
        </p>
        <NewButton />
        <img
          className="container pt-6 md:pt-10"
          src="/destop-sofware.png"
          alt=""
        />
        
      </div>
    </MainLayout>
  );
}
