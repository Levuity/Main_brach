import React, { useRef, useEffect, useState } from 'react';

import Ellipse5Icon from '../assets/discussion-portal-assets/icons-as-functions/Ellipse5Icon';
import EmojiHappyIcon from '../assets/discussion-portal-assets/icons-as-functions/EmojiHappyIcon';
import MessageIcon from '../assets/discussion-portal-assets/icons-as-functions/MessageIcon';
import PaperClipIcon from '../assets/discussion-portal-assets/icons-as-functions/PaperClipIcon';
import SendIcon from '../assets/discussion-portal-assets/icons-as-functions/SendIcon';
import { PageIcon } from '../assets/discussion-portal-assets/icons-as-functions/PageIcon';

import AddItemIcon from '../assets/discussion-portal-assets/icons-as-functions/AddItemIcon';
import AnswerDropdown from './AnswerDropdown';
import UploadButton from './upload';

const Discussion = () => {
  const messagesEndRef = useRef(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Auto-scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    const trimmed = input.trim();
    if (trimmed === '') return;

    const newMessage = {
      id: Date.now(),
      text: trimmed,
      sender: 'user',
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };


  const clearbuttondev = (e) => {
    setMessages([])
  }
  return (
    <>
      {/* a temproary clear button */}
      <button className='absolute rounded-full px-3 bg-red-500 hover:bg-red-300' onClick={clearbuttondev}> clear</button>

      {/* Chat messages area */}
      <div className="w-full max-w-[70rem] border-2 mx-auto px-2 sm:px-4 mb-[14rem] overflow-y-auto max-h-[calc(100vh-15rem)]">
        {messages.map((msg) => (
          <div key={msg.id} className="w-full flex justify-end py-2">
            <div className="bg-[#E0F2FE] border border-[#BAE6FD] px-4 py-2 rounded-md max-w-[90%] text-sm sm:text-base shadow-sm">
              <div className="flex items-center gap-2 mb-1 justify-end">
                <span className="text-[#0369A1] font-semibold text-sm">
                  {msg.sender === 'user' ? 'You' : msg.sender}
                </span>
                {msg.sender === 'user' && (
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">
                    Most Interactive
                  </span>
                )}
              </div>
              <div className="text-[#0C4A6E] whitespace-pre-wrap text-right">{msg.text}</div>
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input UI */}
      <div className="flex w-full justify-center fixed bottom-0 px-2 sm:px-4 bg-white ">
        <div className="w-full max-w-[70rem] h-auto min-h-[12.625rem] shrink-0 flex justify-end flex-col pb-2">

          {/* Top section */}
          <div className="w-full h-10 sm:h-12 shrink-0 rounded-t-md bg-[#F1F6FE] flex flex-row justify-between px-2 sm:px-4">
            <div className="flex items-center scale-75 sm:scale-100">
              <PageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>


            <div className="flex flex-row gap-2 sm:gap-3 w-fit items-center scale-75 sm:scale-100">

            
              <UploadButton/>


              <div className="hover:bg-gray-400 w-7 h-7 rounded-full border-2 border-blue-400 flex justify-center items-center">
                <AddItemIcon className="w-4 h-4 sm:w-5 sm:h-5 rounded-full" />
              </div>

              <div className="hover:bg-gray-400 w-7 h-7 rounded-full border-2 border-blue-400 flex justify-center items-center">
                <MessageIcon className="w-4 h-4 sm:w-5 sm:h-5 rounded-full" />
              </div>

            </div>
          </div>

          {/* Input area */}
          <div
            className="w-full h-12 sm:h-14 shrink-0 border-0 focus-within:border-2 border-blue-400 rounded-2xl flex items-center justify-end pr-4 sm:pr-10 flex-row gap-2 sm:gap-3 px-2 sm:px-4"
            name="Input"
          >
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow h-full px-2 sm:px-4 bg-transparent focus:outline-none text-sm sm:text-base"
              id="usermessage"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div
              className="px-2 py-1 sm:pl-2 cursor-pointer hover:bg-blue-500 flex justify-center rounded-full"
              onClick={handleSendMessage}
            >
              <SendIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <AnswerDropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discussion;
