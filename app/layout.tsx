import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cooperative Codebase",
  description: "Landing page for cooperativecodebase.com",
  openGraph: {
    type: "website",
    url: "https://cooperativecodebase.com",
    title: "Cooperative Codebase",
    description: "Landing page for cooperativecodebase.com",
    siteName: "Cooperative Codebase",
    images: [{ url: "https://cooperativecodebase.com/images/logo.png" }],
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
