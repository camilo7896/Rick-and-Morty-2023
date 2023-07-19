import { useContext, useEffect, useState} from "react"
import axios from "axios";
import StyleHome from '../pages/home.module.css'
import Share from '../coponents/Share'
import { MyContext } from "../contexts/Mycontext";

export default function Home() {
  const {personajes, setPersonajes}=useContext(MyContext)

const [search, setSearch] = useState([]);

// eslint-disable-next-line react-hooks/exhaustive-deps
const ConectionApi=async()=>{
  const apiConnection = 'https://rickandmortyapi.com/api/character';
 await axios.get(apiConnection)
    .then((response) => {
      setPersonajes(response.data.results);
    })
    .catch((error) => {
      console.log("Error fetching data from API:", error);
    });
}


 useEffect(() => {
  ConectionApi();
}, [ConectionApi]);
 console.log(personajes)



  return (
    <>
     <Share/>
   <div className={StyleHome.container}>
  
      {personajes.map((items)=>{
        return(
          <>
          <div className={StyleHome.containerCard} key={items.id}>
          {/* Image */}
            <div>
              <img className={StyleHome.img} src={items.image} alt={items.name}/>
            </div>
          
            <div className={StyleHome.info}>
            <h2>{items.name}</h2>  
            <small> {items.species}</small>
          
            </div>

            
          </div> 
          </>
        )
      })}
    </div>
    </>
  )
}
 