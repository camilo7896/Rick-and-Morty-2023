import { useState } from "react";
import { MyContext } from "../contexts/Mycontext";

// eslint-disable-next-line react/prop-types
 const StateCompo = ({ children }) => {

    const [personajes, setPersonajes] = useState([]);
    

    return (
   <MyContext.Provider value={{personajes, setPersonajes }}>
    {children}
   </MyContext.Provider>
  )
}

export default StateCompo;
