const BGLight = () => {
    return (
        <div className="absolute bottom-0 ">
            <svg width="274" height="220" viewBox="0 0 274 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1_1955)">
                    <ellipse cx="242.5" cy="242" rx="108.5" ry="108" fill="#00DDDD" />
                </g>
                <g filter="url(#filter1_f_1_1955)">
                    <ellipse cx="318.5" cy="281" rx="132.5" ry="132" fill="#5466FF" />
                </g>
                <defs>
                    <filter id="filter0_f_1_1955" x="0" y="0" width="485" height="484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="67" result="effect1_foregroundBlur_1_1955" />
                    </filter>
                    <filter id="filter1_f_1_1955" x="52" y="15" width="533" height="532" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="67" result="effect1_foregroundBlur_1_1955" />
                    </filter>
                </defs>
            </svg>
        </div>

    )
}

export default BGLight