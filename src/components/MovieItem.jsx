import React from "react";

class MovieItem extends React.Component {

  constructor() {
    super();

    this.state = {
      willWatch: false,
    };
  }

  willWatchButton = () => {
    this.setState({
      willWatch: !this.state.willWatch
    })
  }

  render() {
    const { movie, removeMovie, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>

            <button
              type="button"
              onClick={() => {
                this.willWatchButton();
                this.state.willWatch ? removeMovieFromWillWatch(movie) : addMovieToWillWatch(movie)
              }}
              className={this.state.willWatch ? "btn btn-success" : "btn btn-secondary"}
            >
              {this.state.willWatch ? "Remove Will Watch" : "Add Will Watch"}
            </button>

            {/* {this.state.willWatch ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  this.setState({
                    willWatch: false,
                  });
                  removeMovieFromWillWatch(movie);
                }}>
                Remove Will Watch
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  this.setState({
                    willWatch: true,
                  });
                  addMovieToWillWatch(movie)
                }}
              >
                Add Will Watch
              </button>
            )} */}
          </div>
          <button type="button" onClick={removeMovie.bind(null, movie)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default MovieItem;
