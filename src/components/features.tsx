import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Zap, Film, ShieldCheck, Gem } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Blazing Fast Speeds",
    description: "Our optimized engine ensures your videos are ready in a flash, at the fastest possible speed.",
  },
  {
    icon: <Film className="h-10 w-10 text-primary" />,
    title: "Any Format, Any Quality",
    description: "Choose from a wide range of formats and qualities, from 144p to 4K, including MP3 audio.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Secure & Private",
    description: "Your downloads are anonymous and encrypted. We don't store your data or download history.",
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: "Pristine Quality",
    description: "Download videos without any watermarks or compression, preserving the original quality.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-28 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-4 py-2 text-sm font-semibold tracking-wider uppercase text-primary">Core Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Everything You Need, and More
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              SocialSave is packed with powerful features to make your video downloading experience seamless and enjoyable.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-transparent border-secondary hover:border-primary/50 group transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.3)]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="flex flex-col items-center text-center gap-6 p-8">
                <div className="p-4 bg-secondary/50 rounded-full group-hover:bg-primary/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground px-8 pb-8">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
