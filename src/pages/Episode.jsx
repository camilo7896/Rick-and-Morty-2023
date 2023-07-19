import axios from "axios";
import { useEffect, useState } from "react";

export default function Episode() {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const apiConnection = "https://rickandmortyapi.com/api/episode";
        axios.get(apiConnection)
          .then((response) => {
            setEpisodes(response);
          })
          .catch((error) => {
            console.log("Error fetching data from API:", error);
          });
      }, [setEpisodes]);
       console.log(episodes)
  return (
    <div>
      <h1>Episode</h1>
    </div>
  )
}
