  import { useEffect, useState } from "react";
  import { Get } from "../data/HttpClient";
  import { MovieCard } from "./MovieCard";
  import "./contextMovieCard.css"

  export const ContextMovieCard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      Get("/character").then((data) => {
        setMovies(data.results);
        
      });
    }, []);
    return (
      <>
        <ul className="container">
          {movies.map((movie, index) => (
             <MovieCard movie={movie} key={index} />
          ))}
        </ul>
      </>
    );
  };
