import LabelHeading from "../../../components/LabelHeading";
import getUA from "../../../function/getUA";
import iconDownload from "./iconDownload";

interface PannerDownload {
  title: `${string}*${string}|${string}`;
  topTitle: string;
  sizeLabelHeader: "medium" | "large"
}

function PannerDownload({ title, topTitle, sizeLabelHeader }: PannerDownload) {
  const nameDevice = getUA();
  const sizeLabelHeaders = {
    medium: "text-3xl",
    large: "text-4xl lg:text-8xl"
  } 

  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-sm">{topTitle}</span>
      <LabelHeading title={title} className={sizeLabelHeaders[sizeLabelHeader]} />
      <div className="mt-12 flex flex-col items-center">
        <button className="bg-white h-14 w-fit px-4 rounded-full flex items-center justify-center gap-2">
          <img src={iconDownload[nameDevice]} alt="" className="w-10" />
          <span>Download for {nameDevice}</span>
        </button>
        <span className="text-xs mt-4 text-c-dark-purple/70 w-52">
          Also available other browsers and devices.{" "}
          <a className="underline">Discover more</a>
        </span>
      </div>
    </div>
  );
}

export default PannerDownload;
