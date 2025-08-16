import React, { RefObject } from "react";
import clsx from "clsx";
import { Play, Pause } from "lucide-react";

interface Part {
  id: string;
  label: string;
  icon: string;
}

interface VehicleControlsProps {
  partsData: Part[];
  selectedPart: string;
  onSelectPart: (id: string) => void;
  iconScrollRef: RefObject<HTMLDivElement | null>; // ✅ fixed typing
  togglePlay: () => void;
  isPlaying: boolean;
  progress: number;
}

const VehicleControls: React.FC<VehicleControlsProps> = ({
  partsData,
  selectedPart,
  onSelectPart,
  iconScrollRef,
  togglePlay,
  isPlaying,
  progress,
}) => {
  return (
    <div className="mt-15 flex items-center justify-between w-full flex-col lg:flex-row">
      <div
        ref={iconScrollRef}
        className="flex-1 flex items-center justify-center gap-4 md:gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent lg:justify-center"
      >
        {partsData.map((part) => (
          <div
            key={part.id}
            onClick={() => onSelectPart(part.id)}
            className={clsx(
              "cursor-pointer flex flex-col items-center transition-all duration-300 min-w-[60px]",
              selectedPart === part.id ? "text-white" : "text-gray-500 hover:text-white"
            )}
          >
            <img
              src={part.icon}
              alt={part.label}
              className={clsx(
                "mx-3 mb-1 h-9 w-9 md:h-15 md:w-15 object-contain transition-all",
                selectedPart === part.id ? "opacity-100 scale-110" : "opacity-50 hover:opacity-80"
              )}
            />
            <span className="text-[10px] md:text-[12px] whitespace-nowrap">{part.label}</span>
          </div>
        ))}
      </div>

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

export default VehicleControls;
