import StepCard from "./step-card"

const CTASection = () => {
    return (
        <section id="steps" className="flex pl-16  flex-col items-start justify-start overh pb-32  max-w-7xl mx-auto ">
            <h2 className="font-normal text-[48px] tracking-tight leading-snug">Start your journey in under one minute</h2>
            <div className="flex items-center justify-start w-full gap-4 pt-16">
                <StepCard step={1} title="step 1" />
                <StepCard step={2} title="step 2" />
                <StepCard step={3} title="step 3" />
                <StepCard step={4} title="step 4" />
            </div>
        </section>
    )
}

export default CTASection