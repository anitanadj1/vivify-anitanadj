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

  const deleteMovie = (index) => {
    const filteredMovies = [...movies.splice(0, index), ...movies.splice(index+1)];
    setMovies(filteredMovies);
  }

  const changeRating = (value, index) => {
    let selectedMovie = movies[index];
    const currentRatings = selectedMovie.ratings ? selectedMovie.ratings : []
    selectedMovie.ratings = [...currentRatings, value];
    const movieRating = selectedMovie.ratings.reduce((prevValue, rating) => prevValue + rating, 0);
    selectedMovie.rating = Number(((movieRating + value) /  (selectedMovie.ratings.length+1)).toFixed(1));
    setMovies([...movies]);
  }

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <button onClick={() => setIsFormDisplayed(true)}>Add new movie</button>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} deleteMovie={deleteMovie} changeRating={changeRating} />
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
