// components/MobileBottomNav.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react'; // Import useRef and useEffect
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaRegLightbulb,
  FaChalkboardTeacher,
  FaBuilding,
  FaCaretUp,
  FaCaretDown
} from 'react-icons/fa';

const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Create a ref to attach to the dropdown's parent <li>
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // Effect for handling clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the dropdown ref exists and the click is outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null); // Close the dropdown
      }
    };

    // Add event listener when a dropdown is open
    if (openDropdown !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener when the component unmounts or dropdown closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]); // Re-run effect when openDropdown state changes

  const navSections = [
    {
      label: "Home",
      href: "/",
      icon: FaHome,
      type: "link" as const,
    },
    {
      label: "Content",
      icon: FaRegLightbulb,
      type: "dropdown" as const,
      items: [
        { href: "/blog", label: "Blog" },
        { href: "/discussion-forum", label: "Discussion Forum" },
        { href: "/quiz-contest", label: "Quiz Contest" },
      ],
    },
    {
      label: "Coaching",
      icon: FaChalkboardTeacher,
      type: "dropdown" as const,
      items: [
        { href: "/become-coach", label: "Become a Coach" },
        { href: "/coach-guidelines", label: "Coach Guidelines" },
        { href: "/one-on-one", label: "1-on-1 Consulting" },
        { href: "/book-session", label: "Book a Session" },
      ],
    },
    {
      label: "Company",
      icon: FaBuilding,
      type: "dropdown" as const,
      items: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/faq", label: "FAQ" },
        { href: "/membership", label: "Membership" },
      ],
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black text-white py-2 shadow-lg z-[1002] md:hidden">
      <ul className="flex justify-around items-end h-full relative">
        {navSections.map((section) => {
          const isActiveLink = section.type === "link" && pathname === section.href;
          const isActiveDropdown = section.type === "dropdown" &&
                                   section.items?.some(item => pathname === item.href);
          const isDropdownOpen = openDropdown === section.label;

          return (
            // Attach the ref to the <li> only if it's a dropdown, and conditionally set it for the currently open dropdown
            <li
              key={section.label}
              className="relative group"
              ref={section.type === "dropdown" && isDropdownOpen ? dropdownRef : null} // Attach ref only when dropdown is open
            >
              {section.type === "link" ? (
                <Link
                  href={section.href}
                  className={`flex flex-col items-center justify-center text-xs px-2 py-1 rounded-md
                    ${isActiveLink ? 'text-yellow-400 font-semibold' : 'text-white'}
                    hover:text-yellow-400 transition-colors duration-200
                  `}
                  onClick={() => setOpenDropdown(null)}
                >
                  <section.icon className="text-xl mb-1" />
                  <span>{section.label}</span>
                </Link>
              ) : (
                <button
                  onClick={() => toggleDropdown(section.label)}
                  className={`flex flex-col items-center justify-center text-xs px-2 py-1 rounded-md w-full
                    ${isDropdownOpen || isActiveDropdown ? 'text-yellow-400 font-semibold' : 'text-white'}
                    hover:text-yellow-400 transition-colors duration-200
                  `}
                >
                  <section.icon className="text-xl mb-1" />
                  <span className="flex items-center">
                    {section.label}
                    {isDropdownOpen ? (
                      <FaCaretDown className="ml-1 text-sm" />
                    ) : (
                      <FaCaretUp className="ml-1 text-sm" />
                    )}
                  </span>
                </button>
              )}

              {/* Dropdown menu for mobile (appears above the nav bar) */}
              {section.type === "dropdown" && isDropdownOpen && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white p-2 rounded-lg shadow-lg z-[1003] min-w-[150px]">
                  <ul className="space-y-1">
                    {section.items?.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-3 py-1 text-sm rounded-md hover:bg-gray-700
                            ${pathname === item.href ? 'text-yellow-400 font-semibold' : ''}`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;