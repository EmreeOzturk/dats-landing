import MainLayout from "@/components/layout/mainLayout";
import Image from "next/image";
import NewButton from "@/components/button";
import { useEffect, useState } from "react";
import axios from "axios";
import NewButtonTwo from "@/components/downloadbutton";

export default function App() {
  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData]: any = useState([]);
  const url = "https://report.datsproject.io/leader-board";
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  async function fetchData() {
    setLoading(true);
    setData([]);
    try {
      let getLocation = await fetch("/api/get-geo");
      let location = await getLocation.json();
      console.log(location);

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
        setData(data);
        setTotalPage(data.length / 20);
      }
      if (selected === 1) {
        const response = axios.get(`${url}/all`);
        const data = (await response).data;
        console.log(data);
        setData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  function formatCoordinates(data: string) {
    if (!data) return "emty";
    // Veriyi virgülle ayırarak ikiye böleriz
    const [latitude, longitude] = data.split(";");

    // Koordinatları virgülle birleştiririz ve ondalık kısmını 2 basamağa yuvarlarız
    const formattedData =
      latitude && latitude !== "null"
        ? `${parseFloat(latitude).toFixed(2)};${parseFloat(longitude).toFixed(
            2
          )}`
        : "emty";

    return formattedData;
  }
  useEffect(() => {
    fetchData();
  }, [selected]);
  return (
    <MainLayout title="DATS Desktop Software">
      <div className="h-full flex flex-col items-center justify-center text-center gap-4 md:gap-6 pt-10 md:pt-20 w-full max-w-[100vw]">
        <h2 className=" text-center  ">DATS Desktop Software </h2>

        <p className="w-full md:w-5/6 max-w-[1200px] text-xs pb-6 md:pb-10 md:text-lg">
          The DATS Desktop Software allows users to easily contribute their
          spare computing power, fully managed and secured by its Proof of
          Resources (PoR) smart contract, negating the need for additional
          server investments. This method efficiently taps into existing digital
          resources, streamlining operations in an innovative way.
        </p>
        <NewButton />

        {/* <div className="h-full flex flex-col items-center justify-center text-center py-10 md:pt-20 w-full max-w-[100vw]">
          <img className="w-20" src="/images/xion-logo-white.png" alt="" />
          <p className="w-full pt-5 md:w-5/6 max-w-[1200px] text-xs pb-6 md:pb-10 md:text-lg">
            Start earning $DATS by registering with your email on Xion!
          </p>
          <NewButtonTwo />
        </div> */}
        {/* <img
          className="container pt-6 md:pt-10"
          src="/destop-sofware.png"
          alt=""
        /> */}
        <h2 className=" mt-6 lg:mt-10">Leaderboard</h2>

        <div className="flex w-full flex-col min-h-screen pb-20 p-6 gap-6 border border-white/25 card-bg rounded-xl items-center relative">
          <div className=" w-full lg:w-2/3 border border-white/25 grid grid-cols-2 divide-x rounded-xl">
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
          <div className=" overflow-x-auto w-full">
            <div className="w-[800px] md:w-full flex flex-col gap-6">
              <div className="grid grid-cols-12  w-full border-b-2 border-white">
                {[
                  "Rank",
                  "Wallet",
                  "Score",
                  "Resources",
                  "Cpu",
                  "Bandwith",
                  "Location",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 first:col-span-1  ${
                      item === "Cpu" ? "col-span-1" : "col-span-2"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className=" flex flex-col divide-y justify-between h-full w-full -mt-6">
                {loading && (
                  <div className="w-full h-full mt-3 flex justify-center items-center">
                    Loading...
                  </div>
                )}
                {data.length > 0 &&
                  data
                    .slice(page * 20, 20 * (page + 1))
                    .map((item: any, index: number) => (
                      <div
                        key={index}
                        className="grid grid-cols-12 items-center w-full text-xs lg:text-sm"
                      >
                        <div className="p-3 col-span-1 ">#{item?.order}</div>
                        <div className="p-3 col-span-2">
                          {item?.address.slice(0, 6) +
                            "..." +
                            item?.address.slice(-6)}
                        </div>
                        <div className="p-3 col-span-2">
                          {item?.totalPoint.toFixed(2)}
                        </div>
                        <div className="p-3 col-span-2">
                          {item?.assignedResourceCount}
                        </div>
                        <div className="p-3 col-span-1">
                          {item?.assignedCpuCount}
                        </div>
                        <div className="p-3 col-span-2">
                          {item?.assignedBandwith}
                        </div>
                        <div className="p-3 col-span-2">{item.lastCountry}</div>
                      </div>
                    ))}
                {data.length > 0 && (
                  <div className="grid grid-cols-12 font-medium text-sm 2xl:text-base">
                    <div className="p-3 col-span-1 ">Total:</div>
                    <div className="p-3 col-span-2"></div>
                    <div className="p-3 col-span-2"></div>
                    <div className="p-3 col-span-2">
                      {data.reduce(
                        (acc: number, item: any) =>
                          acc + item.assignedResourceCount,
                        0
                      )}
                    </div>
                    <div className="p-3 col-span-1">
                      {data.reduce(
                        (acc: number, item: any) => acc + item.assignedCpuCount,
                        0
                      )}{" "}
                      CPU
                    </div>
                    <div className="p-3 col-span-2">
                      {data.reduce(
                        (acc: number, item: any) => acc + item.assignedBandwith,
                        0
                      )}{" "}
                      Bandwith
                    </div>
                    <div className="p-3 col-span-2"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center w-full h-20  bottom-0 left-0 pb-3 px-6 absolute">
              <button
                onClick={() => {
                  if (page > 0) {
                    setPage(page - 1);
                  }
                }}
                className="p-3 border border-white/25 rounded-lg"
              >
                Prev
              </button>
              {page + 1} of {Math.ceil(totalPage)}
              <button
                onClick={() => {
                  if (page + 1 < totalPage) {
                    setPage(page + 1);
                  }
                }}
                className="p-3 border border-white/25 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
