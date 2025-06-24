// layout.tsx
"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/context/ThemeContext";
import TopBar from "../components/Topbar";
import SideBar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";
import MobileBottomNav from "../components/MobileBottomNav";

import { useState, useEffect, useMemo } from "react";

const inter = Inter({ subsets: ["latin"] });

const SIDEBAR_WIDTH_CLASS = "w-64";
const RIGHTBAR_WIDTH_CLASS = "w-64";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Memoized margins to prevent unnecessary recalculations
  const mainContentMarginLeft = useMemo(
    () => (!isMobile ? SIDEBAR_WIDTH_CLASS.replace("w-", "ml-") : ""),
    [isMobile]
  );

  const mainContentMarginRight = useMemo(
    () => (!isMobile ? RIGHTBAR_WIDTH_CLASS.replace("w-", "mr-") : ""),
    [isMobile]
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300 ease-in-out">
            {/* Left Sidebar (Only visible on desktop OR when explicitly opened on mobile) */}
            {!isMobile || isSidebarOpen ? (
              <SideBar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                sidebarWidth={SIDEBAR_WIDTH_CLASS}
              />
            ) : null}

            {/* Main Content Area */}
            <div
              className={`flex flex-col flex-grow min-h-screen transition-all duration-300 ease-in-out
                ${mainContentMarginLeft} 
                ${mainContentMarginRight} 
                pb-${isMobile ? "16" : "0"} /* Adjust bottom padding dynamically */
              `}
            >
              {/* TopBar */}
              <div className="w-full">
                <TopBar toggleSidebar={toggleSidebar} />
              </div>

              {/* Centered Main Content */}
              <main className="flex-grow flex items-center justify-center p-5 overflow-y-auto">
                <div className="w-full max-w-3xl mx-auto">{children}</div>
              </main>
            </div>

            {/* Right Sidebar (Only visible on desktop) */}
            {!isMobile && (
              <div
                className={`fixed top-0 right-0 h-full ${RIGHTBAR_WIDTH_CLASS} bg-black shadow-lg z-[1001] transition-transform duration-300 ease-in-out`}
              >
                <Rightbar />
              </div>
            )}

            {/* Mobile Overlay for Left Sidebar */}
            {isSidebarOpen && isMobile && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
                onClick={toggleSidebar}
              ></div>
            )}

            {/* Mobile Bottom Navigation Bar */}
            <MobileBottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
