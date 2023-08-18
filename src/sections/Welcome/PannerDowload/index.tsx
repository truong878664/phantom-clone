import { useRef } from 'react';
import LabelHeading from '../../../components/LabelHeading';
import getUA from '../../../function/getUA';
import iconDownload from './iconDownload';
import { gsap } from 'gsap';

interface PannerDownload {
  title: `${string}*${string}|${string}`;
  topTitle: string;
  sizeLabelHeader: 'medium' | 'large';
}

function PannerDownload({ title, topTitle, sizeLabelHeader }: PannerDownload) {
  const nameDevice = getUA();
  const sizeLabelHeaders = {
    medium: 'text-3xl lg:text-7xl xl:text-8xl',
    large: 'text-4xl lg:text-8xl xl:text-9xl',
  };

  const buttonDownloadRef: React.RefObject<HTMLButtonElement> = useRef(null);
  const handleMouseMove = (e: any) => {
    if (!buttonDownloadRef.current) return;
    buttonDownloadRef.current.dataset.animate = 'active';
    const rect = buttonDownloadRef.current.getBoundingClientRect();
    const originCenterButton = { x: 0, y: 0 };
    originCenterButton.x = rect.left + rect.width / 2;
    originCenterButton.y = rect.top + rect.height / 2;
    const { clientX, clientY } = e;
    gsap.to(buttonDownloadRef.current, {
      x: (clientX - originCenterButton.x) / 5,
      y: (clientY - originCenterButton.y) / 3,
      duration: 1,
    });
  };
  const handleMouseLeave = () => {
    buttonDownloadRef.current!.dataset.animate = 'none';
    gsap.to(buttonDownloadRef.current, {
      x: 0,
      y: 0,
      duration: 1,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <span className="mb-5 animate-[show_2s_linear] text-sm lg:text-xl xl:text-2xl">{topTitle}</span>
        <div className="z-10">
          <LabelHeading title={title} className="" sizeText={sizeLabelHeaders[sizeLabelHeader]} />
        </div>

        <div className="mt-12 flex animate-[show_2s_linear] flex-col items-center ">
          <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={buttonDownloadRef}
            data-animate=""
            className="flex w-fit items-center justify-center gap-2 rounded-full bg-white px-4 py-2 data-[animate='none']:!translate-x-0 data-[animate='none']:!translate-y-0 data-[animate='none']:transition-all data-[animate='none']:duration-500 lg:mt-20 lg:px-6 lg:py-4 xl:mt-4"
          >
            <img src={iconDownload[nameDevice]} alt="" className="w-10" />
            <span>Download for {nameDevice}</span>
          </button>
          <span className="mt-4 w-52 text-xs text-c-dark-purple/70 lg:text-sm">
            Also available other browsers and devices. <a className="underline">Discover more</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default PannerDownload;
