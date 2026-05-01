import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mustaphamele.dev"),
  title: {
    default: "Mustapha Mele Mustapha | Founder, Product Builder & Tech Creator",
    template: "%s | Mustapha Mele Mustapha"
  },
  description:
    "Personal portfolio of Mustapha Mele Mustapha, a Nigerian tech student, founder of AxisVTU, creator of MMTechGlobe, and young entrepreneur building fintech, software, and content in public.",
  keywords: [
    "Mustapha Mele Mustapha",
    "AxisVTU",
    "MMTechGlobe",
    "Nigerian tech founder",
    "frontend developer",
    "Flutter developer",
    "fintech builder",
    "young tech entrepreneur"
  ],
  authors: [{ name: "Mustapha Mele Mustapha" }],
  creator: "Mustapha Mele Mustapha",
  openGraph: {
    title: "Mustapha Mele Mustapha | Founder & Product Builder",
    description:
      "Building AxisVTU, MMTechGlobe, and public technology products from Nigeria for a global audience.",
    url: "https://mustaphamele.dev",
    siteName: "Mustapha Mele Mustapha",
    images: [
      {
        url: "/images/founder-workspace.png",
        width: 1200,
        height: 800,
        alt: "Premium founder workspace representing Mustapha Mele Mustapha's portfolio"
      }
    ],
    locale: "en_NG",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustapha Mele Mustapha | Founder & Product Builder",
    description:
      "Nigerian tech student, founder of AxisVTU, creator of MMTechGlobe, building in public.",
    images: ["/images/founder-workspace.png"]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
