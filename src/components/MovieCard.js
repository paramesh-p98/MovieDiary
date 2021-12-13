import React from 'react';
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type }) => {
    return (
        <div className="movie-card">
            <div className="overlay">
            </div>
            <div className="movie-title">
                {movie.title}
            </div>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
            ) : (
                <div className="filler-poster"></div>
            )}
            <MovieControls type={type} movie={movie} />
        </div>
    )
}

export default MovieCard
