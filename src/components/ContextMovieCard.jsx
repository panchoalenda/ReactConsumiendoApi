  import { useEffect, useState } from "react";
  import { Get } from "../data/HttpClient";
  import { MovieCard } from "./MovieCard";

  export const ContextMovieCard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      Get("/episode").then((data) => {
        setMovies(data.results);
        
      });
    }, []);
    console.log(movies);
    return (
      <>
        <ul>
          {movies.map((movie, index) => (
             <MovieCard movie={movie} key={index} />
          ))}
        </ul>
      </>
    );
  };
