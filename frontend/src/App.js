import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './Components/MovieCard.jsx';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '40px', backgroundColor: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: 'white' }}>🎬 MovieBox</h1>
      {movies.map(movie => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default App;
