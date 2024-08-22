"use client";
import { motion } from "framer-motion"
import { useLeaderBoardStore } from "@/store/useLeaderBoardStore";
const LeaderboardButtons = () => {
    const setSelected = useLeaderBoardStore(state => state.setSelected)
    const selected = useLeaderBoardStore(state => state.selected)
    return (
        <div className="flex items-center justify-center gap-44 py-6">
            <div className="relative">
                {
                    selected === "This Month" && <motion.span
                        layoutId="underline"
                        className="w-full absolute h-1 bg-white top-full left-0 rounded-b-lg" />
                }
                <button

                    onClick={() => setSelected("This Month")}
                    className="text-zinc-300 hover:bg-zinc-300/20 rounded-t-lg transition-all py-[10px] px-[44px] text-2xl font-thin"
                >This Month
                </button>

            </div>
            <div className="relative">
                {
                    selected === "All Time" && <motion.span
                        layoutId="underline"
                        className="w-full absolute h-1 bg-white top-full left-0  rounded-b-lg" />
                }
                <button
                    onClick={() => setSelected("All Time")}
                    className="text-zinc-300 hover:bg-zinc-300/20 rounded-t-lg transition-all  py-[10px] px-[44px] text-2xl font-thin">
                    All Time</button>
            </div>
        </div>
    )
}

export default LeaderboardButtons