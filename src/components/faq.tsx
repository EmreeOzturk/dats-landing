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
      <h2>What Makes Us Different?</h2>
      <p className="text-center w-full xl:w-2/3">
        The DATS Project is a unique SaaS platform, forging powerful connections
        between individual contributors and enterprises. It's a space where
        participants earn revenue and businesses access affordable, top-tier
        cybersecurity solutions.
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
        className={`p-4 w-full flex items-center gap-4 md:gap-4 xl:gap-6 text-left min-h-[90px] justify-between text-white-dark  ${
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
    id: 5,
    question:
      "Eliminating the need of gray services usage when purchasing cyber security services.",
    answer:
      "The availability of comprehensive DDOS Test services means customers no longer have to lean on the uncertain gray market for their cybersecurity needs. This move brings a safer, more ethical path to getting high-quality cybersecurity, offering peace of mind and reliable solutions away from the gray market's risks.",
  },
  {
    id: 6,
    question:
      "You can scan billions of devices connected to the Internet very quickly.",
    answer:
      "The DATS Project's Cyber Security Service, powered by its extensive computing capabilities, can quickly scan billions of devices connected to the Internet globally. This service, fueled by participant-contributed resources, allows for the swift identification of vulnerabilities. Customers are promptly informed by DATS about any detected issues, with regular scanning intervals. This efficient process provides customers with a proactive edge in staying ahead of cyber threats.",
  },
  {
    id: 7,
    question:
      "The fully on-chain system design allows us to provide evidence and transparency in our services.",
    answer:
      "The resources contributed by participants to the system are meticulously recorded on the blockchain, enabling the provision of concrete proof. Customers have the flexibility to purchase computing power as needed, with the ability to review data directly on the blockchain. This approach ensures a high level of transparency in the services offered, fostering trust and clarity in every transaction.",
  },
  {
    id: 8,
    question:
      "Setting itself apart by repurposing idle computing power for cybersecurity, it also promotes eco-friendliness.",
    answer:
      "By redirecting idle computing power towards cybersecurity needs, this approach not only enhances digital protection but also contributes to environmental sustainability. Instead of requiring additional energy and resources for new infrastructure, it optimizes existing computing capacities, reducing the overall carbon footprint and promoting a greener approach in the tech industry.",
  },
];
const faqs1 = [
  {
    id: 1,
    question:
      "The first Share-to-Earn based decentralized computing power marketplace focusing on the cyber security area.",
    answer:
      "Participants are rewarded when the system resources they offer are utilized in cybersecurity services that are subsequently sold. The extent of their rewards is carefully determined by the level and frequency of their resource usage in these services, ensuring a fair and accurate distribution of rewards in line with professional standards.",
  },
  {
    id: 2,
    question:
      "The need for whitelists is eliminated in penetration testing services.",
    answer:
      "Traditional penetration testing often involves getting whitelists from the target's security, but this isn't enough against cybercriminals who attack with a massive number of resources. The DATS Project changes the game by using tens of thousands of sources for its Penetration Testing Service, way more than what cybercriminals typically use. This means you can spot and fix security weaknesses much sooner, staying one step ahead of potential threats.",
  },
  {
    id: 3,
    question:
      "High computing power experience without huge investment cost (for all services).",
    answer:
      "By pooling the system resources of its participants, the DATS Project creates a powerful computing environment. This setup offers you the chance to use high-end cybersecurity services on a flexible pay-as-you-use basis, avoiding the heavy costs of investment, maintenance, and operation usually required for such advanced computing power.",
  },
  {
    id: 4,
    question:
      "It allows us to expand into different business areas that need high computing power.",
    answer:
      "The collective computing power contributed by participants enables the DATS Project to extend its services into various high-demand computing industries. This growth not only diversifies the range of services but also increases the potential for greater earnings for both participants and the DATS Project.",
  },
];
