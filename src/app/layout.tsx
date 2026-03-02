import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "SolFaces — Deterministic Wallet Avatars & Names for Solana",
  description:
    "Every Solana wallet generates a unique face and name. Zero dependencies, 2.56B combinations, 11 themes. React, Node, Python, CDN.",
  keywords: [
    "solana",
    "avatar",
    "wallet",
    "identity",
    "deterministic",
    "react",
    "npm",
    "solnames",
    "pfp",
  ],
  openGraph: {
    title: "SolFaces — Deterministic Wallet Avatars & Names for Solana",
    description: "Same wallet = same face = same name. Forever.",
    siteName: "SolFaces",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SolFaces",
    description: "Deterministic wallet avatars & names for Solana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="default">{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
