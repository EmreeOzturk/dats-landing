import Sphere from "./sphere"
const IntroSection = () => {
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-start justify-center">
                <h3 className="text-[14px] font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500" >
                    START EARNING TODAY
                </h3>
                <h1>
                    Monetize your idle computing power <span className="text-sky-500">securely</span>
                </h1>
            </div>
            <div>
                <Sphere />
            </div>
        </section>
    )
}

export default IntroSection