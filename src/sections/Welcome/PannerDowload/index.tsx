import Logo from "../../../partials/Logo";
import appStore from "../../../assets/image/appstore.png";
function PannerDownload() {
  return (
    <div className="sticky top-0 flex flex-col items-center text-center pt-44 pb-20 mt-[-76px]">
      <span className="text-sm">The crypto wallet that’ll take you places</span>
      <span className="text-4xl">
        Your
        <span className="inline-block translate-y-1/4 mx-2">
          <Logo />
        </span>
        trusted companion
      </span>
      <div className="mt-24 max-w-[208px] flex flex-col">
        <button className="bg-white h-14 rounded-full flex items-center justify-center gap-2">
          <img src={appStore} alt="" className="w-10" />

          <span>Download for ios</span>
        </button>
        <span className="text-xs mt-4 text-c-dark-purple/70">
          Also available other browsers and devices.{" "}
          <a className="underline">Discover more</a>
        </span>
      </div>
    </div>
  );
}

export default PannerDownload;
