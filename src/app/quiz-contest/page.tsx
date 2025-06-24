"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/src/components/footer";

export default function QuizContestPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <main className="flex-1 container mx-auto p-6">
        <div className="bg-card p-6 rounded-lg shadow-md space-y-10">
          {/* This Week's Quiz */}
          <section className="p-6 rounded-lg bg-muted/20 text-center space-y-4">
            <h2 className="text-2xl font-bold">
              Join This Week&apos;s Quiz Contest
            </h2>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between text-lg">
              <div className="text-left font-semibold">
                Topic: Advanced Arithmetic
              </div>
              <div className="text-right text-muted-foreground">
                Questions: 20 | Time: 30 mins
              </div>
            </div>

            <button
              onClick={() => router.push("/quiz/this-week")}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Participate Now
            </button>

            {/* Topic Selector - centered */}
            <div className="mt-6 max-w-md mx-auto">
              <h2 className="text-xl font-bold mb-2 text-left">Choose Topic</h2>
              <select className="w-full p-3 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option className="bg-card text-card-foreground">
                  Advanced Arithmetic
                </option>
                <option className="bg-card text-card-foreground">
                  Mughal History
                </option>
                <option className="bg-card text-card-foreground">
                  Competitive Exams
                </option>
              </select>
            </div>
          </section>

          {/* Previous Quizzes Section */}
          <section className="bg-muted/10 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center">
              Previous Quizzes
            </h2>
            <div className="space-y-4">
              {[
                {
                  id: 4,
                  title: "Quiz 04: World Geography for Competitive Exams",
                  route: "/quiz-04",
                },
                {
                  id: 3,
                  title: "Quiz 03: Advanced Arithmetic for Competitive Exams",
                  route: "/quiz-03",
                },
                {
                  id: 2,
                  title: "Quiz 02: Mughal History for Competitive Exams",
                  route: "/quiz-02",
                },
                {
                  id: 1,
                  title: "Quiz 01: World Geography for Competitive Exams",
                  route: "/quiz-01",
                },
              ].map((quiz) => (
                <div
                  key={quiz.id}
                  className="border-t border-border pt-4 px-2 cursor-pointer hover:bg-muted rounded-md transition"
                  onClick={() => router.push(quiz.route)}
                >
                  <h3 className="text-lg font-bold text-foreground">
                    {quiz.title}
                  </h3>
                  <p className="text-muted-foreground">
                    Questions: 20 | Time: 30 mins
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
