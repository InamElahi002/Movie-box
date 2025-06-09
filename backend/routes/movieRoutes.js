const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});



// Add new movie
router.post('/', async (req, res) => {
  const { title, trailerUrl, thumbnail, description, genre, releaseDate } = req.body;
  try {
    const newMovie = new Movie({ title, trailerUrl, thumbnail, description, genre, releaseDate });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add movie' });

  }
  console.log('Received movie:', req.body);

});

module.exports = router;
