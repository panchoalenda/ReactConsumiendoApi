import { Link } from "react-router-dom";
import "../components/movieCard.css";

export const MovieCard = ({ movie }) => {
  return (
    <>
      <Link to={"/movies/" + movie.id}>
        <li className="movieCard">
          <img
            width={230}
            height={345}
            src={movie.image}
            alt={movie.name}
            className="movieImage"
          />
          <div>{movie.name}</div>
        </li>
      </Link>
    </>
  );
};
