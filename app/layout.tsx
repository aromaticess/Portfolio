import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Navbar } from "./components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelrahman Sherif | Full Stack Developer",
  description:
    "Portfolio of Abdelrahman Sherif - Full Stack Developer building modern web applications.",
  openGraph: {
    title: "Abdelrahman Sherif | Full Stack Developer",
    description:
      "Portfolio of Abdelrahman Sherif - Full Stack Developer building modern web applications.",
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
        className={`${spaceGrotesk.variable} min-h-screen antialiased font-sans`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
