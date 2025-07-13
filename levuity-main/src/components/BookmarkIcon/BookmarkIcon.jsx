import React from 'react';
import axios from 'axios';

const BookmarkIcon = ({ itemId, bookmarkedIds, setBookmarkedIds }) => {
  const bookmarked = bookmarkedIds.includes(itemId);

  const toggleBookmark = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/tasks/${itemId}`, {
        bookmarked: !bookmarked
      });

      const updatedIdList = res.data.bookmarked
        ? [...bookmarkedIds, itemId]
        : bookmarkedIds.filter(id => id !== itemId);

      setBookmarkedIds(updatedIdList);
    } catch (err) {
      console.error('Failed to toggle bookmark:', err);
    }
  };

  return (
    <button
      onClick={toggleBookmark}
      title={bookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
      aria-pressed={bookmarked}
      className='cursor-pointer transition-transform duration-200 active:scale-110'
    >
      {bookmarked ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
          <path fill="#f48fb1" d="M37.8,45.7l-8.7-6.3c-0.3-0.3-0.8-0.3-1.2,0l-8.7,6.3c-1.3,1-3.2,0-3.2-1.6V13c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v31.1C41,45.7,39.2,46.7,37.8,45.7z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M27.3,36.9l-2.7-2c-0.3-0.3-0.8-0.3-1.2,0l-8.7,6.3c-1.3,1-3.2,0-3.2-1.6V22.3"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M11.5,16.4v-8c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v31.1c0,1.6-1.8,2.6-3.2,1.6l-2-1.4"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
          <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M27.3,36.9l-2.7-2c-0.3-0.3-0.8-0.3-1.2,0l-8.7,6.3c-1.3,1-3.2,0-3.2-1.6V22.3"></path>
          <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M11.5,16.4v-8c0-1.1,0.9-2,2-2h21c1.1,0,2,0.9,2,2v31.1c0,1.6-1.8,2.6-3.2,1.6l-2-1.4"></path>
        </svg>
      )}
    </button>
  );
};

export default BookmarkIcon;