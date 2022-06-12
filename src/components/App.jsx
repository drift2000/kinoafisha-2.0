// import "./styles.css";
import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    // console.log(updateMovies);
    // this.state.movies = updateMovies;
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    // console.log(1);
    // this.state.moviesWillWatch.push(movie);
    // const updateMoviesWillWatcht = [...this.state.moviesWillWatch];
    // updateMoviesWillWatcht.push(movie);

    const updateMoviesWillWatcht = [...this.state.moviesWillWatch, movie];

    this.setState ({
      moviesWillWatch: updateMoviesWillWatcht
    })
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatcht = this.state.moviesWillWatch.filter(function (item) {
      return item.id !== movie.id;
    });
    // console.log(updateMovies);
    // this.state.movies = updateMovies;
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

// export default function App() {
//   return (
//     <div className="App">
//       {moviesData[0].title}
//     </div>
//   );
// }

export default App;
