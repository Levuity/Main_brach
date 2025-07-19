import React, { useState, useRef, useEffect } from 'react';

export default function AnswerDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [openUp, setOpenUp] = useState(false);
  const buttonRef = useRef(null);

  const OPTIONS = [
    'Answer',
    'Ask new question',
    'Answer but have doubt',
  ];

  const [selected, setSelected] = useState(OPTIONS[0]);

  function handleSelect(option) {
    setSelected(option);
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = OPTIONS.length * 40; // approx height in px
      setOpenUp(spaceBelow < dropdownHeight);
    }
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={buttonRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-28 sm:w-32 h-7 sm:h-8 px-3 border border-black bg-blue-300 rounded-2xl flex items-center justify-between text-xs font-bold"
      >
        {selected}
        <svg
          className="w-3 h-3 ml-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10
            ${openUp ? 'bottom-full mb-1' : 'top-full mt-1'}`}
        >
          {OPTIONS.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-100 ${
                selected === option ? 'font-semibold bg-blue-50' : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
