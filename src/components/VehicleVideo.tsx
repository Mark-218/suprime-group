import React, { RefObject } from "react";

interface VehicleVideoProps {
  videoRef: RefObject<HTMLVideoElement | null>;        // allow null
  videoContainerRef: RefObject<HTMLDivElement | null>; // allow null
  src: string;
  isAutoPlaying: boolean;
}

const VehicleVideo: React.FC<VehicleVideoProps> = ({
  videoRef,
  videoContainerRef,
  src,
  isAutoPlaying,
}) => {
  return (
    <div className="flex-1 relative flex flex-col items-center">
      <div
        ref={videoContainerRef}
        className="w-auto max-w-[85%] max-h-[250px] flex items-center justify-center bg-black rounded-lg overflow-hidden"
      >
        <video
          ref={videoRef}
          src={src}
          className="w-auto max-w-[85%] max-h-[250px] object-contain"
          autoPlay
          loop={!isAutoPlaying}
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default VehicleVideo;
