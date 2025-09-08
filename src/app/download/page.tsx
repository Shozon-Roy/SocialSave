import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ClipboardPaste, ListVideo, Download as DownloadIcon } from "lucide-react";

const steps = [
  {
    icon: <ClipboardPaste className="h-10 w-10 text-primary" />,
    title: "1. Paste Your Link",
    description: "Simply paste the URL of the video you want to download into the input field at the top of the page. You can also use the convenient paste button to automatically insert the link from your clipboard.",
  },
  {
    icon: <ArrowRight className="h-10 w-10 text-primary" />,
    title: "2. Initiate the Search",
    description: "After pasting the link, click the arrow button to begin. Our proprietary AI engine will instantly analyze the URL, identify the video, and prepare a list of all available download formats and quality options.",
  },
  {
    icon: <ListVideo className="h-10 w-10 text-primary" />,
    title: "3. Choose Your Quality",
    description: "Once the options appear, select your desired video resolution or audio format. We support a wide range, from high-definition 1080p video to compressed, high-quality MP3 audio files.",
  },
  {
    icon: <DownloadIcon className="h-10 w-10 text-primary" />,
    title: "4. Download Your File",
    description: "With your quality selected, just click the final 'Download' button. Your file will be prepared and will begin downloading to your device immediately, securely, and completely free of charge.",
  },
];


export default function DownloadPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="py-20 md:py-28 lg:py-32 bg-secondary/20">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                            How It Works
                        </h1>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                           Our download process is designed to be simple, fast, and reliable. Follow these four easy steps to get started. SocialSave is engineered to handle video and audio from a vast array of online platforms.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-16">
                    {steps.map((step, index) => (
                        <Card 
                          key={step.title} 
                          className="bg-transparent border-secondary hover:border-primary/50 group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)]"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <CardHeader className="flex flex-col items-center text-center gap-6 p-8">
                            <div className="p-4 bg-secondary/50 rounded-full group-hover:bg-primary/10 transition-colors duration-300">
                              {step.icon}
                            </div>
                            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{step.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="text-center text-muted-foreground px-8 pb-8">
                            <p>{step.description}</p>
                          </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
