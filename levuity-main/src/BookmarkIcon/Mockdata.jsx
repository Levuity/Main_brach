import React, { useEffect, useState } from 'react';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon.jsx';

const ITEMS = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  { id: 4, name: 'Item 4', description: 'Description for Item 4' }
];

const Mockdata = () => {
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarkedIds(stored);
  }, []);

  const toggleView = () => setShowOnlyBookmarked(prev => !prev);

  const clearBookmarks = () => {
    localStorage.removeItem('bookmarks');
    setBookmarkedIds([]);
  };

  const filteredItems = showOnlyBookmarked
    ? ITEMS.filter(item => bookmarkedIds.includes(item.id))
    : ITEMS;

  return (
    <div className="p-6 space-y-4 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold text-center text-gray-800">Bookmarkable Items</h1>

      <div className="flex gap-4 justify-center my-4">
        <button
          onClick={toggleView}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {showOnlyBookmarked ? 'Show All Items' : 'Show Bookmarked Only'}
        </button>
        <button
          onClick={clearBookmarks}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear All Bookmarks
        </button>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-500">No items to display.</p>
      ) : (
        filteredItems.map(item => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <BookmarkIcon
              itemId={item.id}
              bookmarkedIds={bookmarkedIds}
              setBookmarkedIds={setBookmarkedIds}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Mockdata;