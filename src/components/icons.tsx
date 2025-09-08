import type { SVGProps } from "react";

export function SpotifyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M15.09 12.63A5.03 5.03 0 0 0 9.03 10" />
      <path d="M16.14 9.88A9 9 0 1 0 7.86 14.14" />
      <path d="M12.91 16.03A5 5 0 0 0 8 13" />
    </svg>
  );
}

export function PinterestIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.5 12c0-2.3-1.3-4-4-4-2 0-3.5 1.4-3.5 3.1 0 1.1.5 2.1 1.6 2.4.1.1.2 0 .2-.2l.1-.6c0-.2-.1-.3-.3-.4-1-.8-1.1-2.2-1.1-3.1 0-2.7 2.4-5 5.3-5 3.3 0 5.2 2.1 5.2 4.8 0 3.3-1.9 5.7-4.4 5.7-1.4 0-2.5-1-2.2-2.3.3-1.1 1-2.3 1-3.1 0-1-1.3-1.8-2.4-1.8-1.8 0-3.2 1.8-3.2 4.1 0 1.4.6 2.5 1.5 3" />
      <path d="M12 21c-1.8-1.2-3-3.2-3-5.5" />
    </svg>
  );
}
