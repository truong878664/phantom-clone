import { useEffect, useRef } from 'react';
import videoWelcome from '../../../assets/video/video-welcome.webm';
// import videoWelcomeMp4 from '../../../assets/video/video-welcome.mp4';

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current!.play();
  });
  return (
    <div className="relative z-0 flex w-full animate-[show_3s_linear] justify-center overflow-hidden xl:h-screen">
      <div className="mx-auto aspect-square min-w-[500px] max-w-xl justify-center overflow-hidden lg:max-w-3xl">
        <video autoPlay={true} loop={true} muted playsInline ref={videoRef}>
          <source src="https://cdn.sanity.io/files/3nm6d03a/production/74d54d67dad5f3159be269203f14a173bb49622f.mp4#t=0.1" type='video/mp4; codecs="hvc1"' />
          <source src="https://cdn.sanity.io/files/3nm6d03a/production/c2810bb8c2e2da6349630ac2138c755146d1dd18.webm#t=0.1" type="video/webm" />

          {/* <source src={videoWelcomeMp4} type="video/mp4" /> */}
          <source src={videoWelcome} type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default Video;
