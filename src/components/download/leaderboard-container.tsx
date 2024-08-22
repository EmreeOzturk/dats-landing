"use client"

import LeaderboardButtons from './leaderboard-buttons'
import { DataTableDemo } from './leaderboard-table'
import { LeaderboardDataItem } from '@/lib/types'
import { motion } from 'framer-motion'
import { useLeaderBoardStore } from '@/store/useLeaderBoardStore'
const LeaderboardContainer = (
    { data, montlyData }: { data: LeaderboardDataItem[], montlyData: LeaderboardDataItem[] }
) => {
    const selected = useLeaderBoardStore(state => state.selected)
    return (
        <div className='min-h-96 w-full'>
            {
                selected === "All Time" &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full">
                    <DataTableDemo data={montlyData as LeaderboardDataItem[]} />
                </motion.div>
            }
            {
                selected === "This Month" &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}

                    className="w-full">
                    <DataTableDemo data={data as LeaderboardDataItem[]} />
                </motion.div>
            }

        </div>
    )
}

export default LeaderboardContainer