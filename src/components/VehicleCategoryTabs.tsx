import React from "react";
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
  const getIndicatorHeight = () => {
    if (typeof window === "undefined") return "120px";
    return window.innerWidth < 768 ? "80px" : "120px";
  };

  const getIndicatorTop = () => {
    const index = categories.findIndex((cat) => cat.id === selectedCategory);
    const spacing = typeof window !== "undefined" && window.innerWidth < 768 ? 80 : 120;
    return index * spacing;
  };

  return (
    <div className="lg:w-[300px] flex flex-col justify-center relative">
      <div className="relative pl-6 flex flex-col justify-center">
        <div
          className="absolute left-0 w-0.5 bg-gray-600 rounded"
          style={{
            top: 0,
            height:
              categories.length *
                (typeof window !== "undefined" && window.innerWidth < 768 ? 80 : 120) +
              "px",
          }}
        />
        <div
          className="absolute left-0 w-0.5 bg-white rounded transition-all duration-300"
          style={{ top: getIndicatorTop(), height: getIndicatorHeight() }}
        />
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={clsx(
              "relative mb-6 cursor-pointer transition-all duration-300 ease-in-out py-2",
              selectedCategory === cat.id ? "text-white" : "text-gray-500 hover:text-white"
            )}
          >
            <h4 className="text-[20px] font-semibold">{cat.title}</h4>
            <p className="!text-[15px] !font-light mt-1">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleCategoryTabs;
