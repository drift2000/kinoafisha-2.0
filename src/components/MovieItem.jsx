import React from "react";

const MovieItem = (props) => {
  console.log(props);
  return (
    // <div>uo</div>
    <div>
      <p>{props.movie.title}</p>
      <button onClick={props.removeMovie.bind(this, props.movie)}>
        Delete movie
      </button>
    </div>
  );
};

export default MovieItem;