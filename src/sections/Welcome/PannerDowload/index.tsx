import appStore from "../../../assets/image/appstore.png";
import LabelHeading from "../../../components/LabelHeading";

type PannerDownload = {
  position: "relative" | "sticky";
  theme: "white" | "purple";
};
function PannerDownload({ position, theme }: PannerDownload) {
  const className = {
    relative: "h-screen grid place-content-center mt-[-20vh]",
    sticky: "sticky top-0 pt-44 pb-20 mt-[-76px]",
  };
  const themes = {
    white: {
      bg: "bg-white",
      fillLogo: "#AB9FF2",
      colorEye: "#F5F2FF",
    },
    purple: {
      bg: "bg-c-purple",
      fillLogo: "#AB9FF2",
      colorEye: "#F5F2FF",
    },
  };
  return (
    <div
      data-theme={theme}
      className={`${className[position]} ${themes[theme]}`}
    >
      <div className=" flex flex-col items-center text-center">
        <span className="text-sm">
          The crypto wallet that’ll take you places
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
