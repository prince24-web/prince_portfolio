import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.js (if using Next.js App Router)
export const metadata = {
  title: "Prince Chidera | Portfolio",
  description: "Full-Stack Developer building modern web apps with Next.js, Tailwind, Supabase, and Python. Passionate about EdTech, startups, and innovation.",
  icons: {
    icon: "/favicon.ico", // points to /public/favicon.ico
  },
  keywords: [
    "Prince Chidera",
    "Portfolio",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Supabase",
    "Python",
    "Tailwind",
    "EdTech"
  ],
  authors: [{ name: "Prince Chidera", url: "https://your-portfolio.com" }],
  openGraph: {
    title: "Prince Chidera | Portfolio",
    description: "Full-Stack Developer building modern web apps with Next.js, Tailwind, Supabase, and Python.",
    url: "https://your-portfolio.com",
    siteName: "Prince Chidera Portfolio",
    images: [
      {
        url: "/avatar.png", // your avatar here
        width: 800,
        height: 800,
        alt: "Prince Chidera Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Chidera | Portfolio",
    description: "Building modern apps with Next.js, Supabase, Tailwind, and Python.",
    images: ["/avatar.png"], // same avatar for preview
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
