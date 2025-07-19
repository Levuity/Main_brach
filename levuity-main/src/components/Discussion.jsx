import React from 'react';
import AddItemIcon from '../assets/discussion portal assets/icons-as-functions/AddItemIcon';
import Ellipse5Icon from '../assets/discussion portal assets/icons-as-functions/Ellipse5Icon';
import EmojiHappyIcon from '../assets/discussion portal assets/icons-as-functions/EmojiHappyIcon';
import MessageIcon from '../assets/discussion portal assets/icons-as-functions/MessageIcon';
import PaperClipIcon from '../assets/discussion portal assets/icons-as-functions/PaperClipIcon';
import SendIcon from '../assets/discussion portal assets/icons-as-functions/SendIcon';
import { PageIcon } from '../assets/discussion portal assets/icons-as-functions/PageIcon';
import DownArrow from '../assets/discussion portal assets/icons-as-functions/Down';

const Discussion = () => {
  return (
    <>
      {/* master div */}
      <div className="flex w-full justify-center fixed bottom-0">
        {/* chatbox ui */}
        <div className="w-[70rem] h-[12.625rem] shrink-0 flex justify-end flex-col pb-2">
          {/* top half */}
          <div className="w-full h-10 shrink-0 rounded-t-md bg-[#F1F6FE] flex flex-row justify-between">
            {/* left side */}
            <div className="flex items-center">
              <PageIcon />
            </div>
            {/* right side */}
            <div className="flex flex-row gap-3 w-fit pr-2.5 items-center">
              <PaperClipIcon />
              <AddItemIcon />
              <MessageIcon />
            </div>
          </div>

          {/* bottom half */}
          <div
            className="w-full h-14 shrink-0 border-0 focus-within:border-2 border-blue-400 rounded-2xl flex items-center justify-end pr-10 flex-row gap-3"
            name="Input"
          >
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow h-full px-4 bg-transparent focus:outline-none"
            />
            <div className="pl-2">
              <SendIcon className="w-5 h-5" />
            </div>

            {/* answer dropbox */}
            <div className="w-20 h-7 border border-black bg-blue-300 rounded-2xl flex justify-center items-center flex-row">
              <p className="p-2 font-bold">Answer</p>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discussion;
