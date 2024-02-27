import { Link } from "react-router-dom";
import {GetImage} from "../util/getImage"
import "../components/movieCard.css";

export const MovieCard = ({ movie }) => {
  const imagenOut = GetImage(movie.id);
  console.log(imagenOut)
  return (
    <>
      <Link to={"/movies/" + movie.id}>
        <li className="movieCard">
          <img
            width={230}
            height={345}
            src={imagenOut}
            alt={movie.name}
            className="movieImage"
          />
          <div>{movie.name}</div>
        </li>
      </Link>
    </>
  );
};
