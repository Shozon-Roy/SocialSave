
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Urbanist } from 'next/font/google';
import { DeveloperCredit } from '@/components/developer-credit';
import { ThemeProvider } from '@/components/theme-provider';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'SocialSave',
  description: 'Seamless Video Downloads from any platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased min-h-screen bg-background', urbanist.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <Toaster />
            <DeveloperCredit />
        </ThemeProvider>
      </body>
    </html>
  );
}
