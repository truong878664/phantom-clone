type Logo = {
    fill?:string,
    size?:string | number,
    colorEye?: string,
    className?: string
}

function Logo({fill= "#AB9FF2", colorEye = "#F5F2FF", size = 50, className=""}: Logo) {
    return ( 
        <svg width={size} className="aspect-[6/5]" viewBox="0 0 691 570" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5_61)">
            <g filter="url(#filter0_f_5_61)">
            <path fill={fill} className={className} d="M633.972 54.7147C706.257 125.207 688.592 252.289 633.189 381.215C581.5 501.5 475.5 514.5 467.189 429.215C388.689 569.715 242.689 558.215 275.689 429.215C208.689 549.215 93.2255 587.186 41.2712 552.182C-1.38492 523.442 -7.81549 453.666 19.1423 377.58C45.2589 307.735 89.9331 235.862 152.599 171.602C314.456 5.62833 529.974 -46.7037 633.972 54.7147Z"/>
            </g>
            <g filter="url(#filter1_f_5_61)">
            <ellipse cx="464" cy="177.5" rx="32" ry="43.5" fill={colorEye}/>
            </g>
            <g filter="url(#filter2_f_5_61)">
            <ellipse cx="594" cy="177.5" rx="32" ry="43.5" fill={colorEye}/>
            </g>
            </g>
            <defs>
            <filter id="filter0_f_5_61" x="-1" y="-1" width="686.711" height="569.653" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5_61"/>
            </filter>
            <filter id="filter1_f_5_61" x="428" y="130" width="72" height="95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5_61"/>
            </filter>
            <filter id="filter2_f_5_61" x="558" y="130" width="72" height="95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5_61"/>
            </filter>
            <clipPath id="clip0_5_61">
            <rect width="691" height="570" fill="white"/>
            </clipPath>
            </defs>
        </svg>
     );
}

export default Logo;