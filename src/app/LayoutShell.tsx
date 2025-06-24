'use client';

import { useState } from "react";
import SideBar from "../components/Leftbar";
import Rightbar from "../components/rightbar";
import Topbar from "../components/Topbar";
import MobileBottomNav from "../components/MobileBottomNav";
import MobileTopNav from "../components/MobileTopNav";

const SIDEBAR_DESKTOP_WIDTH = "w-64";
const RIGHTBAR_DESKTOP_WIDTH = "w-64";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-background text-foreground transition-colors duration-300 ease-in-out relative">
      <SideBar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sidebarWidth={SIDEBAR_DESKTOP_WIDTH}
      />

      <div className="hidden lg:block fixed top-0 right-0 h-full w-64 bg-sidebar dark:bg-sidebar-dark shadow-lg z-[9999]">
        <Rightbar />
      </div>

      <div className="flex-1 mt-10">
        <div className="flex justify-center">
         <div className="w-full max-w-xl px-4">
  <Topbar toggleSidebar={toggleSidebar} />
</div>

        </div>
        <main>
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1000] md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <MobileBottomNav />
      <MobileTopNav />
    </div>
  );
}
