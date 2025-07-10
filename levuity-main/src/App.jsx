import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookmarkIcon from './BookmarkIcon/BookmarkIcon';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:5000/tasks')
    .then(res => {
      setTasks(res.data);
      const bookmarked = res.data
        .filter(task => task.bookmarked)
        .map(task => task.id);
      setBookmarkedIds(bookmarked);

      console.log('📌 Bookmarked tasks on load:', res.data.filter(t => t.bookmarked));
    })
    .catch(err => console.error('Error loading tasks:', err));
}, []);
  return (
    <div style={{ padding: 20 }}>
      <h2>📚 Task List</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ flexGrow: 1 }}>{task.title}</span>
            <BookmarkIcon
              itemId={task.id}
              bookmarkedIds={bookmarkedIds}
              setBookmarkedIds={setBookmarkedIds}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;