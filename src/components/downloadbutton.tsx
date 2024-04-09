import Link from "next/link";
import DropDownSelect from "./tailwind/dropDownSelect";

export default function NewButtonTwo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-5 md:gap-6 lg:gap-10 items-center w-full ">
      {buttonData.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col items-center justify-center gap-1 md:gap-3 w-full"
        >
          <p className="text-center text-sm md:text-2xl">{item?.title}</p>
          <Link
            href={item?.link}
            target="_blank"
            className="w-1/2 md:w-2/3 lg:w-[250px] mt-2 md:mt-5 bg-white/[0.023] rounded-lg backdrop-blur-sm border-white px-2 py-3 border-[1px] text-base md:text-lg font-medium text-white  items-center bg-none text-center flex gap-3 justify-center"
          >
            <p className="text-xs md:text-lg">{item?.description}</p>
            <img
              className={` ${item} w-6 h-6 md:w-12 md:h-12`}
              src={item?.svg}
              alt=""
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

const buttonData = [
  {
    id: 1,
    title: "Windows",
    description: "DOWNLOAD",
    svg: "/images/icons/ri_windows-fill2.svg",
    link: "https://github.com/datsproject/dats-desktop-xion-publish/releases/download/v1.0.1/Dats-Project---Xion-Setup-1.0.1.exe",
  },
  {
    id: 1,
    title: "MAC OS Arm64",
    description: "DOWNLOAD",
    svg: "/images/icons/ic_outline-apple.svg",
    link: "https://github.com/datsproject/dats-desktop-xion-publish/releases/download/v1.0.1/Dats-Project---Xion-1.0.1-arm64.dmg",
  },
  {
    id: 1,
    title: "MacOS x64",
    description: "DOWNLOAD",
    svg: "/images/icons/ic_outline-apple.svg",
    link: "https://github.com/datsproject/dats-desktop-xion-publish/releases/download/v1.0.1/Dats-Project---Xion-1.0.1.dmg",
  },
];
