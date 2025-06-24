"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import profile from "../../images/profile.png";
import codeSnap from "../../images/codesnap-screenshot.png";
import airthmatic from "../../images/advanced-airthmatic.jpg";
import Footer from "@/src/components/footer";

type CourseCardProps = {
  image: StaticImageData;
  title: string;
  rating: string;
  reviews: number;
  lessons: number;
  duration: string;
  progress: number;
  user: string;
};

const EnrolledCourse = () => {
  return (
    // Main container for the page
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-gray-100">
      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        {/* Container for Course Cards */}
        <div className="bg-white dark:dark:bg-black shadow-lg rounded-lg p-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full space-y-10">
          {/* Course Card 1 */}
          <CourseCard
            image={codeSnap}
            title="End-to-end MLOps with Databricks"
            rating="4.8"
            reviews={25}
            lessons={12}
            duration="4hrs 30mins"
            progress={2}
            user="John Doe"
          />

          {/* Course Card 2 */}
          <CourseCard
            image={airthmatic}
            title="Advanced Arithmetic"
            rating="4.8"
            reviews={25}
            lessons={12}
            duration="4hrs 30mins"
            progress={2}
            user="John Doe"
          />
        </div>
      </main>

      {/* Footer (assuming Footer component also handles its own dark mode) */}
      <Footer />
    </div>
  );
};

function CourseCard({
  image,
  title,
  rating,
  reviews,
  lessons,
  duration,
  progress,
  user,
}: CourseCardProps) {
  const percent = Math.round((progress / lessons) * 100);
  return (
    // Individual Course Card container
    <div className="flex flex-col">
      <Image
        src={image}
        alt={title}
        width={400}
        height={160}
        className="rounded-lg object-cover w-full"
      />
      {/* Course Title */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white text-center">
        {title}
      </h3>
      {/* Rating and details */}
      <div className="flex flex-wrap justify-center items-center text-sm text-gray-600 dark:text-gray-300 mt-2 gap-x-2">
        <span className="text-yellow-500">&#9733;</span>
        <span>
          {rating} ({reviews} reviews)
        </span>
        <span>•</span>
        <span>{lessons} Lessons</span>
        <span>•</span>
        <span>{duration}</span>
      </div>
      {/* Progress Bar */}
      <div className="flex items-center justify-center mt-4 gap-x-2">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {progress}/{lessons}
        </span>
        <div className="w-full max-w-xs bg-gray-300 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {percent}%
        </span>
      </div>
      {/* User/Instructor info */}
      <div className="flex justify-center items-center mt-4">
        <Image
          src={profile}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
          {user}
        </span>
      </div>
      {/* View Course Button */}
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        View Course →
      </button>
    </div>
  );
}

export default EnrolledCourse;