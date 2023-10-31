import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";

// components
import { Navbar } from "@/components/shared";

// containers
import { ThemeProvider } from "@/containers";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rachit Bharadwaj",
  description:
    "Rachit Bharadwaj is a NextJS developer based in India. He is a full stack developer and has worked on multiple projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
