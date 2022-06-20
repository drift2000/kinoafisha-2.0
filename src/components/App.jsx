import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import {API_URL, API_KEY_3} from "../utils/api"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: []
    };
  }

  componentDidMount() {
    fetch( `${API_URL}/discover/movie?api_key=${API_KEY_3}`).then((Response) =>{
      return Response.json()
    }).then((data) => {
      this.setState({
        movies: data.results
      })
    })
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatcht = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatcht
    })
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatcht = this.state.moviesWillWatch.filter(function (item) {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatcht
    });
  };

  render() {
    console.log(this);
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
