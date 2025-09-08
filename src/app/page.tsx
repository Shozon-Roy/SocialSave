import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SocialSlider } from "@/components/social-slider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1" id="home">
        <HeroSection />
        <SocialSlider />
        <Features />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
