import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, comfortaa, dancingScript } from "@/lib/fonts";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Breno Freire - Senior Full Stack Engineer",
  description:
    "Soluções escaláveis e inovadoras com tecnologias AWS | NodeJs | Javascript | React | Frontend | Backend | Angular | VueJs.",
  keywords: "desenvolvedor fullstack, react, nextjs, aws, typescript, nodejs",
  generator: "brenofreire.dev@gmail.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${comfortaa.variable} ${dancingScript.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
