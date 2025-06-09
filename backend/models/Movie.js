const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  trailerUrl: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: false // You can store a preview image if needed
  },
  description: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    required: false
  },
  releaseDate: {
    type: Date,
    required: false
  }
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
