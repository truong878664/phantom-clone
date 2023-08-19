import { gsap } from 'gsap';
import { useEffect, useLayoutEffect } from 'react';
import animateLogoPhantom from '../function/animateLogoPhantom';

interface LogoNew {
  theme?: 'purple';
  className: string;
}
function LogoNew({ theme = 'purple', className }: LogoNew) {
  const themeLogos = {
    purple: {
      fill: '#AB9FF2',
      eye: '#F5F2FF',
    },
  };
  useLayoutEffect(() => {
    gsap.set('.eye-heart', { scale: 0, transformOrigin: 'center' });
  }, []);
  useEffect(() => {
    animateLogoPhantom();
    setInterval(() => {
      animateLogoPhantom();
    }, 5000);
  }, []);

  return (
    <div className={`wrapper-logo inline-block ${className}`} onMouseEnter={animateLogoPhantom}>
      <svg className="body-phantom aspect-[6/5] h-[1em]" viewBox="0 0 691 570" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5_61)">
          <g filter="url(#filter0_f_5_61)">
            <path
              className="logo-body"
              d="M633.972 54.7147C706.257 125.207 688.592 252.289 633.189 381.215C581.5 501.5 475.5 514.5 467.189 429.215C388.689 569.715 242.689 558.215 275.689 429.215C208.689 549.215 93.2255 587.186 41.2712 552.182C-1.38492 523.442 -7.81549 453.666 19.1423 377.58C45.2589 307.735 89.9331 235.862 152.599 171.602C314.456 5.62833 529.974 -46.7037 633.972 54.7147Z"
              fill={themeLogos[theme].fill}
            />
          </g>
          <g filter="url(#filter1_f_5_61)">
            <path
              className="eye-circle logo-eye"
              d="M496 177.5C496 201.524 481.673 221 464 221C446.327 221 432 201.524 432 177.5C432 153.476 446.327 134 464 134C481.673 134 496 153.476 496 177.5Z"
              fill={themeLogos[theme].eye}
            />
          </g>
          <g filter="url(#filter2_f_5_61)">
            <path
              className="eye-circle logo-eye"
              d="M627 177.5C627 201.524 612.673 221 595 221C577.327 221 563 201.524 563 177.5C563 153.476 577.327 134 595 134C612.673 134 627 153.476 627 177.5Z"
              fill={themeLogos[theme].eye}
            />
          </g>
          <g className="eye-heart logo-eye" filter="url(#filter3_f_5_61)">
            <path
              d="M463.983 140.161C494.054 102.313 573.367 159.108 464.008 224C354.65 159.108 433.912 102.313 463.983 140.161Z"
              fill={themeLogos[theme].eye}
            />
          </g>
          <g className="eye-heart logo-eye" filter="url(#filter4_f_5_61)">
            <path
              d="M594.983 140.161C625.054 102.313 704.367 159.108 595.008 224C485.65 159.108 564.912 102.313 594.983 140.161Z"
              fill={themeLogos[theme].eye}
            />
          </g>
        </g>
        <defs>
          <filter id="filter0_f_5_61" x="-1" y="-1" width="686.711" height="569.653" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5_61" />
          </filter>
          <filter id="filter1_f_5_61" x="428" y="130" width="72" height="95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5_61" />
          </filter>
          <filter id="filter2_f_5_61" x="559" y="130" width="72" height="95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5_61" />
          </filter>
          <filter id="filter3_f_5_61" x="403" y="123" width="122" height="106" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_5_61" />
          </filter>
          <filter id="filter4_f_5_61" x="534" y="123" width="122" height="106" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_5_61" />
          </filter>
          <clipPath id="clip0_5_61">
            <rect width="691" height="570" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>

    // <span className={className}>
    //   <svg className={`aspect-[6/5] h-[1em]`} viewBox="0 0 691 570" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <g clipPath="url(#clip0_5_61)">
    //       <g filter="url(#filter0_f_5_61)">
    //         <path
    //           fill={themeLogos[theme].fill}
    //           className="logo-body"
    //           d="M633.972 54.7147C706.257 125.207 688.592 252.289 633.189 381.215C581.5 501.5 475.5 514.5 467.189 429.215C388.689 569.715 242.689 558.215 275.689 429.215C208.689 549.215 93.2255 587.186 41.2712 552.182C-1.38492 523.442 -7.81549 453.666 19.1423 377.58C45.2589 307.735 89.9331 235.862 152.599 171.602C314.456 5.62833 529.974 -46.7037 633.972 54.7147Z"
    //         />
    //       </g>
    //       <g filter="url(#filter1_f_5_61)">
    //         <ellipse cx="464" cy="177.5" rx="32" ry="43.5" fill={themeLogos[theme].eye} className="logo-eye" />
    //       </g>
    //       <g filter="url(#filter2_f_5_61)">
    //         <ellipse cx="594" cy="177.5" rx="32" ry="43.5" fill={themeLogos[theme].eye} className="logo-eye" />
    //       </g>
    //     </g>
    //     <defs>
    //       <filter id="filter0_f_5_61" x="-1" y="-1" width="686.711" height="569.653" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    //         <feFlood floodOpacity="0" result="BackgroundImageFix" />
    //         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
    //         <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5_61" />
    //       </filter>
    //       <filter id="filter1_f_5_61" x="428" y="130" width="72" height="95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    //         <feFlood floodOpacity="0" result="BackgroundImageFix" />
    //         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
    //         <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5_61" />
    //       </filter>
    //       <filter id="filter2_f_5_61" x="558" y="130" width="72" height="95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    //         <feFlood floodOpacity="0" result="BackgroundImageFix" />
    //         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
    //         <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_5_61" />
    //       </filter>
    //       <clipPath id="clip0_5_61">
    //         <rect width="691" height="570" fill="white" />
    //       </clipPath>
    //     </defs>
    //   </svg>
    // </span>
  );
}

export default LogoNew;
