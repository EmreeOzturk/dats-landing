import Faqs from "./faqs"

const FAQSection = () => {
    return (
        <section className="flex flex-col gap-6 items-center justify-between h-[110dvh] overflow-hidden max-w-7xl mx-auto pb-32 ">
            <h3 className="text-[14px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-l from-[#0A2141] to-[#55FFFA] border-[1.5px] border-white/15 rounded-full px-[14px] py-[4px]" >
                GOT QUESTIONS?
            </h3>
            <h4 className='text-center text-[48px]'>
                Frequently Asked Questions
            </h4>
            <p className='text-center text-[#f0f0f0bb] mb-12'>
                For any questions you can&apos;t find the answer to here, you can visit <br /> our Telegram and Discord communities.
            </p>
                <Faqs />
        </section>
    )
}

export default FAQSection