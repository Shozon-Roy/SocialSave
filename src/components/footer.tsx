
import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-white/5 w-full">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3" prefetch={false}>
              <Logo className="w-40" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              The ultimate video downloader for all your favorite platforms. Fast, free, and high-quality.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground tracking-wider">Product</h3>
              <Link href="/download" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                Download
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-foreground tracking-wider">Legal</h3>
              <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SocialSave. All rights reserved.
          </p>
           <p className="text-sm text-muted-foreground">
            Developed By Shozon Roy
          </p>
        </div>
      </div>
    </footer>
  );
}
