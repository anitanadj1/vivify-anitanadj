import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, deleteMovie, changeRating) => (
  <div className="card-deck">
    {movies.map((movie, index) => (
      <MovieCard key={movie.id} movie={movie} deleteMovie={() => deleteMovie(index)} changeRating={(value => changeRating(value, index))} />
    ))}
  </div>
);

const MovieList = ({ movies, deleteMovie, changeRating }) => <div>{getMovies(movies, deleteMovie, changeRating)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
