export const MovieCard = ({movie}) => {
console.log(movie.name)
  return (
  <>
  <li>{movie.id} - {movie.name}</li>
  </>
   )
}