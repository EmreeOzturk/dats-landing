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
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
        },
        {
            question: "How can I begin earning with DATS? ",
            answer:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
        },
        {
            question: "What factors influence the amount of rewards I can earn with DATS?",
            answer:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
        },
        {
            question: "Does DATS support older computer system",
            answer:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint tempora quasi eligendi distinctio, mollitia porro repudiandae modi consectetur consequuntur perferendis!",
        },
        {
            question: "What is the process for installing DATS on my computer ",
            answer:
                "Detailed installation instructions for DATS are provided based on your device's operating system. You can access these instructions on our website's Download page.",
        },
    ],
};

export default Faqs;
