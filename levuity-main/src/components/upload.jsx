import { useState, useRef } from "react";
import PaperClipIcon from '../assets/discussion-portal-assets/icons-as-functions/PaperClipIcon';

export default function UploadButton() {
  return(
    <div className="border-2 border-blue-500 p-0.5 rounded-full hover:bg-gray-300 ">
      <PaperClipIcon></PaperClipIcon>
    </div>
  )
}
