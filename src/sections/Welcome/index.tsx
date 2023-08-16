import PannerDownload from "./PannerDowload";
import Video from "./Video";

function Welcome() {
  return (
    <section>
      <div className="relative">
        <div className="sticky top-0 text-center pt-44 pb-20 mt-[-76px] lg:pt-64 lg:pb-40 xl:pt-40 xl:pb-0">
          <PannerDownload
            title="Your * trusted | companion"
            topTitle="The crypto wallet that’ll take you places"
            sizeLabelHeader="large"
          />
        </div>
        <Video />
      </div>
    </section>
  );
}

export default Welcome;
