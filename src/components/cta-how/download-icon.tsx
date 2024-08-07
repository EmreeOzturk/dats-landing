const DownloadIcon = () => {
    return (
        <svg width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_90_99)">
                <mask id="mask0_90_99" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="19" y="22" width="62" height="62">
                    <rect x="19" y="22" width="62" height="62" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_90_99)">
                    <path d="M29.3334 78.8332V73.6665H70.6667V78.8332H29.3334ZM50 68.4998L31.9167 45.2498H42.25V27.1665H57.75V45.2498H68.0834L50 68.4998Z" fill="url(#paint0_linear_90_99)" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d_90_99" x="0.960493" y="0.895318" width="98.0791" height="108.413" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2.10169" />
                    <feGaussianBlur stdDeviation="14.1864" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.172549 0 0 0 0 0.878431 0 0 0 0 0.996078 0 0 0 0.8 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_90_99" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_90_99" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_90_99" x1="50" y1="-110.638" x2="50.0003" y2="78.8332" gradientUnits="userSpaceOnUse">
                    <stop offset="2.71717e-07" stopColor="#0A2141" />
                    <stop offset="0.224894" stopColor="#003D7A" />
                    <stop offset="0.633565" stopColor="#1791CE" />
                    <stop offset="1" stopColor="#2CE1FE" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default DownloadIcon