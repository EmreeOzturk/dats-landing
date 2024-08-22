import type { LeaderboardDataItem } from "@/lib/types";
import { LEADERBOARDALLTIMEURL, LEADERBOARDMONTHLYURL } from "@/lib/consts";
import LeaderboardContainer from "@/components/download/leaderboard-container";

const Leaderboard = async () => {
    const fetchLeaderboardData = async () => {
        const response = await fetch(LEADERBOARDALLTIMEURL, {
            cache: "no-store",
        });
        if (response.ok) {
            const data = await response.json();
            return data as LeaderboardDataItem[];
        }
    }
    const fetchLeaderboardDataThisMonth = async () => {
        const response = await fetch(LEADERBOARDMONTHLYURL + new Date().getFullYear() + "/" + (new Date().getMonth() + 1).toString().padStart(2, "0"), {
            cache: "no-store",
        });
        if (response.ok) {
            const data = await response.json();
            return data as LeaderboardDataItem[];
        }
    }
    const leaderboardData = await fetchLeaderboardData();
    const leaderboardDataThisMonth = await fetchLeaderboardDataThisMonth();
    const [allTimeData, montlyData] = await Promise.all([leaderboardData, leaderboardDataThisMonth]);
    return (
        <div className='flex items-center justify-center flex-col text-center mx-auto w-full '>
            <LeaderboardContainer
                data={allTimeData as LeaderboardDataItem[]}
                montlyData={montlyData as LeaderboardDataItem[]}
            />
        </div>
    )
}

export default Leaderboard