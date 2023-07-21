import { useState } from "react";
import { MyContext } from "../contexts/Mycontext";

// eslint-disable-next-line react/prop-types
 const StateCompo = ({ children }) => {

    const [personajes, setPersonajes] = useState([]);
    const [tablaPersonaje, settablaPersonaje] = useState([]);
    const [buscar, setBuscar] = useState([]);
     // Estado de paginación
   const [paginacion, setPaginacion] = useState(1);
    

    return (
   <MyContext.Provider value={{personajes, setPersonajes,buscar,setBuscar,tablaPersonaje, settablaPersonaje,paginacion, setPaginacion}}>
    {children}
   </MyContext.Provider>
  )
}

export default StateCompo;
