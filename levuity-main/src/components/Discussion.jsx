import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

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
  const [loading, setLoading] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // Backend API base URL
  const API_BASE_URL = 'http://localhost:3000'; // Backend server port backend runs on different port

  // Fetch messages from backend on component mount
  useEffect(() => {
    fetchMessages();
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    console.log('Messages updated:', messages);
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      console.log('Fetching messages from:', `${API_BASE_URL}/discussion/messages`);
      const response = await axios.get(`${API_BASE_URL}/discussion/messages`);
      console.log('Raw response:', response.data);
      const backendMessages = response.data.map(msg => ({
        id: msg._id,
        text: msg.message,
        sender: msg.username,
        createdAt: msg.timestamp
      }));
      console.log('Mapped messages:', backendMessages);
      setMessages(backendMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      console.error('Error details:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    const trimmed = input.trim();
    if (trimmed === '' || loading) return;

    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/discussion/messages`, {
        message: trimmed,
        username: 'user' // You can make this dynamic later with actual user authentication
      });

      // Add the new message to the local state
      const newMessage = {
        id: response.data._id,
        text: response.data.message,
        sender: response.data.username,
        createdAt: response.data.timestamp
      };

      setMessages((prev) => [...prev, newMessage]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };


  const clearbuttondev = async (e) => {
    try {
      setLoading(true);
      await axios.delete(`${API_BASE_URL}/discussion/messages`);
      setMessages([]);
    } catch (error) {
      console.error('Error clearing messages:', error);
      alert('Failed to clear messages. Please try again.');
    } finally {
      setLoading(false);
    }
  }



  return (
    <>
      {/* a temproary clear button */}
      <button className='absolute rounded-full px-3 bg-red-500 hover:bg-red-300' onClick={clearbuttondev}> clear</button>

      {/* Chat messages area */}
      <div className="w-full h-screen max-w-[70rem]  mx-auto px-2 sm:px-4 mb-[14rem] overflow-y-auto flex justify-end flex-col ">
        {loading && messages.length === 0 && (
          <div className="flex justify-center items-center py-4">
            <div className="text-gray-500">Loading messages...</div>
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className="w-full flex justify-end py-2 ">
            <div className="bg-[#fdfdfd]  px-4 py-2 rounded-md w-full  flex-col text-sm sm:text-base ">
              <div className='flex justify-end flex-col  w-fit'>
                <div className="flex items-center  gap-2 mb-1 justify-end ">
                  <span className="text-[#0369A1] font-semibold text-sm">
                    {msg.sender === 'user' ? 'You' : msg.sender}
                  </span>
                  {msg.sender === 'user' && (
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">
                      Most Interactive
                    </span>
                  )}
                </div>
                <div className="text-[#0C4A6E] whitespace-pre-wrap text-right  flex justify-start">{msg.text}</div>
              </div>

            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input UI */}
      <div className="flex w-full justify-center fixed bottom-0 px-2 sm:px-4 bg-white  h-fit">
        <div className="w-full max-w-[70rem]  shrink-0 flex justify-end flex-col pb-2  h-fit">

          {/* Top section */}
          <div className="w-full h-10 sm:h-12 shrink-0 rounded-t-md bg-[#F1F6FE] flex flex-row justify-between px-2 sm:px-4 ">
            <div className="flex items-center scale-75 sm:scale-100">
              <PageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>


            <div className="flex flex-row gap-2 sm:gap-3 w-fit items-center scale-75 sm:scale-100">


              <UploadButton />


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
            className=" w-full h-12 sm:h-14 shrink-0 border-0 focus-within:border-2 border-blue-400 rounded-2xl flex items-center justify-end pr-4 sm:pr-10 flex-row gap-2 sm:gap-3 px-2 sm:px-4"
            name="Input"
          >
            <input
              type="text"
              placeholder={loading ? "Sending..." : "Type your message..."}
              className="flex-grow h-full px-2 sm:px-4 bg-transparent focus:outline-none text-sm sm:text-base"
              autoComplete='off'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <div
              className={`px-2 py-1 sm:pl-2 cursor-pointer hover:bg-blue-500 flex justify-center rounded-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
