// src/components/NavBar.jsx
import React, { useState } from "react";
import {
  Home,
  MessageCircle,
  Share2,
  MessageSquareText,
  Search,
} from "lucide-react";
import Dropdown from "./Dropdown";
import hero from "../assets/hero.png"; 

const NavBar = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const classOptions = [
    "12TH SCIENCE CBSE/ISC",
    "12TH COMMERCE CBSE/ISC",
    "CAT", "CUET", "IPMAT", "JEE", "NEET", "MBA FINANCE",
    "CA-I (FOUNDATION)", "CA-II (INTER)", "CA-III (FINAL)",
  ];

  const subjectOptions = [
    "PHYSICS (PHY)", "CHEMISTRY (CHEM)", "BIOLOGY (BIO)", "MATHEMATICS (MATHS)", "ALL"
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 py-3 bg-white shadow-sm border-b-[3px] border-[#c9a8fe] sticky top-0 z-50 font-sans">
      
      {/* LEFT: Dropdowns */}
      <div className="flex items-center gap-4">
        <Dropdown
          label="Class"
          options={classOptions}
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        />
        <Dropdown
          label="Subject"
          options={subjectOptions}
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        />
      </div>

      {/* CENTER: Navigation Links */}
      <div className="flex items-center gap-8 text-sm font-medium text-black">
        <div className="flex flex-col items-center text-blue-600 font-semibold">
          <Home className="w-4 h-4 mb-1" />
          <span className="text-xs">Home</span>
          <div className="w-6 h-1 bg-blue-600 rounded-full mt-1" />
        </div>

        <div className="flex flex-col items-center">
          <MessageCircle className="w-4 h-4 mb-1" />
          <span className="text-xs">Revision</span>
        </div>

        <div className="flex flex-col items-center">
          <Share2 className="w-4 h-4 mb-1" />
          <span className="text-xs">Discussion</span>
        </div>

        <div className="flex flex-col items-center">
          <MessageSquareText className="w-4 h-4 mb-1" />
          <span className="text-xs">Resource Library</span>
        </div>
      </div>

      {/* RIGHT: Search, Button, Profile */}
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-gray-700" />
        <button className="bg-[#d6e4ff] text-blue-600 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
          #FormulaFreak
        </button>
        <img
          src={hero}
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default NavBar;
