"use client";
import { UrlInputForm } from "./url-input-form";

export function HeroSection() {
  return (
    <section 
      id="download" 
      className="relative w-full h-[80vh] min-h-[600px] lg:h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] animate-aurora"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              The Ultimate Video Downloader
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Paste any video link and get your download in seconds. High quality, fast, and free. Supports YouTube, TikTok, Instagram, and more.
            </p>
          </div>
          <UrlInputForm />
        </div>
      </div>
    </section>
  );
}
