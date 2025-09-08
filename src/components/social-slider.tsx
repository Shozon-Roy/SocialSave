import { Youtube, Twitch, Twitter, Facebook, Instagram, Music } from "lucide-react";
import { PinterestIcon, SpotifyIcon } from "./icons";

const socialPlatforms = [
  { name: "YouTube", icon: Youtube },
  { name: "Twitch", icon: Twitch },
  { name: "Twitter", icon: Twitter },
  { name: "Facebook", icon: Facebook },
  { name: "Instagram", icon: Instagram },
  { name: "Pinterest", icon: PinterestIcon },
  { name: "TikTok", icon: Music },
  { name: "Spotify", icon: SpotifyIcon },
];

export function SocialSlider() {
  return (
    <section className="w-full pb-20 md:pb-28 lg:pb-32 bg-background">
        <div className="container px-4 md:px-6">
            <h2 className="text-center text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-12">
                Supports All Major Platforms
            </h2>
            <div 
              className="relative flex overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)'
              }}
            >
              <div className="flex animate-infinite-scroll">
                {[...socialPlatforms, ...socialPlatforms, ...socialPlatforms, ...socialPlatforms].map((platform, index) => (
                    <div key={`${platform.name}-${index}`} className="group flex-shrink-0 flex items-center justify-center w-40 gap-3 text-muted-foreground hover:text-foreground transition-all duration-300">
                        <platform.icon className="h-8 w-8 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                    </div>
                ))}
              </div>
            </div>
        </div>
    </section>
  );
}
