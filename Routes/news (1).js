const express = require('express');
const News = require('../models/News');
const router = express.Router();

// Get all news
router.get('/', async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add news
router.post('/', async (req, res) => {
    const news = new News(req.body);
    try {
        const savedNews = await news.save();
        res.status(201).json(savedNews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
