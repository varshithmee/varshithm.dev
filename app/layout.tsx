import type {Metadata} from "next";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";
import {EB_Garamond} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
	title: "Varshith M - Software Engineer",
	description: "Personal Portfolio :-)",
};

const Garamond = EB_Garamond({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-garamond",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${Garamond.variable} `}
    >
      <body
        className={`antialiased w-screen bg-black overflow-x-hidden relative ${GeistSans.variable} ${GeistMono.variable} font-mono`}
      >
      
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
