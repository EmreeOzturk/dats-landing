"use client"
import LeaderboardButtons from "./leaderboard-buttons"
const Wrapper = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
            <h2 className='text-zinc-300 font-bold text-[3.5rem] tracking-wider  mt-20 '>Leaderboard</h2>
            <LeaderboardButtons />
            {children}
        </>
    )
}

export default Wrapper