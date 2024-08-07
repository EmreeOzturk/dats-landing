import React from 'react'
import BGLight from './bg-light'
import ChartIcon from "./chart-icon"
import DownloadIcon from "./download-icon"
import MetamaskIcon from "./metamask-icon"
import TollIcon from "./toll-icon"

type StepCardProps = {
    step: number,
    title: string,
}

const StepCard: React.FC<StepCardProps> = (
    { step, title }
) => {
    return (
        <div className="border overflow-hidden relative flex flex-col justify-between items-start pb-6 rounded-2xl h-[300px] w-[275px] ">
            <BGLight />
            <div className="flex items-center justify-start w-full pt-4 h-2/5">
                {
                    step === 1 ? <DownloadIcon /> :
                        step === 2 ? <MetamaskIcon /> :
                            step === 3 ? <ChartIcon /> :
                                step === 4 ? <TollIcon /> : null
                }
                <p className="text-[45px]">{title}</p>
            </div>
            <p className="w-full text-start px-6 text-[18px] font-normal leading-[1.8] ">
                {
                    step === 1 ?
                        <>
                            Download the DATS <br /> Project desktop app <span className='underline font-bold'>Download now</span>
                        </> :
                        step === 2 ?
                            <>
                                Sign in to the DATS desktop app with your Metamask or email address
                            </> :
                            step === 3 ?
                                <>
                                    Dedicate your computing power resources to DATS  (Internet Bandwidth and CPU)
                                </> :
                                step === 4 ?
                                    <>
                                        Keep it open and enjoy getting free tokens from your resources
                                    </> : null
                }
            </p>
        </div>
    )
}

export default StepCard