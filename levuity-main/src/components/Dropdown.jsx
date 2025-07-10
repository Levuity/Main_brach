// src/components/Dropdown.jsx
import React from "react";

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="text-xs font-bold text-black tracking-wide">
      <label className="block mb-1">{label.toUpperCase()}</label>
      <select
        className="bg-[#d6e4ff] text-blue-600 text-xs px-3 py-1 rounded-full font-medium shadow-sm appearance-none"
        value={value}
        onChange={onChange}
      >
        <option value="" className="text-gray-600">
          SELECT
        </option>
        {options.map((opt, idx) => (
          <option
            key={idx}
            value={opt}
            className="text-gray-600"
          >
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
