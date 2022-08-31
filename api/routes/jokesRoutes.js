const express = require('express');
const router = express.Router();
const jokesService = require('../services/jokesServices');
const connection = require('../../config/dbConnectionConfig');

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

// Get a joke by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await jokesService.getJokeById(id);
  if (result) res.send(result)
  else res.status(404).send(`Couldn't find any jokes with id: ${id}`)
});


// Add a new joke
router.post('/add', (req, res) => {
  const sql = 'INSERT INTO joke SET ?';

  const newJoke = {
    type: req.body.type,
    setup: req.body.setup,
    punchline: req.body.punchline
  }

  connection.query(sql, newJoke, error => {
    if (error) throw error;
    res.status(201).send('Joke created successfully!');
  });
  
});

// Update a joke
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { type, setup, punchline } = req.body;
  const sql = `UPDATE joke SET type = '${type}', setup = '${setup}', punchline = '${punchline}' WHERE id = ${id}`;

  connection.query(sql, (error, result) => {
    console.log(result)
    if (error) throw error;
    if (result.affectedRows === 0) {
      res.status(404).send(`Couldn't find any jokes with id: ${id}`);
    } else {
      res.send('Joke updated successfully!');
    }
  });
});

// Delete a joke
module.exports = router;