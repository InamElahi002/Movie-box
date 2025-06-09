import React from 'react';
import ReactPlayer from 'react-player/youtube';
import './MovieCard.css'; // 👈 import the CSS

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      {movie.trailerUrl && (
        <ReactPlayer
          url={movie.trailerUrl}
          controls
          width="100%"
          height="200px"
        />
      )}
    </div>
  );
};

export default MovieCard;
