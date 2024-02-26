import { useParams } from "react-router-dom";
import { Get } from "../data/HttpClient";
import { useEffect, useState } from "react";


export const MovieDetails = () => {
  let { movieId } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect( () => {
     Get("/character/" + movieId).then((data) => {
      setDetail(data);
     console.log(data.id);
    });
  }, [movieId]);
//console.log(detail.id)
  return (
    <>
      <h1>MovieDetails</h1>
      
      {/* <p>{detail.id}</p>
      <p>{detail.gender}</p>
      <p>{detail.species}</p>
      <p>{detail.status}</p>
      <p>{detail.url}</p>     */}

    </>
  )
}