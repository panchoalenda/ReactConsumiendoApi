
import imagenOut from "../img/placeHolder.png";

export const GetImage = (id) => {
    //console.log(imagenOut)
    return id ? `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg` : imagenOut;
}
