import AnimateHeight from "react-animate-height";
import { useState } from "react";

export default function FAQ() {
  const [active, setActive] = useState<string>("0");
  const togglePara = (value: string) => {
    setActive((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  return (
    <div
      id="faq"
      className="flex flex-col gap-6 xl:gap-10 items-center md:h-[800px]"
    >
      <h2>Frequently Asked Questions</h2>
      <p className="text-center w-full xl:w-4/5">
        For any questions you can't find the answer to here, you can visit our
        <span className="text-[#00F79E]"> Telegram</span> and
        <span className="text-[#00F79E]"> Discord</span> communities. Our
        community managers and technical teams are looking forward to answering
        your questions.
      </p>
      <div className="mb-5 flex flex-col md:flex-row gap-3 md:gap-10">
        <div className="flex flex-col gap-3 font-semibold w-full lg:w-1/2">
          {faqs1.map((faq) => (
            <CardFaq
              key={faq.id}
              faq={faq}
              togglePara={togglePara}
              active={active}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3 font-semibold w-full lg:w-1/2">
          {faqs2.map((faq) => (
            <CardFaq
              key={faq.id}
              faq={faq}
              togglePara={togglePara}
              active={active}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
function CardFaq({ faq, togglePara, active }: any) {
  return (
    <div className="border-white/25 text-xs md:text-sm 2xl:text-base text-left  flex flex-col items-center justify-cente font-medium md:font-semibold border bg-[#0D0D0D1A]/10 backdrop-blur-sm rounded-3xl transition-all">
      <button
        type="button"
        className={`p-6 w-full flex text-xl items-center gap-4 md:gap-4 xl:gap-6 text-left min-h-[90px] justify-between text-white-dark  ${
          active === faq.id.toString() ? "!text-primary" : ""
        }`}
        onClick={() => togglePara(faq.id.toString())}
      >
        <span className="leading-relaxed 2xl:leading-7 w-full">
          {faq.question}
        </span>
        <div
          className={` ${
            active === faq.id.toString()
              ? "rotate-180 pl-[1px]"
              : " rotate-0 pl-[1px]"
          } border border-white rounded-full transition-all transform flex justify-center items-center w-7 h-7 xl:w-9 xl:h-9 shrink-0 `}
        >
          {arrow}
        </div>
      </button>
      <div>
        <AnimateHeight
          duration={300}
          height={active === faq.id.toString() ? "auto" : 0}
        >
          <div className="flex flex-col gap-2 p-4 text-white-dark text-[10px] md:text-sm font-normal md:font-medium border-t border-[#d3d3d3]/50 ">
            <span>{faq.answer}</span>
          </div>
        </AnimateHeight>
      </div>
    </div>
  );
}

const arrow = (
  <svg
    className="w-8 h-8"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.95211 19.2209L16.2438 26.5126C16.3825 26.6453 16.546 26.7494 16.725 26.8188C17.0801 26.9647 17.4783 26.9647 17.8334 26.8188C18.0124 26.7494 18.1759 26.6453 18.3146 26.5126L25.6063 19.2209C25.7422 19.0849 25.8501 18.9235 25.9237 18.7459C25.9973 18.5682 26.0352 18.3778 26.0352 18.1855C26.0352 17.7971 25.8809 17.4247 25.6063 17.1501C25.3317 16.8755 24.9592 16.7212 24.5709 16.7212C24.1825 16.7212 23.81 16.8755 23.5354 17.1501L18.7375 21.9626L18.7375 10.8938C18.7375 10.5071 18.5839 10.1361 18.3104 9.86263C18.0369 9.58914 17.666 9.43549 17.2792 9.43549C16.8924 9.43549 16.5215 9.58914 16.248 9.86263C15.9745 10.1361 15.8209 10.5071 15.8209 10.8938L15.8209 21.9626L11.0229 17.1501C10.8874 17.0134 10.7261 16.9049 10.5484 16.8309C10.3707 16.7568 10.18 16.7187 9.98752 16.7187C9.79501 16.7187 9.60439 16.7568 9.42668 16.8309C9.24897 16.9049 9.08768 17.0134 8.95211 17.1501C8.81542 17.2856 8.70693 17.4469 8.63289 17.6247C8.55885 17.8024 8.52073 17.993 8.52073 18.1855C8.52073 18.378 8.55885 18.5686 8.63289 18.7463C8.70693 18.924 8.81542 19.0853 8.95211 19.2209Z"
      fill="white"
    />
  </svg>
);

const faqs2 = [
  {
    id: 6,
    question: "How does DATS efficiently use my computer's resources?",
    answer:
      "DATS optimizes your computer's spare resources, such as storage space, internet bandwidth, and CPU power, to support DePIN protocols while minimizing the impact on your device's performance.",
  },
  {
    id: 7,
    question: "Is my data secure with DATS?",
    answer:
      "Yes, DATS prioritizes data security and privacy. We implement industry-standard security protocols to safeguard your data and never share it with third parties.",
  },
  {
    id: 8,
    question: "Can I earn rewards in DATS tokens by staking them?",
    answer:
      "Yes, participants have the opportunity to earn additional rewards by staking their DATS tokens within the DATS ecosystem.",
  },
  {
    id: 9,
    question: "What is the economic model behind the DATS token?",
    answer:
      "The DATS token operates on a buyback cycle logic, where revenues from services are used to buy DATS tokens from the market, supporting token value and rewarding users.",
  },
  {
    id: 10,
    question:
      "What should I do if I encounter difficulties during DATS installation?",
    answer:
      "If you face any challenges during installation, ensure your device meets our system requirements. For further assistance, please contact our support team via the 'Contact Us' link on our website.",
  },
];
const faqs1 = [
  {
    id: 1,
    question:
      "Can individuals with no blockchain experience participate in DATS?",
    answer:
      "Absolutely. DATS is designed to be user-friendly, enabling anyone to participate regardless of their blockchain knowledge. Simply download our desktop application and follow the setup instructions.",
  },
  {
    id: 2,
    question: "How can I begin earning with DATS?",
    answer:
      "Once you've installed the DATS desktop application, it will automatically engage in DePIN protocols, allowing you to start earning rewards in DATS tokens.",
  },
  {
    id: 3,
    question:
      "What factors influence the amount of rewards I can earn with DATS?",
    answer:
      "Earnings in DATS are influenced by factors like your available resources, demand in DePIN protocols, and prevailing market conditions. We optimize resource allocation to maximize your rewards.",
  },
  {
    id: 4,
    question: "Does DATS support older computer systems?",
    answer:
      "Yes, DATS is designed to run efficiently on a wide range of devices, including older systems, promoting sustainability and inclusivity.",
  },
  {
    id: 5,
    question: "What is the process for installing DATS on my computer?",
    answer:
      "Detailed installation instructions for DATS are provided based on your device's operating system. You can access these instructions on our website's Download page.",
  },
];
