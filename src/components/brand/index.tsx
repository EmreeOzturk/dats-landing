"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const BrandsSection = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden relative  gap-96">
            <div className="w-52 h-20 left-0 bg-gradient-to-r from-black via-black to-transparent z-10 absolute" />
            <div className="w-52 h-20 right-0 bg-gradient-to-l from-black via-black to-transparent z-10 absolute" />
            <TranslateWrapper>
                <LogoItemsTop />
            </TranslateWrapper>
            {/* <TranslateWrapper>
                <LogoItemsTop2 />
            </TranslateWrapper> */}
            {/* <TranslateWrapper>
                <LogoItemsTop />
            </TranslateWrapper> */}
        </div>
    );
};

const TranslateWrapper = ({
    children,
    reverse,
}: {
    children: JSX.Element;
    reverse?: boolean;
}) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "40%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center min-w-fit justify-center gap-12"
        >
            {children}
        </motion.div>
    );
};



const LogoItemsTop = () => (
    <>
        <Image src="/aeroscraper.webp" width={100} height={100} alt="brand1" />
        <Image src="/bilisimvadisi.webp" width={100} height={100} alt="brand1" />
        <Image src="/bnb.webp" width={100} height={100} alt="brand1" />
        <Image src="/castrum.webp" width={100} height={100} alt="brand1" />
        <Image src="/chainagency.webp" width={100} height={100} alt="brand1" />
        <Image src="/codelyzer.webp" width={100} height={100} alt="brand1" />
        <Image src="/coinmuh.webp" width={100} height={100} alt="brand1" />
        <Image src="/coinoxs.webp" width={100} height={100} alt="brand1" />
        <Image src="/cyverse.webp" width={100} height={100} alt="brand1" />
        <Image src="/devium.webp" width={100} height={100} alt="brand1" />
        <Image src="/dndx.webp" width={100} height={100} alt="brand1" />
        <Image src="/eldarune.webp" width={100} height={100} alt="brand1" />
        <Image src="/evox.webp" width={100} height={100} alt="brand1" />
        <Image src="/gami.webp" width={100} height={100} alt="brand1" />
        <Image src="/microsoft.webp" width={100} height={100} alt="brand1" />
        <Image src="/googlecloud.webp" width={100} height={100} alt="brand1" />
        <Image src="/goplus.webp" width={100} height={100} alt="brand1" />
        <Image src="/hooray.webp" width={100} height={100} alt="brand1" />
        <Image src="/iotex.webp" width={100} height={100} alt="brand1" />
        <Image src="/komtera.webp" width={100} height={100} alt="brand1" />
        <Image src="/malwation.webp" width={100} height={100} alt="brand1" />
        <Image src="/manta.webp" width={100} height={100} alt="brand1" />
        <Image src="/metacone.webp" width={100} height={100} alt="brand1" />
        <Image src="/metatrust.webp" width={100} height={100} alt="brand1" />
        <Image src="/midle.webp" width={100} height={100} alt="brand1" />
        <Image src="/nulink.webp" width={100} height={100} alt="brand1" className="mx-6" />
        <Image src="/nvidia.webp" width={100} height={100} alt="brand1" />
        <Image src="/openmoney.webp" width={100} height={100} alt="brand1" />
        <Image src="/parsecure.webp" width={100} height={100} alt="brand1" />
        <Image src="/peaq.webp" width={100} height={100} alt="brand1" />
        <Image src="/peyk.webp" width={100} height={100} alt="brand1" />
        <Image src="/seaswap.webp" width={100} height={100} alt="brand1" />
        <Image src="/shardeum.webp" width={100} height={100} alt="brand1" />
        <Image src="/sociapol.webp" width={100} height={100} alt="brand1" />
        <Image src="/strixeye.webp" width={100} height={100} alt="brand1" />
        <Image src="/trcybersec.webp" width={100} height={100} alt="brand1" />
        <Image src="/xion.webp" width={100} height={100} alt="brand1" />
        <Image src="/zeta.webp" width={100} height={100} alt="brand1" />
    </>
);
const LogoItemsTop2 = () => (
    <>
        <Image src="/aeroscraper.webp" width={100} height={100} alt="brand1" />
        <Image src="/bilisimvadisi.webp" width={100} height={100} alt="brand1" />
        <Image src="/bnb.webp" width={100} height={100} alt="brand1" />
        <Image src="/castrum.webp" width={100} height={100} alt="brand1" />
        <Image src="/chainagency.webp" width={100} height={100} alt="brand1" />
        <Image src="/codelyzer.webp" width={100} height={100} alt="brand1" />
        <Image src="/coinmuh.webp" width={100} height={100} alt="brand1" />
        <Image src="/coinoxs.webp" width={100} height={100} alt="brand1" />
        <Image src="/cyverse.webp" width={100} height={100} alt="brand1" />
        <Image src="/devium.webp" width={100} height={100} alt="brand1" />
        <Image src="/dndx.webp" width={100} height={100} alt="brand1" />
        <Image src="/eldarune.webp" width={100} height={100} alt="brand1" />
        <Image src="/evox.webp" width={100} height={100} alt="brand1" />
        <Image src="/gami.webp" width={100} height={100} alt="brand1" />
        <Image src="/googlecloud.webp" width={100} height={100} alt="brand1" />
    </>
);



export default BrandsSection;