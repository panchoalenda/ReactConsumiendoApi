import { useParams } from "react-router-dom";
import { Get } from "../data/HttpClient";
import { useEffect, useState } from "react";
import SpinnerImp from "../components/Spinner";


export const MovieDetails = () => {
  let { movieId } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Indicar que se están cargando los datos
    
    const getMovies = async () => {
      try {
        const response = await Get("/character/" + movieId);
        setDetail(response); // Suponiendo que 'data' contiene los detalles de la película
        setLoading(false); // Indicar que se han cargado los datos
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Asegúrate de detener el estado de carga en caso de error
      }
    };
    
    getMovies(); // Llama a la función asíncrona
    
  }, [movieId]);

  
  // Verificar si detail es nulo o si está cargando
  if (loading) {
    return <p>{<SpinnerImp/>}</p>;
  }

  //Verifico que detail traiga data
  if (!detail) {
    return <p>No se encontraron detalles para esta película.</p>;
  }

  return (
    <>
      <h1>MovieDetails</h1>
      <p>{detail.id}</p>
      <p>{detail.gender}</p>
      <p>{detail.species}</p>
      <p>{detail.status}</p>
      <p>{detail.url}</p>    
    </>
  );
}


