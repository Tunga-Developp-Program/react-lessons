import React, { useState, useEffect } from "react";

import "./assets/css/App.css";
import MoviesCards from "./components/Cards";
import SearchForm from "./components/Search";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=100";

function App() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="App">
      <SearchForm />

      {/* passing movies as aprop so that they are avialable in the moviesCards component */}
      <MoviesCards movies={movies} />
    </div>
  );
}

export default App;
