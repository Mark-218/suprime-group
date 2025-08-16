import React, { RefObject } from "react";
import clsx from "clsx";

interface Part {
  id: string;
  label: string;
  icon: string;
}

interface VehiclePartsListProps {
  partsData: Part[];
  selectedPart: string;
  onSelectPart: (id: string) => void;
  iconScrollRef: RefObject<HTMLDivElement>;
}

const VehiclePartsList: React.FC<VehiclePartsListProps> = ({
  partsData,
  selectedPart,
  onSelectPart,
  iconScrollRef,
}) => {
  return (
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
            selectedPart === part.id
              ? "text-white"
              : "text-gray-500 hover:text-white"
          )}
        >
          <img
            src={part.icon}
            alt={part.label}
            className={clsx(
              "mx-3 mb-1 h-9 w-9 md:h-15 md:w-15 object-contain transition-all",
              selectedPart === part.id
                ? "opacity-100 scale-110"
                : "opacity-50 hover:opacity-80"
            )}
          />
          <span className="text-[10px] md:text-[12px] whitespace-nowrap">
            {part.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default VehiclePartsList;
