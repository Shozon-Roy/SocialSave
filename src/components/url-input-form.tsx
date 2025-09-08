"use client";

import { useEffect, useState, useRef } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Youtube, Video, Download, Clapperboard, Loader2, ClipboardPaste, Music2, LinkIcon, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { getVideoPlatform } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const initialState = {
  message: "",
  platform: null,
  url: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full md:w-auto bg-primary text-primary-foreground font-bold text-base py-7 px-8 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/40 focus:scale-95">
      {pending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <ArrowRight className="h-5 w-5" />}
    </Button>
  );
}

export function UrlInputForm() {
  const [state, formAction] = useActionState(getVideoPlatform, initialState);
  const { toast } = useToast();
  const [selectedQuality, setSelectedQuality] = useState("1080p");
  const [showDownload, setShowDownload] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.message !== "success") {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
      setShowDownload(false);
    }
    if (state.platform) {
        setShowDownload(true);
    }
  }, [state, toast]);

  const platformIcons: { [key: string]: React.ReactNode } = {
    YouTube: <Youtube className="h-8 w-8 text-red-600" />,
    Video: <Video className="h-8 w-8 text-sky-500" />,
    TikTok: <Music2 className="h-8 w-8" />,
    Default: <Clapperboard className="h-8 w-8 text-primary" />,
  };

  const getPlatformIcon = (platform: string | null) => {
    if (!platform) return platformIcons.Default;
    const p = platform.toLowerCase();
    if (p.includes('youtube')) return platformIcons.YouTube;
    if (p.includes('video')) return platformIcons.Video;
    if (p.includes('tiktok')) return platformIcons.TikTok;
    return platformIcons.Default;
  }
  
  const handleDownload = () => {
    toast({
        title: "Starting Download",
        description: `Your ${state.platform} video in ${selectedQuality} is being prepared.`,
    });
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const input = formRef.current?.elements.namedItem('url') as HTMLInputElement;
      if (input) {
        input.value = text;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Failed to paste',
        description: 'Could not read from clipboard. Please paste manually.',
      });
    }
  };

  return (
    <div className="w-full max-w-3xl space-y-6">
      <Card className="bg-card/50 dark:bg-background/50 border-white/10 rounded-2xl shadow-2xl shadow-black/20 backdrop-blur-sm">
        <CardContent className="p-4 md:p-5">
          <form ref={formRef} action={formAction} className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
                <LinkIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    id="url"
                    name="url"
                    type="url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    required
                    className="bg-transparent border-transparent text-base h-16 pl-14 pr-20 rounded-full focus:ring-2 focus:ring-primary/50"
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={handlePaste}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full text-muted-foreground hover:text-primary-foreground hover:bg-black/10 dark:hover:bg-white/10"
                >
                    <ClipboardPaste className="h-6 w-6" />
                    <span className="sr-only">Paste from clipboard</span>
                </Button>
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <div className={cn("transition-all duration-500 ease-in-out", showDownload ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden")}>
        {state.platform && (
          <Card className="w-full max-w-3xl animate-in fade-in-0 slide-in-from-bottom-5 duration-500 bg-card/50 dark:bg-background/50 border-white/10 rounded-2xl shadow-2xl shadow-black/20 backdrop-blur-sm">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                  {getPlatformIcon(state.platform)}
                  <h3 className="text-xl font-semibold">{state.platform} Video Detected</h3>
              </div>
               <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex-1 w-full">
                      <label htmlFor="quality-select" className="text-sm text-muted-foreground mb-2 block">Select quality:</label>
                      <Select value={selectedQuality} onValueChange={setSelectedQuality}>
                          <SelectTrigger id="quality-select" className="w-full h-14 bg-secondary border-border rounded-lg text-base focus:ring-2 focus:ring-primary/50">
                              <SelectValue placeholder="Select quality" />
                          </SelectTrigger>
                          <SelectContent>
                              <SelectItem value="1080p">1080p (Full HD)</SelectItem>
                              <SelectItem value="720p">720p (HD)</SelectItem>
                              <SelectItem value="480p">480p (SD)</SelectItem>
                              <SelectItem value="mp3">MP3 (Audio Only)</SelectItem>
                          </SelectContent>
                      </Select>
                  </div>
                  <Button onClick={handleDownload} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground mt-auto h-14 px-8 self-end font-bold text-base rounded-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 focus:scale-95">
                      <Download className="mr-2 h-5 w-5" />
                      Download
                  </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
