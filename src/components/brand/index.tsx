"use client"
import { motion } from "framer-motion";
import Peaq from "./peaq";

const BrandsSection = () => {
    return (
        <section className="py-4">
            <div className="flex  overflow-hidden">
                <TranslateWrapper>
                    <LogoItemsTop />
                </TranslateWrapper>
                <TranslateWrapper>
                    <LogoItemsTop />
                </TranslateWrapper>
                <TranslateWrapper>
                    <LogoItemsTop />
                </TranslateWrapper>
            </div>
        </section>
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
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 px-2"
        >
            {children}
        </motion.div>
    );
};



const LogoItemsTop = () => (
    <>
        <Peaq />
        <Peaq />
        <Peaq />
        <Peaq />
        <Peaq />
        <Peaq />
        <Peaq />
        <Peaq />
        <Peaq />
        <Peaq />
    </>
);



export default BrandsSection;