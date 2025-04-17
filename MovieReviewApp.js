import React from "react";
import movies from "./movies";
import MovieCard from "./MovieCard";
import "./App.css";

export default function MovieReviewApp() {
  return (
    <div className="app">
      <h1>Movie Review App</h1>
      <div className="movie-row">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}