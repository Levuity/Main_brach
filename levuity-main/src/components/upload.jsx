import { useState } from "react";
import PaperClipIcon from '../assets/discussion-portal-assets/icons-as-functions/PaperClipIcon';

import { useRef } from "react";

export default function UploadButton() {
  const fileInputRef = useRef(null); // start with null

  const handleFileChange = (event) => {
    console.log(event.target.files); // your selected files
  };

  return (
    <>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Visible clickable div */}
      <div
        onClick={() => fileInputRef.current.click()}
        className="hover:bg-gray-400 w-7 h-7 rounded-full border-2 border-blue-400 flex justify-center items-center active:bg-gray-500"
      >
        <PaperClipIcon/>
      </div>
    </>
  );
}
