import { useEffect, useRef } from "react";
import LabelHeading from "../../../components/LabelHeading";
import getUA from "../../../function/getUA";
import iconDownload from "./iconDownload";

interface PannerDownload {
  title: `${string}*${string}|${string}`;
  topTitle: string;
  sizeLabelHeader: "medium" | "large";
}

function PannerDownload({ title, topTitle, sizeLabelHeader }: PannerDownload) {
  const nameDevice = getUA();
  const sizeLabelHeaders = {
    medium: "text-3xl lg:text-7xl xl:text-8xl",
    large: "text-4xl lg:text-8xl xl:text-9xl",
  };

  const buttonDownloadRef: React.RefObject<HTMLButtonElement> = useRef(null);
  useEffect(() => {}, []);
  function handleMouseMove(e: any) {
    console.log(e.clientX);
  }

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <span className="text-sm mb-5 lg:text-xl xl:text-2xl animate-[show_2s_linear]">
          {topTitle}
        </span>
        <div className="z-10">
          <LabelHeading
            title={title}
            className=""
            sizeText={sizeLabelHeaders[sizeLabelHeader]}
          />
        </div>

        <div className="mt-12 flex flex-col items-center animate-[show_2s_linear]">
          <button
            onMouseMove={handleMouseMove}
            ref={buttonDownloadRef}
            className="bg-white py-2 w-fit px-4 rounded-full flex items-center justify-center gap-2 lg:px-6 lg:py-4 lg:mt-20 xl:mt-4"
          >
            <img src={iconDownload[nameDevice]} alt="" className="w-10" />
            <span>Download for {nameDevice}</span>
          </button>
          <span className="text-xs mt-4 text-c-dark-purple/70 w-52 lg:text-sm">
            Also available other browsers and devices.{" "}
            <a className="underline">Discover more</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default PannerDownload;
