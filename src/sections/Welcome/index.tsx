import React, { useEffect, useRef } from 'react';
import PannerDownload from './PannerDowload';
import Video from './Video';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Welcome() {
  const pannerDownloadRef: React.RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#panner-download-welcome', {
      scrollTrigger: {
        trigger: '#panner-download-welcome',
        start: 'bottom center',
        scrub: 1,
      },
      opacity: 0,
      scale: 0.8,
    });
  }, []);

  return (
    <section>
      <div className="relative">
        <div
          className="sticky top-0 mt-[-76px] pb-20 pt-44 text-center lg:pb-40 lg:pt-64 xl:pb-0 xl:pt-40"
          id="panner-download-welcome"
          ref={pannerDownloadRef}
        >
          <PannerDownload title="Your * trusted | companion" topTitle="The crypto wallet that’ll take you places" sizeLabelHeader="large" />
        </div>
        <Video />
      </div>
    </section>
  );
}

export default Welcome;
