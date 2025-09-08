
"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function DeveloperCredit() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full overflow-hidden shadow-lg border-2 border-primary/50 transition-transform duration-300 hover:scale-110 hover:shadow-primary/30 cursor-pointer">
            <Image
              src="https://i.postimg.cc/L85HPsYz/shozonroyimage.png"
              alt="Shozon Roy"
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="bg-background/80 backdrop-blur-sm border-primary/20 text-foreground"
        >
          <p className="font-bold">Shozon Roy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
