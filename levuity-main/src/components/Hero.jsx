// src/components/Hero.jsx
import React from "react";
import { Home, MessageCircle, Share2, MessageSquareText, Search } from "lucide-react";
import hero from "../assets/hero.png"; 
const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left: Illustration */}
        <div className="flex justify-center">
          <img
            src={hero}
            alt="Students Illustration"
            className="max-w-md w-full rounded-xl shadow-md size-m md:mt-5"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Welcome to <span className="text-purple-600">Levuity</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 font-medium mb-4">
            Learn. Share. Collaborate.
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-8">
            Join a thriving student community built for meaningful discussions,
            academic support, and growth. Whether you're revising for exams or exploring a new subject — Levuity has your back.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-150 shadow-md">
              Login
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition duration-150 shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
