import BatteryIcon from "./battery-icon"
import UserIcon from "./user-icon"


type DetailCardProps = {
    kind: "revenues" | "dats"
}

const DetailCard: React.FC<DetailCardProps> = ({
    kind
}) => {
    return (
        <div className="h-[350px] w-[330px] border border-[#f0f0f0]/10 rounded-2xl py-12 px-8 flex items-start justify-center flex-col gap-10
            bg-gradient-to-b from-[#060606]  via-[#0e0e0e] to-[#0e0e0e]">
            <div className="flex items-center justify-center">
                {kind === "revenues" &&
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center">
                            <UserIcon />
                        </div>
                        <p className="font-bold">
                            REVENUES
                        </p>
                    </div>}
                {kind === "dats" &&
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center">
                            <BatteryIcon />
                        </div>
                        <p className="font-bold">
                            DATS
                        </p>
                    </div>}
            </div>

            <p className="mt-10">
                <span className="text-5xl mr-2">
                    {kind === "revenues" && "60%"}
                    {kind === "dats" && "40%"}
                </span>
                <span className="text-[20px]">
                    revenues
                </span>
            </p>
            <p className="font-normal text-[#f0f0f0bb] text-[18px] tracking-tight leading-relaxed">
                goes to the user and explain why <br /> and how
            </p>
        </div>
    )
}

export default DetailCard