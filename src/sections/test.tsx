import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import clsx from "clsx";
import gsap from "gsap";



const VehicleShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<"passenger" | "commercial">("passenger");
  const [selectedPart, setSelectedPart] = useState("body");
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      id: "passenger",
      title: "Passenger vehicles",
      description: "Revving up innovation from interior to exterior.",
    },
    {
      id: "commercial",
      title: "Commercial vehicles",
      description: "Advancing engineering for heavy-duty vehicles.",
    },
  ];

  const partsData: Record<string, { id: string; label: string; icon: string }[]> = {
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
    const currentIndex = partsData[selectedCategory].findIndex(part => part.id === selectedPart);
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
      video.play().catch(e => console.error("Auto-play failed:", e));
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

  const getIndicatorTop = () => {
    const index = categories.findIndex(cat => cat.id === selectedCategory);
    const spacing = 140; // adjust according to your design
    return index * spacing;
  };





  return (
    <section className="w-full bg-black text-white py-14 px-6 lg:px-20 font-[Manrope]">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-[32px] lg:text-[42px] font-light leading-snug tracking-tight">
          Evolving the drive with{" "}
          <span className="font-semibold">360-degree</span>
          <br className="hidden lg:block" />
          comprehensive solutions
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Tabs Column */}
        <div className="lg:w-[300px] flex flex-col justify-center relative">
          {/* Wrap categories in one container for line */}
          <div className="relative pl-6 flex flex-col justify-center">
            {/* Full track line matching tabs height */}
            <div
              className="absolute left-0 w-0.5 bg-gray-600 rounded"
              style={{
                top: 0,
                height: categories.length * 120 + "px", // total height of all tabs
              }}
            ></div>

            {/* Active indicator line */}
            <div
              className="absolute left-0 w-0.5 bg-white rounded transition-all duration-300"
              style={{
                top: getIndicatorTop(),
                height: "120px",
              }}
            ></div>

            {/* Category buttons */}
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as "passenger" | "commercial")}
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

        {/* Right Video Column */}
        <div className="flex-1 relative flex flex-col">
          <div
            ref={videoContainerRef}
            className="w-auto max-h-[250px]  flex items-center justify-center bg-black rounded-lg overflow-hidden"
          >
            <video
              ref={videoRef}
              src={`/assets/videos/vehicles/${selectedCategory}/${selectedPart}.mp4`}
              className="w-auto max-h-[250px] object-contain"
              autoPlay
              loop={!isAutoPlaying}
              muted
              playsInline
            />
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between w-full">
            <div className="flex-1 flex items-center justify-center gap-4 md:gap-6">
              {partsData[selectedCategory].map((part) => (
                <div
                  key={part.id}
                  onClick={() => {
                    setSelectedPart(part.id);
                    setIsAutoPlaying(false);
                    setIsPlaying(true);
                  }}
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

            <div className="ml-4">
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
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
