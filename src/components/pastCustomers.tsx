import Link from "next/link";
import Title from "./title";
import Image from "next/image";

export default function PastCustomers() {
  return (
    <div className="flex flex-col gap-6">
      <Title title="Past Customers" />
      <div className="flex justify-center">
        <div className="max-w-[1400px] w-full flex flex-wrap justify-center items-center gap-4 sm:gap-6 xl:gap-12  mx-auto  pt-5">
          {Pastcustomers.map((item, index) => (
            /* <Link
              key={item.id}
              href="#"
              target="_blank"
              className="w-full flex justify-center"
            > */
            <Image
              key={item.id}
              className="opacity-70 w-24 md:w-32 2xl:w-48 max-h-[90px] hover:opacity-100 md:saturate-0 hover:saturate-100 object-contain"
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

const Pastcustomers = [
  {
    id: 1,
    link: "#",
    src: "/images/PastCustomers/PastCustomers-1.png",
  },
  {
    id: 2,
    link: "#",
    src: "/images/PastCustomers/PastCustomers-2.png",
  },
  {
    id: 3,
    link: "#",
    src: "/images/PastCustomers/PastCustomers-3.png",
  },
];
