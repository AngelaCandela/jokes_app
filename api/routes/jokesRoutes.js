const express = require('express');
const router = express.Router();
const jokesService = require('../services/jokesServices');
// const connection = require('../../config/db');

// Home
router.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Get all jokes
router.get('/all', async (req, res) => {
  const results = await jokesService.getAllJokes();
  res.send(results);
});

// Get random joke
router.get('/random', async (req, res) => {
  const result = await jokesService.getRandomJoke();
  res.send(result);
});

module.exports = router;