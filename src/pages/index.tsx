import { NextPage } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import VehicleShowcase from "@/sections/VehicleShowcase";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Better performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const Home: NextPage = () => {
  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-black`}
    >
      <Navbar />
      <HeroSection />
      <VehicleShowcase />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Home;
