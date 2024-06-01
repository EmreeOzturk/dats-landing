import Link from "next/link";
import Title from "./title";
import Image from "next/image";

export default function LiveOn() {
  return (
    <div className="flex flex-col gap-6">
      <Title title="Live On" />
      <div className="flex justify-center">
        <div className="max-w-[1400px] w-full grid gap-4 md:gap-10 justify-center items-center content-center grid-cols-3 md:grid-cols-5 mx-auto  pt-5">
          {liveon.map((item, index) => (
            /*  <Link
              key={item.id}
              href="#"
              target="_blank"
              className="w-full flex justify-center"
            > */
            <Image
              key={item.id}
              className="opacity-70 hover:opacity-100 md:saturate-0 hover:saturate-100"
              src={item.src}
              alt={`Partner Logo ${index + 1}`}
              width={170}
              height={60}
            />
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const liveon = [
  {
    id: 1,
    link: "#",
    src: "/images/LiveOn/liveon-1.png",
  },
  {
    id: 2,
    link: "#",
    src: "/images/LiveOn/liveon-2.png",
  },
  {
    id: 3,
    link: "#",
    src: "/images/LiveOn/liveon-3.png",
  },

  {
    id: 4,
    link: "#",
    src: "/images/LiveOn/liveon-4.png",
  },
  {
    id: 5,
    link: "#",
    src: "/images/LiveOn/liveon-5.png",
  },
];
