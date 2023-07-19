import { useContext, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../src/contexts/Mycontext";
const Api = () => {
  const { setPersonajes } = useContext(MyContext);

  useEffect(() => {
    const apiConnection = 'https://rickandmortyapi.com/api/character';
    axios.get(apiConnection)
      .then((response) => {
        setPersonajes(response.data.results);
      })
      .catch((error) => {
        console.log("Error fetching data from API:", error);
      });
  }, [setPersonajes]);

  return null; // No renderizamos ningún contenido en este componente
};

export default Api;
