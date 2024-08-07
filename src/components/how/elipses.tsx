import React from 'react'

const Elipses = () => {
    return (
        <svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_1618)">
                <circle cx="73.5" cy="69.5" r="19.5" fill="black" />
                <circle cx="73.5" cy="69.5" r="19" stroke="white" strokeOpacity="0.5" />
            </g>
            <defs>
                <filter id="filter0_d_1_1618" x="0" y="0" width="147" height="147" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="27" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.172549 0 0 0 0 0.878431 0 0 0 0 0.996078 0 0 0 0.8 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1618" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1618" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export default Elipses