import AboutSection from "../../Components/AboutSection";
import HeroSection from "../../Components/HeroSection";
import ProjectSection from "../../Components/ProjectSection";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Zohaib Khan"
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection/>
      <ProjectSection/>
    </main>
  );
}
