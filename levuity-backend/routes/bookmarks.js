const express = require('express');
const cors = require('cors');
const router = express.Router();
const Bookmark = require('../models/bookmarks');

router.use(cors());
router.use(express.json());

// Get all bookmarks
router.get('/', async (req, res) => {
    try {
        const bookmarks = await Bookmark.find().sort({ id: 1 });
        res.json(bookmarks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch bookmarks: ' + err.message });
    }
});

// Get a specific bookmark by id
router.get('/:id', async (req, res) => {
    try {
        const bookmark = await Bookmark.findOne({ id: Number(req.params.id) });
        if (!bookmark) {
            return res.status(404).json({ error: 'Bookmark not found' });
        }
        res.json(bookmark);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch bookmark: ' + err.message });
    }
});

// Create a new bookmark
router.post('/', async (req, res) => {
    try {
        const { id, title, bookmarked = false } = req.body;

        if (!id || !title) {
            return res.status(400).json({ error: 'ID and title are required' });
        }

        const bookmark = new Bookmark({ id, title, bookmarked });
        const savedBookmark = await bookmark.save();
        res.status(201).json(savedBookmark);
    } catch (err) {
        if (err.code === 11000) {
            res.status(400).json({ error: 'Bookmark with this ID already exists' });
        } else {
            res.status(500).json({ error: 'Failed to create bookmark: ' + err.message });
        }
    }
});

// Update bookmark status
router.put('/:id', async (req, res) => {
    try {
        const bookmarkId = Number(req.params.id);
        const updateData = req.body;

        const bookmark = await Bookmark.findOneAndUpdate(
            { id: bookmarkId },
            updateData,
            { new: true, runValidators: true }
        );

        if (!bookmark) {
            return res.status(404).json({ error: 'Bookmark not found' });
        }

        res.json(bookmark);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update bookmark: ' + err.message });
    }
});

// Delete a bookmark
router.delete('/:id', async (req, res) => {
    try {
        const bookmark = await Bookmark.findOneAndDelete({ id: Number(req.params.id) });
        if (!bookmark) {
            return res.status(404).json({ error: 'Bookmark not found' });
        }
        res.json({ message: 'Bookmark deleted successfully', bookmark });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete bookmark: ' + err.message });
    }
}); 
module.exports = router;