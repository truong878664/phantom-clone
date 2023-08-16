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
    medium: "text-3xl lg:text-7xl xl:text-8xl",
    large: "text-4xl lg:text-8xl xl:text-9xl"
  } 
 
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-sm mb-5 lg:text-xl xl:text-2xl">{topTitle}</span>
      <LabelHeading title={title} className="" sizeText={sizeLabelHeaders[sizeLabelHeader]} />
      <div className="mt-12 flex flex-col items-center">
        <button className="bg-white py-2 w-fit px-4 rounded-full flex items-center justify-center gap-2 lg:px-6 lg:py-4 lg:mt-20 xl:mt-4">
          <img src={iconDownload[nameDevice]} alt="" className="w-10" />
          <span>Download for {nameDevice}</span>
        </button>
        <span className="text-xs mt-4 text-c-dark-purple/70 w-52 lg:text-sm">
          Also available other browsers and devices.{" "}
          <a className="underline">Discover more</a>
        </span>
        <LabelHeading
          fillLogo={themes[theme].fillLogo}
          colorEye=""
          title="Your|trusted companion"
          size="2.5rem"
        />
        <div className="mt-24 max-w-[208px] flex flex-col">
          <button className="bg-white h-14 rounded-full flex items-center justify-center gap-2">
            <img src={appStore} alt="" className="w-10" />
            <span>Download for ios</span>
          </button>
          <p className="text-xs mt-4 text-c-dark-purple/70">
            Also available other browsers and devices.{" "}
            <a className="underline">Discover more</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PannerDownload;
