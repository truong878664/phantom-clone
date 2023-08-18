import { useEffect, useRef } from 'react';
import videoWelcome from '../../../assets/video/video-welcome.webm';

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current!.play();
  });
  return (
    <div className="relative z-[0] h-screen animate-[show_3s_linear]">
      <div className="mx-auto max-w-sm lg:max-w-lg">
        <video autoPlay={true} loop={true} muted playsInline ref={videoRef} src={videoWelcome}></video>
      </div>
    </div>
  );
}

export default Video;
