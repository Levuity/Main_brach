import React, { useRef, useEffect, useState } from 'react';

import Ellipse5Icon from '../assets/discussion-portal-assets/icons-as-functions/Ellipse5Icon';
import EmojiHappyIcon from '../assets/discussion-portal-assets/icons-as-functions/EmojiHappyIcon';
import MessageIcon from '../assets/discussion-portal-assets/icons-as-functions/MessageIcon';
import PaperClipIcon from '../assets/discussion-portal-assets/icons-as-functions/PaperClipIcon';
import SendIcon from '../assets/discussion-portal-assets/icons-as-functions/SendIcon';
import { PageIcon } from '../assets/discussion-portal-assets/icons-as-functions/PageIcon';

import AddItemIcon from '../assets/discussion-portal-assets/icons-as-functions/AddItemIcon';
import AnswerDropdown from './AnswerDropdown';

const Discussion = () => {
  const bottomBarRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    if (bottomBarRef.current) {
      setOffsetTop(bottomBarRef.current.offsetTop);
    }
  }, []);

  return (
    <>
      {/* master div */}
      <div ref={bottomBarRef} className="flex w-full justify-center fixed bottom-0 px-2 sm:px-4">
        {/* chatbox ui */}
        <div className="w-full max-w-[70rem] h-auto min-h-[12.625rem] shrink-0 flex justify-end flex-col pb-2">
          {/* top half */}
          <div className="w-full h-10 sm:h-12 shrink-0 rounded-t-md bg-[#F1F6FE] flex flex-row justify-between px-2 sm:px-4">
            {/* left side */}
            <div className="flex items-center scale-75 sm:scale-100">
              <PageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            {/* right side */}
            <div className="flex flex-row gap-2 sm:gap-3 w-fit items-center scale-75 sm:scale-100">
              <PaperClipIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              <AddItemIcon className='w-4 h-4 sm:w-5 sm:h-5'/>
              <MessageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>

          {/* bottom half */}
          <div
            className="w-full h-12 sm:h-14 shrink-0 border-0 focus-within:border-2 border-blue-400 rounded-2xl flex items-center justify-end pr-4 sm:pr-10 flex-row gap-2 sm:gap-3 px-2 sm:px-4"
            name="Input"
          >
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow h-full px-2 sm:px-4 bg-transparent focus:outline-none text-sm sm:text-base"
            />
            <div className="pl-1 sm:pl-2">
              <SendIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            <AnswerDropdown offsetTop={offsetTop} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discussion;
