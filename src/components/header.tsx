
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-4 lg:px-6 h-20 flex items-center bg-background/80 backdrop-blur-xl border-b border-secondary">
      <Link href="/" className="flex items-center justify-center gap-3" prefetch={false}>
        <Logo className="w-40" />
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link href="/#features" className="text-sm font-medium hover:text-primary underline-offset-4 text-muted-foreground transition-colors hidden md:inline-block" prefetch={false}>
          Features
        </Link>
        <Link href="/faq" className="text-sm font-medium hover:text-primary underline-offset-4 text-muted-foreground transition-colors hidden md:inline-block" prefetch={false}>
          FAQ
        </Link>
        <ThemeToggle />
        <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/40 focus:scale-95">
          <Link href="/download">Download Now</Link>
        </Button>
      </nav>
    </header>
  );
}
