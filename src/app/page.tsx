"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Star } from "lucide-react";
import Footer from "@/src/components/footer";
import { getCourses } from "../api/course";
import { useEffect } from "react";

export default function Home() {
  const faqData = [
    {
      question: "How do I book a class?",
      answer: "You can book a class through our website or mobile app.",
    },
    {
      question: "Can I cancel or reschedule a session?",
      answer:
        "Yes, cancellations and rescheduling are allowed up to 24 hours before the session.",
    },
    {
      question: "How do I access recorded classes?",
      answer:
        "Recorded sessions are available in your account dashboard under 'My Classes'.",
    },
    {
      question: "Duis scelerisque ultricies purus?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Mauris posuere at orci at consequat?",
      answer: "Pellentesque habitant morbi tristique senectus et netus.",
    },
    {
      question: "Vestibulum hendrerit nisi tortor?",
      answer: "Suspendisse potenti. Donec ac eros ut velit varius consequat.",
    },
  ];

  const courses = [
    {
      id: 1,
      image: "/placeholder.svg?height=48&width=48",
      title: "End-to-end MLOps with Databricks",
      currentPrice: 48.0,
      originalPrice: 57.6,
      rating: 4.8,
      reviews: 25,
      lessons: 12,
      duration: "4hrs 30 mins",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=48&width=48",
      title: "End-to-end MLOps with Databricks",
      currentPrice: 48.0,
      originalPrice: 57.6,
      rating: 4.8,
      reviews: 25,
      lessons: 12,
      duration: "4hrs 30 mins",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=48&width=48",
      title: "End-to-end MLOps with Databricks",
      currentPrice: 48.0,
      originalPrice: 57.6,
      rating: 4.8,
      reviews: 25,
      lessons: 12,
      duration: "4hrs 30 mins",
    },
  ];

  const getCourseData = async () => {
    try {
      console.log("Calling getCourses...");
      const response = await getCourses({ search: "" });
      console.log("Fetched courses:", response);
    } catch (error) {
      // console.error("Failed to fetch course data:", error);
    }
  };

  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-background text-foreground px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Learn, Interact, and Grow
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                Live & On-Demand Classes
              </span>
              <br />
              for Every Learner
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              Join expert-led live classes, download recordings at your
              convenience, and engage in insightful discussions with fellow
              learners. Take your learning beyond the classroom!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/live-classes">Book a Live Class</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/recorded-classes">Explore Recorded Classes</Link>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/placeholder.svg"
              alt="Student learning online"
              width={800}
              height={500}
              className="rounded-xl object-cover w-full max-w-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/30 dark:bg-muted/10 py-12 md:py-24">
        {" "}
        {/* Moved padding here */}
        <div className="max-w-[1600px] mx-auto px-4">
          {" "}
          {/* This div now directly controls the max width and centering */}
          <div className="flex flex-col md:flex-row justify-center items-center mb-12">
            <h2 className="text-3xl font-bold text-center">
              Upcoming Live Classes Reserve Your Spot Now!
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="rounded-full" variant="default">
              Applied Sciences
            </Button>
            <Button
              className="rounded-full border-4 border-blue-500 text-blue-500"
              variant="outline"
            >
              Academic Science
            </Button>
            <Button
              className="rounded-full border-4 border-blue-500 text-blue-500"
              variant="outline"
            >
              Web Development
            </Button>
            <Button
              className="rounded-full border-4 border-blue-500 text-blue-500"
              variant="outline"
            >
              Mathematics
            </Button>
          </div>
          {/* This div is now just the grid container */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="w-full max-w-[450px] mx-auto overflow-hidden shadow-md"
              >
                <Image
                  src="/placeholder.svg?height=68&width=68"
                  alt="Course thumbnail"
                  width={600}
                  height={300}
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Building Agentic AI Applications with a Problem-First
                    Approach
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm">5.0 (23)</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm">Starts May 5</div>
                    <div className="text-sm text-red-500 font-medium">
                      4 Seats Left
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Instructor"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="font-medium">Jack Nickolson</div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/course-details">Enroll Course →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <Link href="/live-classes">See All Live Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Classes Section */}
      <section className="min-h-screen  flex items-center justify-center py-10 px-4 transition-colors duration-300">
        <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-7xl bg-black dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-colors duration-300">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white text-center">
            <h1 className="text-2xl font-bold mb-2">Missed a Class?</h1>
            <h2 className="text-3xl font-extrabold mb-4">Watch It Anytime!</h2>
            <p className="text-sm">
              Learn from top educators in real-time. Book your class before
              seats fill up!
            </p>
          </div>

          {/* Categories Section - Adjusted for flex-wrap and scrollbar-hide */}
          {/* Note: bg-black-50 is not a standard Tailwind class. Assuming you meant a lighter black or a very dark gray. 
                   I've changed it to bg-black. If you want a subtle dark, consider bg-gray-950 or custom color. */}
          <div className="p-4 bg-black dark:bg-gray-850 flex flex-wrap md:flex-nowrap overflow-x-auto scrollbar-hide justify-center md:justify-start transition-colors duration-300">
            <button
              className="flex-shrink-0 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2 md:mb-0 mr-2 hover:bg-blue-600 transition-colors
                             dark:bg-purple-600 dark:hover:bg-purple-700"
            >
              Applied Sciences
            </button>
            {/* Note: bg-black-200 is not a standard Tailwind class. Changed to bg-black and text-white for visibility. */}
            <button
              className="flex-shrink-0 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-2 md:mb-0 mr-2 hover:bg-gray-700 transition-colors
                             dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Academic Science
            </button>
            <button
              className="flex-shrink-0 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-2 md:mb-0 mr-2 hover:bg-gray-700 transition-colors
                             dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Web Development
            </button>
            <button
              className="flex-shrink-0 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-2 md:mb-0 mr-2 hover:bg-gray-700 transition-colors
                             dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Data Science
            </button>
            <button
              className="flex-shrink-0 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-2 md:mb-0 mr-2 hover:bg-gray-700 transition-colors
                             dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Cybersecurity
            </button>
            {/* Add more categories as needed */}
          </div>

          {/* Course Listings - Adjusted for responsive grid layout */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col bg-black dark:bg-gray-700 border border-gray-700 dark:border-gray-600 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow transition-colors duration-300"
              >
                {/* Image moved to top for card layout */}
                <div className="w-full h-40">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 flex flex-col flex-grow">
                  <div>
                    <h3 className="text-md font-semibold text-white dark:text-gray-100 mb-1 leading-tight">
                      {course.title}
                    </h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-lg font-bold text-white dark:text-green-400 mr-2">
                        ${course.currentPrice.toFixed(2)}
                      </span>
                      <span className="text-gray-400 dark:text-gray-400 line-through">
                        ${course.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center text-sm text-gray-400 dark:text-gray-300">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 text-yellow-400 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.565-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                        <span>
                          {course.rating.toFixed(1)}({course.reviews})
                        </span>
                      </div>
                      <span className="mx-2">•</span>
                      <span>{course.lessons} Lessons</span>
                      <span className="mx-2">•</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="mt-auto self-end ml-auto">
                    <button
                      className="p-2 rounded-full text-gray-400 hover:text-red-500 transition-colors
                                       dark:text-gray-300 dark:hover:text-red-400"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See All Recorded Courses Button */}
          <div className="p-4">
            <button
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-md
                             dark:bg-purple-600 dark:hover:bg-purple-700"
            >
              See All Recorded Courses
            </button>
          </div>
        </div>
      </section>

      {/* 1-on-1 Section */}
      <section className="bg-muted/30 dark:bg-muted/10">
        <div className="container px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Need Personalized Help?
                  <br />
                  Get 1-on-1 Expert Guidance
                </h2>
                <p className="mb-4">
                  Book a private consultation with an expert. One-time fee. No
                  hassle. Just results.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/one-on-one">Book a 1-on-1 Session</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 px-4 text-center">
        {/* Section 1: Expert Guidance */}
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-2">
            Need Personalized Help?
            <br />
            Get 1-on-1 Expert Guidance
          </h2>
          <p className="text-gray-600 mb-6">
            Not ready for a full consultation? No problem. With our Pay Per
            Question feature, you can get trusted advice from verified coaches,
            therapists, and experts without booking a full session.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md mb-6">
            Ask Your Question Now
          </button>
          <img
            src="/placeholder.svg?height=80&width=80"
            alt="Woman thinking"
            className="mx-auto w-full max-w-xs"
          />
        </div>
      </section>

      {/* Membership Section */}
      <section className="bg-background">
        <div className="container px-4 py-12 md:py-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Subscription Packages
            </h2>
            <p className="text-muted-foreground">
              Whether you're here to attend live sessions, binge on recorded
              lessons, or get 1-on-1 mentorship, we've got a plan built for your
              goals. No hidden fees. No fluff. Just pure, powerful learning.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" className="rounded-full">
                Monthly
              </Button>
              <Button variant="outline" className="rounded-full">
                Annual (20% Off)
              </Button>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="bg-blue-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Basic Access</h3>
                <p className="mb-4">
                  Not ready to commit? No problem. Purchase individual recorded
                  classes anytime and learn at your own pace.
                </p>
                <div className="text-4xl font-bold">$89</div>
                <div className="text-sm opacity-80">per month</div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span> One-time payments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span> Lifetime access to purchased recordings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span> Perfect for occasional learners</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-blue-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Premium Membership</h3>
                <p className="mb-4">
                  Subscribe once. Learn endlessly. Join live classes, unlock the
                  entire recorded library, and participate in student
                  discussions.
                </p>
                <div className="text-4xl font-bold">$119</div>
                <div className="text-sm opacity-80">per month</div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Unlimited access to all live classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span> Access to all recorded content</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span> Community discussion boards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Zoom links delivered to your inbox</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-primary">
              <div className="bg-blue-500 text-white  p-6">
                <h3 className="text-2xl font-bold mb-2">Elite Membership</h3>
                <p className="mb-4">
                  Get everything in Premium, plus dedicated time with our
                  experts. Ideal for deep dives, mentorship, and personal
                  growth.
                </p>
                <div className="text-4xl font-bold">$129</div>
                <div className="text-sm opacity-80">per month</div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>All Premium benefits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Monthly 1-on-1 consultation sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Direct video calling with instructors</span>
                  </li>

                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Personalized feedback and support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 min-h-[60vh] bg-gray-100 p-4">
        {/* Discussion Card */}
        <section className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Join the Discussion, Share Your Insights!
          </h1>
          <p className="text-gray-600 mb-5">
            Learning doesn't end after class. Ask questions, share thoughts, and
            collaborate with fellow students in our interactive discussion
            forum.
          </p>
          <Button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
            Explore Discussions
          </Button>
        </section>

        {/* Coach Recruitment Card */}
        <div className="bg-[#1DA1F2] rounded-2xl p-6 max-w-md w-full text-center text-white shadow-xl">
          <h2 className="text-xl font-bold mb-3">
            Join Our Growing Network of Experts in Therapy, HR, and
            Organizational Consulting
          </h2>
          <p className="text-white text-sm mb-6">
            Are you a certified therapist, human resource expert, or
            organizational development consultant? We're looking for passionate
            professionals like you to join our coaching platform and empower
            individuals and teams to grow, heal, and thrive.
          </p>
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-md w-full mb-3">
            Become a Coach
          </button>
          <button className="border border-white text-white font-semibold py-2 px-4 rounded-md w-full">
            View Coach Guidelines
          </button>
        </div>
      </div>

      <section className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto mt-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Got Questions? We've Got Answers!
        </h1>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <details className="w-full">
                <summary className="text-gray-700 font-semibold cursor-pointer">
                  {item.question}
                </summary>
                <p className="text-gray-600 mt-2">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
