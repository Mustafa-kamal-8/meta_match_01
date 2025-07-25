"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Quiz04Page() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100 dark:bg-gray-900 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Quiz 04: Advanced Arithmetic
        </h2>

        {/* Instructions Section */}
        <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 text-center">
            Instructions
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 text-lg list-disc pl-6">
            <li>Total Questions: 5</li>
            <li>Time allotted: 30 minutes</li>
            <li>Each question carries 1 mark</li>
            <li>No negative marking</li>
            <li>Do not refresh the page</li>
          </ul>
          <p className="text-lg font-semibold text-center text-green-600 dark:text-green-400 mt-4">
            All the best!
          </p>
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-blue-500 dark:bg-blue-600 text-white px-8 py-3 rounded-md text-lg hover:bg-blue-600 dark:hover:bg-blue-700"
            onClick={() => router.push("/quiz-test")}
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
}
