// components/Rightbar.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaUserCog,
  FaUser,
  FaCaretUp,
  FaCaretDown,
  FaTachometerAlt,
  FaCalendarAlt,
  FaClock,
  FaStar,
  FaMoneyBillAlt,
  FaCogs,
  FaSignOutAlt,
  FaShoppingCart,
  FaBookOpen,
  FaHeart,
  FaQuestionCircle
} from 'react-icons/fa';

interface RightbarProps {
  isOpen?: boolean;
  toggleRightbar?: () => void;
}

const Rightbar: React.FC<RightbarProps> = ({ isOpen, toggleRightbar }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = (label: string) => {
    console.log(`[Rightbar] Toggling dropdown for: ${label}. Current state: ${openDropdown}`);
    setOpenDropdown((prev) => {
      const newState = prev === label ? null : label;
      console.log(`[Rightbar] New dropdown state: ${newState}`);
      return newState;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        console.log('[Rightbar] Click outside dropdown detected. Closing dropdown.');
        setOpenDropdown(null);
      }
    };

    if (openDropdown !== null) {
      console.log('[Rightbar] Dropdown is open. Adding global mousedown listener.');
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      console.log('[Rightbar] No dropdown open. Removing global mousedown listener if any.');
    }

    return () => {
      if (openDropdown !== null) {
        console.log('[Rightbar] Cleaning up mousedown listener.');
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [openDropdown]);

  const navSections = [
    {
      label: "Admin",
      icon: FaUserCog,
      type: "dropdown" as const,
      items: [
        { href: "/admin-dashboard", label: "Dashboard", icon: FaTachometerAlt },
        { href: "/admin-appointment", label: "Appointments", icon: FaCalendarAlt },
        { href: "/timing", label: "My Timings", icon: FaClock },
        { href: "/courses", label: "My Reviews", icon: FaStar },
        { href: "/payments", label: "Payment", icon: FaMoneyBillAlt },
        { href: "/accounts", label: "Account Settings", icon: FaCogs },
        { href: "/login", label: "Logout", icon: FaSignOutAlt },
      ],
    },
    {
      label: "User",
      icon: FaUser,
      type: "dropdown" as const,
      items: [
        { href: "/dashboard", label: "Dashboard", icon: FaTachometerAlt },
        { href: "/orders", label: "Order History", icon: FaShoppingCart },
        { href: "/e-course", label: "Enrolled Courses", icon: FaBookOpen },
        { href: "/wishlist", label: "Wishlist", icon: FaHeart },
        { href: "/quizzes", label: "My Quiz Attempts", icon: FaQuestionCircle },
        { href: "/logout", label: "Logout", icon: FaSignOutAlt },
      ],
    },
  ];

  return (
    <aside className="h-full w-full p-4 text-gray-800 dark:text-white">
      <div className="p-4">
        {toggleRightbar && (
          <button onClick={toggleRightbar} className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Close</button>
        )}
      </div>
      <nav className="p-4">
        <ul>
          {navSections.map((section) => {
            const isDropdownOpen = openDropdown === section.label;
            const isActiveDropdown = section.items?.some(item => pathname === item.href);

            return (
              <li
                key={section.label}
                className="relative mb-2"
                ref={isDropdownOpen ? dropdownRef : null}
              >
                {/* Dropdown Button */}
                <button
                  onClick={() => toggleDropdown(section.label)}
                  className={`flex items-center justify-between w-full px-3 py-2 rounded-md
                    ${isDropdownOpen || isActiveDropdown ? 'text-blue-600 dark:text-blue-400 font-semibold bg-gray-200 dark:bg-gray-700' : 'text-gray-800 dark:text-white'}
                    hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200
                  `}
                >
                  <span className="flex items-center">
                    <section.icon className="mr-2 text-lg" />
                    {section.label}
                  </span>
                  {isDropdownOpen ? (
                    <FaCaretDown className="ml-2 text-sm" />
                  ) : (
                    <FaCaretUp className="ml-2 text-sm" />
                  )}
                </button>

                {/* Dropdown Menu - POSITIONING CHANGED HERE */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-gray-700 text-white p-2 rounded-lg shadow-lg z-[1003] min-w-[180px] max-h-[80vh] overflow-y-auto">
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`flex items-center px-3 py-1 text-sm rounded-md hover:bg-gray-600
                              ${pathname === item.href ? 'text-yellow-400 font-semibold' : ''}`}
                            onClick={() => {
                              setOpenDropdown(null);
                              if (toggleRightbar) toggleRightbar();
                            }}
                          >
                            {item.icon && <item.icon className="mr-2" />}
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
    </aside>
  );
};

export default Rightbar;