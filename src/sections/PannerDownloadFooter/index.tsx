import { gsap } from 'gsap';
import PannerDownload from '../Welcome/PannerDowload';
import { ScrollToPlugin } from 'gsap/all';
import { useEffect, useRef } from 'react';

function PannerDownloadFooter() {
  const PannerDownloadFooterRef: React.Ref<HTMLElement> = useRef(null);

  useEffect(() => {
    const commonOption = {
      scrollTrigger: {
        trigger: PannerDownloadFooterRef.current,
        start: 'center center',
        end: 'center center',
        scrub: 1,
      },
    };
    const queryAndAnimates = [
      {
        query: 'body',
        background: '#ab9ff2',
      },
      {
        query: '.logo-body',
        fill: '#fff',
      },
      {
        query: '.logo-eye',
        fill: '#ab9ff2',
      },
    ];

    gsap.registerPlugin(ScrollToPlugin);
    queryAndAnimates.forEach((tween) => {
      const { query, ...css } = tween;
      gsap.to(tween.query, { ...commonOption, ...css });
    });
  }, []);
  return (
    <section className="grid place-content-center pb-72 md:pt-32" ref={PannerDownloadFooterRef}>
      <PannerDownload title="Download * Phantom | to get started" topTitle="Trusted by more than 3 million people" sizeLabelHeader="medium" />
    </section>
  );
}

export default PannerDownloadFooter;
