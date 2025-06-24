"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/context/ThemeContext";
import Topbar from "../components/Topbar";
import SideBar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";
import MobileBottomNav from "../components/MobileBottomNav";
import { useState } from "react";
import MobileTopNav from "../components/MobileTopNav";

const inter = Inter({ subsets: ["latin"] });

const SIDEBAR_DESKTOP_WIDTH = "w-64";
const RIGHTBAR_DESKTOP_WIDTH = "w-64";
const TOPBAR_HEIGHT_CLASS = "h-16";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const mainContentMarginLeft = SIDEBAR_DESKTOP_WIDTH.replace("w-", "md:ml-");
  const mainContentMarginRight = RIGHTBAR_DESKTOP_WIDTH.replace("w-", "lg:mr-");

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex h-screen bg-background text-foreground transition-colors duration-300 ease-in-out relative">
            
            {/* Left Sidebar */}
            <SideBar
              isOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              sidebarWidth={SIDEBAR_DESKTOP_WIDTH}
            />

            {/* Right Sidebar (visible only on large screens) */}
            <div className="hidden lg:block fixed top-0 right-0 h-full w-64 bg-sidebar dark:bg-sidebar-dark shadow-lg z-[9999]">
              <Rightbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 mt-10">
              {/* Topbar */}
              <div className="flex justify-center">
                <div className="w-full max-w-xl px-4">
                  <Topbar />
                </div>
              </div>

              {/* Page content */}
              <main>
                <div className="max-w-4xl mx-auto">{children}</div>
              </main>
            </div>

                    <aside className={`
                fixed inset-y-0 right-0 ${RIGHTBAR_DESKTOP_WIDTH} bg-black shadow-lg z-[1001]
                transition-transform duration-300 ease-in-out
                hidden lg:block /* Hides it on md and smaller, shows on lg and up */
                /* If you want it to slide in/out, you can add state-based transform classes here */
                /* For now, it's always open when visible */
              `}>
                 <Rightbar /> {/* No isOpen/toggleRightbar props if it's always open when visible */}
              </aside>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-[1000] md:hidden"
                onClick={toggleSidebar}
              />
            )}

            {/* Bottom Nav for Mobile */}
            <MobileBottomNav />
            <MobileTopNav/>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
