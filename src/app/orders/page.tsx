"use client";

import React from "react";
import Footer from "@/src/components/footer";

export default function Invoice() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900"> {/* Added dark mode background for overall page */}
      <main className="flex-1 flex flex-col items-center justify-center space-y-6 p-4">
        {[1, 2, 3, 4].map((_, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md dark:bg-gray-800" // Added dark mode background for the invoice cards
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white"> {/* Added text-gray-800 for light mode and dark:text-white for dark mode */}
                Building Agentic AI Applications
              </h2>
              <button className="bg-blue-500 text-white p-3 rounded-lg flex items-center hover:bg-blue-600 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-300 my-4 dark:border-gray-600"></div> {/* Added dark mode border for separator */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 text-gray-600 dark:text-gray-300"> {/* Added dark mode text for details */}
              <button className="font-medium">#INV00{idx + 1}</button>
              <p>
                Amount: <span className="font-medium">$90.00</span>
              </p>
              <p>
                Date: <span className="font-medium">17/4/2025</span>
              </p>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}