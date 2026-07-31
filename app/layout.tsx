import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

// Set NEXT_PUBLIC_SITE_URL in Vercel once a custom domain is attached; otherwise
// this falls back to the deployment URL Vercel injects at build time.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portofolio",
  description: "A website that shows what I am capable of",
  openGraph: {
    title: "Portofolio",
    description: "A website that shows what I am capable of",
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio",
    description: "A website that shows what I am capable of",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // next-themes sets the theme class on <html> from an inline script that runs
    // before hydration, so the server markup intentionally differs here.
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
