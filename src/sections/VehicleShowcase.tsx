import React, { useState, useRef, useEffect } from "react";
import VehicleCategoryTabs, { Category, CategoryId } from "../components/VehicleCategoryTabs";
import VehicleVideo from "../components/VehicleVideo";
import VehicleControls from "../components/VehicleControls";

const VehicleShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("passenger");
  const [selectedPart, setSelectedPart] = useState("body");
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // ✅ Always type refs with <T | null>
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const iconScrollRef = useRef<HTMLDivElement | null>(null);

  const categories: Category[] = [
    { id: "passenger", title: "Passenger vehicles", description: "Revving up innovation from interior to exterior." },
    { id: "commercial", title: "Commercial vehicles", description: "Advancing engineering for heavy-duty vehicles." },
  ];

  const partsData: Record<CategoryId, { id: string; label: string; icon: string }[]> = {
    passenger: [
      { id: "body", label: "Complete Body", icon: "/assets/icons/body.png" },
      { id: "front", label: "Front", icon: "/assets/icons/front.png" },
      { id: "cabin", label: "Cabin", icon: "/assets/icons/cabin.png" },
      { id: "trunk", label: "Trunk", icon: "/assets/icons/trunk.png" },
      { id: "exterior", label: "Exterior", icon: "/assets/icons/exterior.png" },
    ],
    commercial: [
      { id: "body", label: "Body", icon: "/assets/icons/commercial-body.svg" },
      { id: "cabin", label: "Cabin", icon: "/assets/icons/commercial-cabin.svg" },
      { id: "engine", label: "Engine", icon: "/assets/icons/commercial-engine.svg" },
    ],
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsAutoPlaying(false);
    } else {
      videoRef.current.play();
      setIsAutoPlaying(true);
    }
    setIsPlaying(!isPlaying);
  };

  const playNextVideo = () => {
    const currentIndex = partsData[selectedCategory].findIndex((part) => part.id === selectedPart);
    if (currentIndex < partsData[selectedCategory].length - 1) {
      setSelectedPart(partsData[selectedCategory][currentIndex + 1].id);
    } else {
      setIsPlaying(false);
      setIsAutoPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (videoContainerRef.current) {
        const aspectRatio = video.videoWidth / video.videoHeight;
        const targetHeight = Math.min(videoContainerRef.current.clientWidth / aspectRatio, 400);
        videoContainerRef.current.style.height = `${targetHeight}px`;
      }
    };

    const handleVideoEnd = () => {
      if (isAutoPlaying) playNextVideo();
    };

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100 || 0);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleVideoEnd);

    if (isAutoPlaying) {
      video.play().catch(() => {});
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [selectedCategory, selectedPart, isAutoPlaying]);

  useEffect(() => {
    setSelectedPart(partsData[selectedCategory][0].id);
    setIsPlaying(true);
    setIsAutoPlaying(true);
  }, [selectedCategory]);

  useEffect(() => {
    if (iconScrollRef.current && window.innerWidth < 768) {
      const activeIndex = partsData[selectedCategory].findIndex((p) => p.id === selectedPart);
      iconScrollRef.current.scrollTo({ left: activeIndex * 80, behavior: "smooth" });
    }
  }, [selectedPart, selectedCategory]);

  return (
    <section className="w-full bg-black text-white px-6 lg:px-20 font-[Manrope] lg:min-h-screen flex flex-col lg:justify-center lg:items-center py-10 lg:py-0">
      <div className="text-center mb-10 lg:mb-14">
        <h2 className="text-[32px] lg:text-[42px] !font-light pb-10 leading-snug tracking-tight">
          Evolving the drive with <span className="font-semibold">360-degree</span>
          &nbsp;
          <br className="hidden lg:block" />
          comprehensive solutions
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-[1400px]">
        <VehicleCategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="flex-1 relative flex flex-col items-center">
          <VehicleVideo
            videoRef={videoRef}
            videoContainerRef={videoContainerRef}
            src={`/assets/videos/vehicles/${selectedCategory}/${selectedPart}.mp4`}
            isAutoPlaying={isAutoPlaying}
          />

          <VehicleControls
            partsData={partsData[selectedCategory]}
            selectedPart={selectedPart}
            onSelectPart={(id) => {
              setSelectedPart(id);
              setIsAutoPlaying(false);
              setIsPlaying(true);
            }}
            iconScrollRef={iconScrollRef}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            progress={progress}
          />
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
