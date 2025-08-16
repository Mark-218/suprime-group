import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

export type CategoryId = "passenger" | "commercial";

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
}

interface VehicleCategoryTabsProps {
  categories: Category[];
  selectedCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
}

const VehicleCategoryTabs: React.FC<VehicleCategoryTabsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0 });
  const [trackStyle, setTrackStyle] = useState({ top: 0, height: 0 });

  // Update indicator + track on resize or selection
  useEffect(() => {
    const updatePositions = () => {
      const index = categories.findIndex((cat) => cat.id === selectedCategory);
      const element = itemRefs.current[index];
      const parent = itemRefs.current[0]?.parentElement;

      if (element && parent) {
        const parentRect = parent.getBoundingClientRect();
        const rect = element.getBoundingClientRect();

        // Indicator
        const top = rect.top - parentRect.top;
        setIndicatorStyle({ top, height: rect.height });

        // Track (from first to last)
        const first = itemRefs.current[0]?.getBoundingClientRect();
        const last =
          itemRefs.current[categories.length - 1]?.getBoundingClientRect();
        if (first && last) {
          setTrackStyle({
            top: first.top - parentRect.top,
            height: last.bottom - first.top,
          });
        }
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [categories, selectedCategory]);

  return (
    <div className="lg:w-[300px] flex flex-col justify-center relative">
      <div className="relative pl-6 flex flex-col justify-center">
        {/* Gray base line (track) */}
        <div
          className="absolute left-0 w-0.5 bg-gray-600 rounded"
          style={trackStyle}
        />
        {/* White active indicator */}
        <div
          className="absolute left-0 w-0.5 bg-white rounded transition-all duration-300"
          style={indicatorStyle}
        />
        {categories.map((cat, i) => (
          <div
            key={cat.id}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={() => onSelectCategory(cat.id)}
            className={clsx(
              "relative mb-4 sm:mb-6 cursor-pointer transition-all duration-300 ease-in-out py-2",
              selectedCategory === cat.id
                ? "text-white"
                : "text-gray-500 hover:text-white"
            )}
          >
            <h4 className="text-[18px] sm:text-[20px] font-semibold">{cat.title}</h4>
            <p className="!text-[14px] sm:!text-[15px] !font-light mt-1">
              {cat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleCategoryTabs;
