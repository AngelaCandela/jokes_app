const express = require('express');
const router = express.Router();
const jokesService = require('../services/jokesServices');

// Home
router.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Get all jokes
router.get('/all', async (req, res) => {
  const results = await jokesService.getAllJokes();
  res.send(results);
});

module.exports = router;