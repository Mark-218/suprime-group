import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-16 min-h-[50vh] md:min-h-screen overflow-hidden flex items-center justify-center text-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/Hero_BG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-4">
        <h5 className="text-white text-lg md:text-xl font-light mb-4">
          Driven by performance
        </h5>
        <h2 className="text-white text-xl md:text-2xl font-semibold max-w-2xl mx-auto leading-snug">
          Soft trims and <span className="text-[#00bfff]">NVH solutions</span>
          <br className="hidden lg:block" />
          <span className="font-extralight"> for seamless rides</span>
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
