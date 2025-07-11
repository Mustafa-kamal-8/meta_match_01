"use client";
import Footer from "@/src/components/footer";
import { useState } from "react";

type SelectedAnswers = {
  [key: string]: string | null;
};

export default function Quiz() {
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

  const handleSelect = (question: string, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [question]: prev[question] === option ? null : option,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", selectedAnswers);
    alert("Your answers have been submitted!");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center p-4">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 max-w-4xl w-full">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Quiz 04: Advanced Arithmetic
          </h2>
          <div className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Time Left: 27:24
          </div>

          <div className="flex flex-col sm:flex-col lg:flex-row lg:gap-6">
            {[
              {
                id: "q1",
                question: "(112 × 54) = ?",
                options: ["67000", "70000", "76500", "77200"],
              },
              {
                id: "q2",
                question:
                  "A 3-digit number 4a3 is added to another 3-digit number 984 to give a 4-digit number 13b7, which is divisible by 11. Then, (a + b) = ?",
                options: ["10", "11", "12", "13"],
              },
            ].map(({ id, question, options }) => (
              <div
                key={id}
                className="flex flex-col bg-gray-50 dark:bg-gray-700 p-4 rounded-md flex-1"
              >
                <p className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-100">
                  {question}
                </p>
                <div className="flex flex-col gap-3">
                  {options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <input
                        type="checkbox"
                        className="accent-blue-500"
                        checked={selectedAnswers[id] === option}
                        onChange={() => handleSelect(id, option)}
                      />
                      <span className="text-gray-800 dark:text-gray-100">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
            >
              Submit Answers
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
