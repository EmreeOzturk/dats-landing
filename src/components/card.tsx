import Image from "next/image";

export default function Card({
  data,
}: {
  data: {
    id: number | string;
    title: string;
    description: string; // "descrition" yerine "description"
    image: string;
    link: string;
  }[];
}) {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center shadow rounded-lg relative w-full px-3 md:px-6"
        >
          <div className="inline-flex shadow-lg border border-white/25 rounded-full overflow-hidden h-40 w-40 bg-slate-600 z-10">
            <Image width={200} height={200} className="w-full h-full" src={item.image} alt="" />
          </div>
          <div className="flex flex-col h-60 w-full border-white/25 border rounded-[20px] px-4 pb-4 card-bg pt-20 -mt-20 z-0">
            <div className="flex flex-col items-center pt-6 text-white">
              <h1 className="text-xl font-semibold pb-4">{item.title}</h1>
              <p className="text-base pb-4">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {/* target="_blank" ve rel="noopener noreferrer" güvenlik önlemleri için eklenmiştir */}
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6958 2.73438H4.3042C3.4375 2.73438 2.73438 3.4375 2.73438 4.3042V20.6958C2.73438 21.5625 3.4375 22.2656 4.3042 22.2656H20.6958C21.5625 22.2656 22.2656 21.5625 22.2656 20.6958V4.3042C22.2656 3.4375 21.5625 2.73438 20.6958 2.73438ZM20.6958 20.7031C9.76318 20.7007 4.29688 20.6982 4.29688 20.6958C4.29932 9.76318 4.30176 4.29688 4.3042 4.29688C15.2368 4.29932 20.7031 4.30176 20.7031 4.3042C20.7007 15.2368 20.6982 20.7031 20.6958 20.7031ZM5.62988 10.0562H8.52783V19.3774H5.62988V10.0562ZM7.08008 8.78174C8.00537 8.78174 8.75977 8.02979 8.75977 7.10205C8.75977 6.88147 8.71632 6.66305 8.63191 6.45926C8.5475 6.25547 8.42377 6.07031 8.2678 5.91433C8.11182 5.75836 7.92666 5.63463 7.72287 5.55022C7.51908 5.46581 7.30066 5.42236 7.08008 5.42236C6.8595 5.42236 6.64108 5.46581 6.43729 5.55022C6.2335 5.63463 6.04833 5.75836 5.89236 5.91433C5.73639 6.07031 5.61266 6.25547 5.52825 6.45926C5.44384 6.66305 5.40039 6.88147 5.40039 7.10205C5.39795 8.02979 6.1499 8.78174 7.08008 8.78174ZM13.2397 14.7656C13.2397 13.5498 13.4717 12.373 14.978 12.373C16.4624 12.373 16.4844 13.7622 16.4844 14.8438V19.3774H19.3799V14.2651C19.3799 11.7554 18.8379 9.82422 15.9058 9.82422C14.4971 9.82422 13.5522 10.5981 13.1641 11.3306H13.125V10.0562H10.3442V19.3774H13.2397V14.7656Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
