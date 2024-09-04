"use client";
import "@/styles/globals.css";
import clsx from "clsx";
import React from "react";
import { useTheme } from "next-themes";

import { Providers } from "./providers";

import { fontRubik as fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <html suppressHydrationWarning className={resolvedTheme} lang="en">
      <head>
        <title />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-gradient-to-tr",
          fontSans.className,
          "from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90% dark:from-indigo-900 dark:from-10% dark:via-sky-900 dark:via-30% dark:to-emerald-900 dark:to-90%",
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto flex-1 py-6">{children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              <span className="text-default-600">SkyTree Project</span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
