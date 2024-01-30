import Link from "next/link";
import Title from "./title";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex flex-col gap-6">
      <Title title="Partners" />
      <div className="flex justify-center">
        <div className="max-w-[1400px] w-full flex flex-wrap justify-center items-center gap-4 sm:gap-6 xl:gap-12  mx-auto  pt-5">
          {partners.map((item, index) => (
            /*<Link
              key={item.id}
              href="#"
              target="_blank"
              className="w-fit flex justify-center"
            >*/
            <Image key={item.id}
              className="opacity-70 w-24 md:w-32 2xl:w-48 h-fit hover:opacity-100 md:saturate-0 hover:saturate-100"
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

const partners = [
  {
    id: 1,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-1.png",
  },
  {
    id: 2,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-2.png",
  },
  {
    id: 3,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-3.png",
  },
  {
    id: 4,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-4.png",
  },
  {
    id: 5,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-5.png",
  },
  {
    id: 6,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-6.png",
  },
  {
    id: 7,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-7.png",
  },
  {
    id: 8,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-8.png",
  },
  {
    id: 9,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-9.png",
  },
  {
    id: 10,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-10.png",
  },
  {
    id: 11,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-11.png",
  },
  {
    id: 12,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-12.png",
  },
  {
    id: 13,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-13.png",
  },
  {
    id: 14,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-14.png",
  },
  {
    id: 15,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-15.png",
  },
  {
    id: 16,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-16.png",
  },
  {
    id: 17,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-19.png",
  },
  {
    id: 18,
    link: "#",
    src: "/images/Partners-logo/Partners-logo-18.png",
  },
];
