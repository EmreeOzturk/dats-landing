import React from 'react'
import Sphere from './sphere'
import WideCircle from './wide-circle'

const HowSection = () => {
    return (
        <section className="flex flex-col gap-6 items-center justify-between h-[110dvh] overflow-hidden max-w-7xl mx-auto pb-32 ">
            <h3 className="text-[14px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#0A2141] to-[#55FFFA] border-[1.5px] border-white/15 rounded-full px-[14px] py-[4px]" >
                WHY WE ARE SPECIAL
            </h3>
            <h4 className='text-center text-[48px]'>
                How DATS Works
            </h4>
            <p className='text-center text-[#f0f0f0bb] mb-12'>
                Some introduction text here giving s short summary of how everything works, <br />why is it that powerful, why is it better than others
            </p>
            <div className='flex items-center justify-center relative  w-full'>
                <WideCircle />
                <div className='absolute mb-40'>
                    <Sphere />
                </div>
            </div>
        </section>
    )
}

export default HowSection