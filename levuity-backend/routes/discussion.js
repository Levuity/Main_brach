// routes/discussion.js
const express = require('express');
const router = express.Router();

const Message = require('../models/messages');

// Get all messages
router.get('/messages', async (req, res) => {
  try {
    const allMessages = await Message.find().sort({ timestamp: 1 }); // Sort by timestamp
    res.json(allMessages);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Post a new message
router.post('/messages', async (req, res) => {
  try {
    const { message, username } = req.body;
    
    if (!message || !username) {
      return res.status(400).json({ error: 'Message and username are required' });
    }

    const newMessage = new Message({
      message: message.trim(),
      username: username.trim(),
      timestamp: new Date(),
      read: false
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Delete all messages (for your clear button)
router.delete('/messages', async (req, res) => {
  try {
    await Message.deleteMany({});
    res.json({ message: 'All messages deleted successfully' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
