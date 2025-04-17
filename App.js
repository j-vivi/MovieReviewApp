import React from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import movies from "./movies";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Movie Review App</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
