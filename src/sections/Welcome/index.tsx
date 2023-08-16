import React, { useEffect, useRef } from "react";
import PannerDownload from "./PannerDowload";
import Video from "./Video";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function Welcome() {
  const pannerDownloadRef: React.RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#panner-download-welcome", {
      scrollTrigger: {
        trigger: "#panner-download-welcome",
        start: "bottom center",
        scrub: 1,
      },
      opacity: 0,
      scale: 0.8,
    });
  }, []);

  return (
    <section id="welcome">
      <div className="relative">
<<<<<<< HEAD
        <PannerDownload position="sticky" />
=======
        <div
          className="sticky top-0 text-center pt-44 pb-20 mt-[-76px] lg:pt-64 lg:pb-40 xl:pt-40 xl:pb-0"
          id="panner-download-welcome"
          ref={pannerDownloadRef}
        >
          <PannerDownload
            title="Your * trusted | companion"
            topTitle="The crypto wallet that’ll take you places"
            sizeLabelHeader="large"
          />
        </div>
>>>>>>> 95b2ed72e7aaef5666e39f9c3c4f82def8aa1ed6
        <Video />
      </div>
    </section>
  );
}

export default Welcome;
