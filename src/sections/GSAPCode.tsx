import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#container",
                start: "top top",
                end: "bottom top", // Extended end for better pinning
                scrub: 1,
                markers: true, // Keep for debugging, remove for production
            },
        });

        // 1. Animate the heading
        tl.fromTo(
            "#heading",
            { y: window.innerHeight / 2, opacity: 0 }, // start at bottom/center
            { y: 200, opacity: 1, duration: 1 },      // move up to top 200px
            "start"
        );


        // 2. Animate the entire video container section
        // tl.fromTo(
        //     "#videocontainer",
        //     { y: 200, opacity: 0 },
        //     { y: 100, opacity: 1, duration: 1.5 }, // Slightly longer duration
        //     "start+=0.5" // Start this animation 0.5s after the 'start' label
        // );

        // // 3. Animate the video scaling from big to small
        // tl.fromTo(
        //     ".small-video",
        //     { scale: 1.5, opacity: 0 }, // Start bigger and invisible
        //     { scale: 1, opacity: 1, duration: 1 }, // Scale to normal size and fade in
        //     "start+=1" // Start this 1s after the 'start' label for overlap
        // );


        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    }, []);



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#videocontainer",
                start: "top center",
                end: "bottom center", // Extended end for better pinning
                pin: true,
                scrub: 1,
                markers: true, // Keep for debugging, remove for production
            },
        });



        // 3. Animate the video scaling from big to small
        // tl.fromTo(
        //     ".small-video",
        //     { scale: 1.5, opacity: 0 }, // Start bigger and invisible
        //     { scale: 1, opacity: 1, duration: 1 }, // Scale to normal size and fade in
        //     "start+=1" // Start this 1s after the 'start' label for overlap
        // );


        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    }, []);



    return (
        <section
            className="w-full bg-black text-white py-14 px-6 lg:px-20 font-[Manrope]">
            {/* Heading */}
            <div className="text-center mb-16" id="container">
                <h2
                    className="text-[32px] lg:text-[42px] font-light leading-snug tracking-tight"
                    id="heading">
                    Evolving the drive with{" "}
                    <span className="font-semibold">360-degree</span>
                    <br className="hidden lg:block" />
                    comprehensive solutions
                </h2>
            </div>
        </section>
    );
};
export default VehicleShowcase;