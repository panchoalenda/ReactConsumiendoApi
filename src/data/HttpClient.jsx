//import axios from "axios";

//  const API = "https://rickandmortyapi.com/api";
// export const Get = async (path) => {
//   try {
//     const result = await axios.get(API + path);
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
//   return null;
// };

/*SIN USAR AXIOS */
const API = "https://rickandmortyapi.com/api";
export const Get = async (path) => {
  const result = await fetch(API + path, {
    headers: {
     // Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNMU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return await result.json();
};
