import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import MovieForm from './MovieForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const addMovie = (movie) => {
    movies.push(movie);
    setMovies([...movies]);
    setIsFormDisplayed(false);
  }

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <button onClick={() => setIsFormDisplayed(true)}>Add new movie</button>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} />
        </div>
      </div>
      {isFormDisplayed &&
        <div className="movie-form-wrapper">
          <MovieForm addMovie={addMovie} />
        </div>
      }
    </div>
  );
}

export default Movies;
