"use client"
import { motion } from "framer-motion";
import Peaq from "./peaq";
import GoPlus from "./go-plus";
import Iotex from "./iotex";
import Nulink from "./nulink";
import BnbChain from "./bnb-chain";
import Coinbase from "./coinbase";
import Crypto from "./crypto";
import Kr1 from "./kr1";
import Hypersphere from "./hypersphere";
import Stratos from "./stratos";
const BrandsSection = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden relative ">
            <div className="w-52 h-20 left-0 bg-gradient-to-r from-black via-black to-transparent z-10 absolute" />
            <div className="w-52 h-20 right-0 bg-gradient-to-l from-black via-black to-transparent z-10 absolute" />
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
            className="flex items-center justify-center gap-12"
        >
            {children}
        </motion.div>
    );
};



const LogoItemsTop = () => (
    <>
        <Peaq />
        <GoPlus />
        <Iotex />
        <Nulink />
        <BnbChain />
        <Coinbase />
        <Crypto />
        <Kr1 />
        <Hypersphere />
        <Stratos />
    </>
);



export default BrandsSection;