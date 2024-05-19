import Link from "next/link";
import DropDownSelect from "./tailwind/dropDownSelect";

export default function NewButton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-5 md:gap-6 lg:gap-10 items-center w-full ">
      {buttonData.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col items-center justify-center gap-1 md:gap-3 w-full"
        >
          <p className="text-center text-sm md:text-2xl">{item?.title}</p>
          {item.children ? (
            <DropDownSelect textBtn={item.description} icon={item.svg}>
              <div className="bg-black/90 rounded-b-lg backdrop-blur-sm flex gap-3 flex-col p-4 h-full w-full min-w-40 lg:w-[250px]">
                {item.children.map((child: any) => (
                  <Link
                    href={child ? child.link : item.link}
                    target="_blank"
                    className="w-full  rounded-lg border-white px-2 py-3 border-[1px] text-base md:text-lg font-medium text-white  items-center bg-none text-center flex gap-3 justify-center"
                  >
                    <p className="text-xs md:text-lg">{child.title}</p>
                  </Link>
                ))}
              </div>
            </DropDownSelect>
          ) : (
            <Link
              href={item?.link}
              target="_blank"
              className="w-1/2 md:w-2/3 lg:w-[250px] mt-2 md:mt-5 bg-white/[0.023] rounded-lg backdrop-blur-sm border-white px-2 py-3 border-[1px] text-base md:text-lg font-medium text-white  items-center bg-none text-center flex gap-3 justify-center"
            >
              <p className="text-xs md:text-lg">{item?.description}</p>
              <img
                className={` ${item?.addClass} w-6 h-6 md:w-12 md:h-12`}
                src={item?.svg}
                alt=""
              />
            </Link>
          )}
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
    link: "https://github.com/datsproject/dats-desktop-publish/releases/download/v1.0.9/Dats-Project-Setup-1.0.9.exe",
  },
  {
    id: 2,
    title: "MAC OS",
    children: [
      {
        id: 1,
        title: "MAC OS M Series",
        description: "DOWNLOAD",
        addClass: "md:mb-1.5 -mt-1.5",
        svg: "/images/icons/ic_outline-apple.svg",
        link: "https://github.com/datsproject/dats-desktop-publish/releases/download/v1.0.9/Dats-Project-1.0.9-arm64.dmg",
      },
      {
        id: 2,
        title: "MAC OS X64",
        description: "DOWNLOAD",
        addClass: "md:mb-1.5 -mt-1.5",
        svg: "/images/icons/ic_outline-apple.svg",
        link: "https://github.com/datsproject/dats-desktop-publish/releases/download/v1.0.9/Dats-Project-1.0.9.dmg",
      },
    ],
    description: "DOWNLOAD",
    addClass: "md:mb-1.5 -mt-1.5",
    svg: "/images/icons/ic_outline-apple.svg",
  },
  {
    id: 3,
    title: "LINUX",
    description: "DOWNLOAD",
    addClass: "md:mb-1.5 -mt-1.5",
    svg: "/images/icons/linux.svg",
    children: [
      {
        id: 1,
        title: "DEB",
        description: "DOWNLOAD",
        addClass: "md:mb-1.5 -mt-1.5",
        svg: "/images/icons/ri_ubuntu-fill.svg",
        link: "https://github.com/datsproject/dats-desktop-publish/releases/download/v1.0.9/dats-desktop_1.0.9_amd64.deb",
      },
      {
        id: 2,
        title: "RPM",
        description: "DOWNLOAD",
        addClass: "md:mb-1.5 -mt-1.5",
        svg: "/images/icons/ri_centos-fill.svg",
        link: "https://github.com/datsproject/dats-desktop-publish/releases/download/v1.0.9/dats-desktop-1.0.9.x86_64.rpm",
      },
    ],
  },
];
