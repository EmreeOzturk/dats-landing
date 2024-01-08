export default function NewButton() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center w-full ">
      {buttonData.map((item) => (
        <div
          key={item?.id}
          className="flex flex-col items-center justify-center gap-3 w-full"
        >
          <p className="text-center text-sm md:text-2xl">
            {item?.title}
          </p>

          <button className="w-2/3 md:w-[250px] mt-2 md:mt-5 bg-white/[0.023] rounded-lg backdrop-blur-sm border-white px-2 py-3 border-[1px] text-base md:text-lg font-medium text-white  items-center bg-none text-center flex gap-3 justify-center">
            <p className="text-xs md:text-lg">
              {item?.description}
            </p>
            <img className="w-8 h-8 md:w-12 md:h-12" src={item?.svg} alt="" />
          </button>
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
    link: "#",
  },
  {
    id: 2,
    title: "MAC OS M Series Chip",
    description: "DOWNLOAD",
    svg: "/images/icons/ic_outline-apple.svg",
    link: "#",
  },
  {
    id: 3,
    title: "MAC OS Intel Chip",
    description: "DOWNLOAD",
    svg: "/images/icons/ic_outline-apple.svg",
    link: "#",
  },
];
