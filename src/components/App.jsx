// import "./styles.css";
import React from "react";
import { moviesData } from "../moviesData";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData
    };
  }

  render() {
    console.log(this);
    return (
      <div>
        {this.state.movies.map(function (movies) {
          return <p>{movies.title}</p>;
        })}
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
