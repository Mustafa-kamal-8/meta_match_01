// components/MobileTopNav.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react'; // Import useRef and useEffect
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaRegLightbulb,
  FaChalkboardTeacher,
  FaUserCog,
  FaCaretUp,
  FaCaretDown,
  FaSignInAlt
} from 'react-icons/fa';

const MobileTopNav: React.FC = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Create a ref to attach to the currently open dropdown's parent <li>
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = (label: string) => {
    console.log(`Toggling dropdown for: ${label}. Current state: ${openDropdown}`);
    setOpenDropdown((prev) => {
      const newState = prev === label ? null : label;
      console.log(`New dropdown state: ${newState}`);
      return newState;
    });
  };

  // Effect for handling clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log('Click detected. Target:', event.target);
      // If the dropdown ref exists and the click is outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        console.log('Click outside detected. Closing dropdown.');
        setOpenDropdown(null); // Close the dropdown
      } else if (dropdownRef.current) {
        console.log('Click inside dropdown area.');
      }
    };

    // Add event listener when a dropdown is open
    if (openDropdown !== null) {
      console.log('Dropdown is open. Adding global mousedown listener.');
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      console.log('No dropdown open. Removing global mousedown listener if any.');
    }

    // Cleanup the event listener when the component unmounts or openDropdown state changes
    return () => {
      if (openDropdown !== null) { // Only remove if it was added
        console.log('Cleaning up mousedown listener.');
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [openDropdown]); // Re-run effect when openDropdown state changes

  const navSections = [
    {
      label: "Login",
      icon: FaSignInAlt,
      type: "link" as const,
      href: "/login",
    },
    {
      label: "Admin",
      icon: FaUserCog,
      type: "dropdown" as const,
      items: [
        { href: "/admin-dashboard", label: "Dashboard" },
        { href: "/admin-appointment", label: "Appointments" },
        { href: "/timing", label: "My Timings" },
        { href: "/courses", label: "My Reviews" },
        { href: "/payments", label: "Payment" },
        { href: "/accounts", label: "Account Settings" },
        { href: "/quizzes", label: "Logout" },
      ],
    },
    {
      label: "User",
      icon: FaChalkboardTeacher,
      type: "dropdown" as const,
      items: [
           { href: "/dashboard", label: "Dashboard" },
        { href: "/orders", label: "Order History" },
        { href: "/e-course", label: "Enrolled Courses" },
        { href: "/wishlist", label: "Wishlist" },
        { href: "/quizzes", label: "My Quiz Attempts" },
        { href: "/quizzes", label: "Logout" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white py-1 shadow-lg z-[1002] md:hidden">
      <ul className="flex justify-around items-end h-full relative">
        {navSections.map((section) => {
          const isActiveLink = section.type === "link" && pathname === section.href;
          const isActiveDropdown = section.type === "dropdown" &&
                                   section.items?.some(item => pathname === item.href);
          const isDropdownOpen = openDropdown === section.label;

          return (
            // Attach the ref to the <li> only if it's a dropdown, and conditionally set it for the currently open dropdown
            // This ensures only one dropdown's ref is active at a time for the click-outside logic
            <li
              key={section.label}
              className="relative group"
              ref={section.type === "dropdown" && isDropdownOpen ? dropdownRef : null}
            >
              {section.type === "link" ? (
                <Link
                  href={section.href}
                  className={`flex flex-col items-center justify-center text-xs px-2 py-1 rounded-md
                    ${isActiveLink ? 'text-yellow-400 font-semibold' : 'text-white'}
                    hover:text-yellow-400 transition-colors duration-200
                  `}
                  onClick={() => setOpenDropdown(null)} // Close any open dropdown if a direct link is clicked
                >
                  <section.icon className="text-lg mb-0.5" />
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
                  <section.icon className="text-lg mb-0.5" />
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

              {/* Dropdown menu for mobile (appears below the nav bar) */}
              {section.type === "dropdown" && isDropdownOpen && (
                // Positioned below the top navigation bar
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white p-2 rounded-lg shadow-lg z-[1003] min-w-[150px]">
                  <ul className="space-y-1">
                    {section.items?.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-3 py-1 text-sm rounded-md hover:bg-gray-700
                            ${pathname === item.href ? 'text-yellow-400 font-semibold' : ''}`}
                          onClick={() => setOpenDropdown(null)} // Close dropdown after clicking a link
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

export default MobileTopNav;