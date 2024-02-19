import MainLayout from "@/components/layout/mainLayout";
import Image from "next/image";
import NewButton from "@/components/button";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState([]);
  const url = "https://report.datsproject.io/leader-board";
  async function fetchData() {
    try {
      //axios
      if (selected === 0) {
        const response = axios.get(`${url}/${
          // now year
          new Date().getFullYear()
        }/${
          // now month
          (new Date().getMonth() + 1).toString().padStart(2, "0")
          //1 conver to 01
        }
      `);
        const data = (await response).data;
        //const data = await response.json();
        console.log(data);
        setData(data);
      }
      if (selected === 1) {
        const response = axios.get(`${url}/all`);
        const data = (await response).data;
        console.log(data);
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [selected]);
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
        {/* <img
          className="container pt-6 md:pt-10"
          src="/destop-sofware.png"
          alt=""
        /> */}
        <h2 className="mt-10">Leaderboard</h2>
        <div className="flex w-full flex-col p-6 gap-6 border border-white/25 card-bg rounded-xl items-center">
          <div className=" w-2/3 border border-white/25 grid grid-cols-2 divide-x rounded-xl">
            {["This Month", "All Time"].map((item, index) => (
              <button
                onClick={() => setSelected(index)}
                key={index}
                className={`p-3 transition-all ${
                  selected === index ? "underline underline-offset-2 " : ""
                } `}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 w-full border-b-2 border-white">
            {["Rank", "Wallet", "Score"].map((item, index) => (
              <div key={index} className="p-3">
                {item}
              </div>
            ))}
          </div>
          <div className=" flex flex-col divide-y w-full -mt-6">
            {data.length > 0 &&
              data.slice(0,10).map((item: any, index) => (
                <div key={index} className="grid grid-cols-3 w-full">
                  <div className="p-3">#{item?.order}</div>
                  <div className="p-3">{item?.address}</div>
                  <div className="p-3">{item?.totalPoint.toFixed(2)}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
