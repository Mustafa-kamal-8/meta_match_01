// components/Leftbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserCircle, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useTheme } from '../components/context/ThemeContext';

interface LeftbarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  sidebarWidth: string;
}

const Leftbar: React.FC<LeftbarProps> = ({ isOpen, toggleSidebar, sidebarWidth }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is typically 768px
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleDropdown = (label: string) => {
    if (!isMobile) {
      setOpenDropdown((prev) => (prev === label ? null : label));
    }
  };

  const routes = [
    {
      label: "Main",
      items: [
        { href: "/", label: "Home" },
        { href: "/courses", label: "Courses" },
        { href: "/live-classes", label: "Live Classes" },
        { href: "/recorded-classes", label: "Recorded Classes" },
      ],
    },
    {
      label: "Content",
      items: [
        { href: "/blog", label: "Blog" },
        { href: "/discussion-forum", label: "Discussion Forum" },
        { href: "/quiz-contest", label: "Quiz Contest" },
      ],
    },
    {
      label: "Coaching",
      items: [
        { href: "/become-coach", label: "Become a Coach" },
        { href: "/coach-guidelines", label: "Coach Guidelines" },
        { href: "/one-on-one", label: "1-on-1 Consulting" },
        { href: "/book-session", label: "Book a Session" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/faq", label: "FAQ" },
        { href: "/membership", label: "Membership" },
      ],
    },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarWidth} /* Apply the dynamic width (w-64) */
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} /* Mobile: Slide in/out */
        md:translate-x-0 md:block md:shadow-none /* Desktop: Always visible, fixed, no shadow */
        z-[1001] /* High z-index for mobile overlay */
        md:z-auto /* On desktop, z-index can be natural to fit with other content */
        bg-sidebar-DEFAULT text-sidebar-foreground /* Use defined colors from your tailwind config's 'sidebar' object */
      `}
    >
      {/* MetaMatch Logo */}
      <div className={`p-4 flex items-center justify-center h-16
          bg-primary text-primary-foreground
          transition-colors duration-300 ease-in-out`}>
        <Link href="/" className="text-3xl font-bold">
          <span className="text-blue-500">Meta</span>
          <span className="text-primary-foreground">Match</span>
        </Link>
      </div>

      {/* Navigation content */}
      <div className="h-[calc(100%-64px)] overflow-y-auto">
        <nav className="flex flex-col p-4">
          {routes.map((section) => {
            const isCurrentDropdownOpen = isMobile || openDropdown === section.label;

            return (
              <div key={section.label} className="mb-2">
                <button
                  onClick={() => toggleDropdown(section.label)}
                  className={`flex justify-between items-center w-full py-2 px-3 rounded-md transition-colors duration-200
                    text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
                    font-semibold text-lg
                    ${isMobile ? 'cursor-default' : ''}
                  `}
                >
                  <span>{section.label}</span>
                  {!isMobile && (isCurrentDropdownOpen ?
                    <FaCaretUp className="text-muted-foreground" /> :
                    <FaCaretDown className="text-muted-foreground" />)}
                </button>

                {isCurrentDropdownOpen && (
                  <ul className="mt-1 space-y-0.5 pl-4">
                    {section.items.map((route) => (
                      <li key={route.href}>
                        <Link
                          href={route.href}
                          onClick={() => {
                            if (window.innerWidth < 768) {
                              toggleSidebar();
                            }
                            setOpenDropdown(null);
                          }}
                          className={`block py-1.5 px-2 rounded-md transition-colors duration-200 text-base
                            text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
                            ${pathname === route.href ?
                              'bg-sidebar-accent text-sidebar-accent-foreground font-medium' : ''
                            }`}
                        >
                          {route.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Leftbar;