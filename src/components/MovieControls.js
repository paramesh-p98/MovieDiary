import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ movie, type }) => {
    const { removeMovieFromWatchList, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);

    return (
        <>
            <div className="inner-card-controls">
                {type === 'watchlist' && (
                    <>
                        <button title="Add to Watched" className="ctrl-btn tooltip" onClick={() => addMovieToWatched(movie)}>
                            <i className="fa-fw far fa-eye"></i>
                        </button> &nbsp;&nbsp;
                        <button title="Remove" className="ctrl-btn tooltip" onClick={() => removeMovieFromWatchList(movie.id)}>
                            <i className="fa fa-times"></i>
                        </button>
                    </>
                )}

                {type === 'watched' && (
                    <>
                        <button title="Add to Watchlist" className="ctrl-btn tooltip" onClick={() => moveToWatchlist(movie)}>
                            <i className="fa-fw far fa-eye-slash"></i>
                        </button> &nbsp;&nbsp;
                        <button title="Remove" className="ctrl-btn tooltip" onClick={() => removeFromWatched(movie.id)}>
                            <i className="fa fa-times"></i>
                        </button>
                    </>
                )}

            </div >
        </>
    )
}

export default MovieControls
