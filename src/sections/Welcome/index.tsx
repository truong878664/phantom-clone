import PannerDownload from "./PannerDowload";
import Video from "./Video";

function Welcome() {
  return (
    <section id="welcome">
      <div className="relative">
        <PannerDownload position="sticky" />
        <Video />
      </div>
    </section>
  );
}

export default Welcome;
