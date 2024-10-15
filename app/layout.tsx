import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Varshith M - Software Engineer",
  description: "Personal Portfolio :-)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={`antialiased w-screen h-screen relative overflow-hidden ${GeistSans.variable} ${GeistMono.variable} font-mono`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedGridPattern
            numSquares={50}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
          <Navbar />
          <main className="relative h-[calc(100vw-300px)] w-screen flex flex-col items-center justify-center">
            <section className="w-full h-[calc(100vh - 87px)] flex items-start justify-center fixed top-0 px-24">
              <div className="relative h-full w-full max-w-[1350px] flex justify-start">
                <Header />
                {children}
              </div>
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
