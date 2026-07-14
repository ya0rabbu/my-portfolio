import SplashScreen from "@/components/layout/SplashScreen";
import SectionNav from "@/components/ui/SectionNav";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import CraftedByMeSection from "@/sections/CraftedByMeSection";
import CTASection from "@/sections/CTASection";
export default function Home() {
  return (
    <SplashScreen>
      <main className="flex flex-col">
        <SectionNav />
        <HeroSection />
        <AboutSection />
        <CraftedByMeSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProjectsSection />
        <CTASection />
      </main>
    </SplashScreen>
  );
}