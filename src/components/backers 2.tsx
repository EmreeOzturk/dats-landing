import Link from "next/link";
import Title from "./title";
import Image from "next/image";

export default function Backers() {
  return (
    <div className="flex flex-col gap-6">
      <Title title="Backers" />
      <div className="flex justify-center">
        <div className="max-w-[1400px] w-full grid gap-6 justify-center items-center content-center grid-cols-3 md:grid-cols-6 mx-auto  pt-5">
          {backers.map((item, index) => (
            /*  <Link
            key={item.id}
              href="#"
              target="_blank"
              className="w-full flex justify-center"
            > */
            <Image
              className="opacity-70 hover:opacity-100 md:saturate-0 hover:saturate-100"
              src={item.src}
              alt={`Partner Logo ${index + 1}`}
              width={200}
              height={60}
            />
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const backers = [
  {
    id: 1,
    link: "#",
    src: "/images/Backers/Backers-3.png",
  },
  {
    id: 2,
    link: "#",
    src: "/images/Backers/Backers-6.png",
  },
  {
    id: 3,
    link: "#",
    src: "/images/Backers/Backers-5.png",
  },
  {
    id: 4,
    link: "#",
    src: "/images/Backers/Backers-1.png",
  },
  {
    id: 5,
    link: "#",
    src: "/images/Backers/Backers-4.png",
  },
  {
    id: 5,
    link: "#",
    src: "/images/Backers/Backers-2.png",
  },
];
