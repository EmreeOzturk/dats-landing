"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import PlusIcon from "./plus-icon";
import useMeasure from "react-use-measure";

const Faqs = () => {
    return (
        <Questions />
    );
};

const Questions = () => {
    return (
        <div className="mx-auto  ">
            <AnimatePresence mode="wait">
                {Object.entries(QUESTIONS).map(([tab, questions]) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.5,
                                ease: "backIn",
                            }}
                            className="space-y-4"
                            key={tab}
                        >
                            {questions.map((q, idx) => (
                                <Question key={idx} {...q} />
                            ))}
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </div>
    );
};

const Question = ({ question, answer }: QuestionType) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className={` transition-colors border-b border-[#2e2e2e]`}
        >
            <button
                onClick={() => setOpen((pv) => !pv)}
                className="flex w-full items-center justify-start gap-4 py-4"
            >
                <motion.span
                    variants={{
                        open: {
                            rotate: "45deg",
                        },
                        closed: {
                            rotate: "0deg",
                        },
                    }}
                    className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center"
                >
                    <PlusIcon />
                </motion.span>
                <span
                    className={`text-left text-lg font-medium text-[#f0f0f0]`} >
                    {question}
                </span>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: open ? height : "0px",
                    marginBottom: open ? "24px" : "0px",
                }}
                className="overflow-hidden ml-14 text-[#f0f0f098]"
            >
                <p ref={ref}>{answer}</p>
            </motion.div>
        </motion.div>
    );
};


type QuestionType = {
    question: string;
    answer: string;
};


const QUESTIONS = {
    "DATS": [
        {
            question: "Can individuals with no blockchain experience participate in DATS?",
            answer:
                "Absolutely. DATS is designed to be user-friendly, enabling anyone to participate regardless of their blockchain knowledge. Simply download our desktop application and follow the setup instructions.",
        },
        {
            question: "How can I begin earning with DATS? ",
            answer:
                "Once you've installed the DATS desktop application, it will automatically engage in DePIN protocols, allowing you to start earning rewards in DATS tokens.",
        },
        {
            question: "What factors influence the amount of rewards I can earn with DATS?",
            answer:
                "Earnings in DATS are influenced by factors like your available resources, demand in DePIN protocols, and prevailing market conditions. We optimize resource allocation to maximize your rewards.",
        },
        {
            question: "Does DATS support older computer system",
            answer:
                "Yes, DATS is designed to run efficiently on a wide range of devices, including older systems, promoting sustainability and inclusivity.",
        },
        {
            question: "What is the process for installing DATS on my computer",
            answer:
                "Detailed installation instructions for DATS are provided based on your device's operating system. You can access these instructions on our website's Download page.",
        },
        {
            question: "How does DATS efficiently use my computer's resources?",
            answer:
                "DATS optimizes your computer's spare resources, such as storage space, internet bandwidth, and CPU power, to support DePIN protocols while minimizing the impact on your device's performance.",
        },
        {
            question: "Is my data secure with DATS?",
            answer:
                "Yes, DATS prioritizes data security and privacy. We implement industry-standard security protocols to safeguard your data and never share it with third parties.",
        },
        {
            question: "Can I earn rewards in DATS tokens by staking them?",
            answer:
                "Yes, participants have the opportunity to earn additional rewards by staking their DATS tokens within the DATS ecosystem.",
        },
        
        {
            question: "What is the economic model behind the DATS token?",
            answer:
                "The DATS token operates on a buyback cycle logic, where revenues from services are used to buy DATS tokens from the market, supporting token value and rewarding users.",
        },
        {
            question: "What should I do if I encounter difficulties during DATS installation?",
            answer:
                "If you face any challenges during installation, ensure your device meets our system requirements. For further assistance, please contact our support team via the 'Contact Us' link on our website.",
        },
    ],
};

export default Faqs;
