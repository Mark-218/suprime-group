import React, { RefObject } from "react";
import { Play, Pause } from "lucide-react";

interface VehicleVideoPlayerProps {
  videoRef: RefObject<HTMLVideoElement>;
  videoSrc: string;
  progress: number;
  isPlaying: boolean;
  isAutoPlaying: boolean;
  togglePlay: () => void;
  videoContainerRef: RefObject<HTMLDivElement>;
}

const VehicleVideoPlayer: React.FC<VehicleVideoPlayerProps> = ({
  videoRef,
  videoSrc,
  progress,
  isPlaying,
  isAutoPlaying,
  togglePlay,
  videoContainerRef,
}) => {
  return (
    <div className="flex-1 relative flex flex-col items-center">
      <div
        ref={videoContainerRef}
        className="w-auto max-w-[85%] max-h-[250px] flex items-center justify-center bg-black rounded-lg overflow-hidden"
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-auto max-w-[85%] max-h-[250px] object-contain"
          autoPlay
          loop={!isAutoPlaying}
          muted
          playsInline
        />
      </div>

      {/* Play/Pause Button */}
      <div className="mt-4 lg:mt-0 lg:ml-4">
        <button
          onClick={togglePlay}
          className="relative w-14 h-14 rounded-full flex items-center justify-center bg-black/60 border-white hover:bg-black/80"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              className="text-gray-700"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
              r="24"
              cx="28"
              cy="28"
            />
            <circle
              className="text-white transition-all duration-200"
              strokeWidth="3"
              strokeDasharray={2 * Math.PI * 24}
              strokeDashoffset={2 * Math.PI * 24 * (1 - progress / 100)}
              stroke="currentColor"
              fill="transparent"
              r="24"
              cx="28"
              cy="28"
            />
          </svg>
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VehicleVideoPlayer;
