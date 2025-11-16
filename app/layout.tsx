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
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
