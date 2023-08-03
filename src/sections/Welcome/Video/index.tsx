import { useEffect, useRef } from "react";
import videoWelcome from "../../../assets/video/video-welcome.webm";

function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current!.play();
  });
  return (
    <div className="relative h-screen">
      <div className="">
        <video
          autoPlay={true}
          loop={true}
          muted
          playsInline
          ref={videoRef}
          src={videoWelcome}
        ></video>
      </div>
    </div>
  );
}

export default Video;
