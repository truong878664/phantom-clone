import { useEffect, useRef } from 'react';
import LabelHeading from '../../../components/LabelHeading';
import getUA from '../../../function/getUA';
import iconDownload from './iconDownload';

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
  useEffect(() => {}, []);
  function handleMouseMove(e: any) {
    console.log(e.clientX);
  }

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <span className="mb-5 animate-[show_2s_linear] text-sm lg:text-xl xl:text-2xl">{topTitle}</span>
        <div className="z-10">
          <LabelHeading title={title} className="" sizeText={sizeLabelHeaders[sizeLabelHeader]} />
        </div>

        <div className="mt-12 flex animate-[show_2s_linear] flex-col items-center">
          <button
            onMouseMove={handleMouseMove}
            ref={buttonDownloadRef}
            className="flex w-fit items-center justify-center gap-2 rounded-full bg-white px-4 py-2 lg:mt-20 lg:px-6 lg:py-4 xl:mt-4"
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
