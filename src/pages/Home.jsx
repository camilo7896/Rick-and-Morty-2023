import { useContext, useEffect, useRef} from "react"
import axios from "axios";
import StyleHome from '../pages/home.module.css';
import { MyContext } from "../contexts/Mycontext";
import rick from "../assets/rick.png";

export default function Home() {
  // llamado de Conetxto
  const { personajes, setPersonajes, buscar, setBuscar, tablaPersonaje, settablaPersonaje,paginacion, setPaginacion } = useContext(MyContext)

  const scrollContainer = useRef(null);
 
  let urlApi='https://rickandmortyapi.com/api/character/?page='
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // Conexion a la API
  const ConexionApi = async () => {
    const baseUrl = urlApi.concat(paginacion);
    await axios.get(baseUrl)
      .then((response) => {
        setPersonajes(response.data.results);
        settablaPersonaje(response.data.results)
        console.log(personajes)
      })
      .catch((error) => {
        console.log("Error fetching data from API:", error);
      });
  }

  // Ejecucion del llamado a la API
  useEffect(() => {
    ConexionApi();
  }, [paginacion]);

  const actualizarPersonajes = (data) => {
    setPersonajes((prevPersonajes) => [...prevPersonajes, ...data]);
  };

  // Evento de estado paginacion
  const paginarAdelante = () => {
    setPaginacion((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Hacemos scroll hacia arriba
  };
 

  const paginarAtras=()=>{
    setPaginacion(paginacion -1)
  }

console.log(paginacion)
  const busqueda = (event) => {
    setBuscar(event.target.value)
    filtrar(event.target.value)
  }

  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = tablaPersonaje.filter((elemento) => {
      if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.species.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.gender.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento
      }
    });
    setPersonajes(resultadoBusqueda)
  }

  const filtrarPorGenero = (genero) => {
    const resultadosFiltrados = tablaPersonaje.filter((elemento) =>
      elemento.gender.toLowerCase().includes(genero.toLowerCase())
    );
    setPersonajes(resultadosFiltrados);
  };

  const filtrarPorEspecie = (especie) => {
    const resultadosFiltrados = tablaPersonaje.filter((elemento) =>
      elemento.species.toLowerCase().includes(especie.toLowerCase())
    );
    setPersonajes(resultadosFiltrados);
  };

  return (
    <>
      <div className={StyleHome.containerInput}>
        <input className={StyleHome.input} onChange={busqueda} value={buscar} placeholder=" Buscar" />
      </div>

      {/* Botones de filtrado */}
    
      <div className={StyleHome.containerFiltrado}>
        <button className={StyleHome.btn} onClick={() => filtrarPorGenero("male")}>Masculinos</button>
        <button className={StyleHome.btn} onClick={() => filtrarPorGenero("female")}>Femeninos</button>
        <button  className={StyleHome.btn} onClick={() => filtrarPorEspecie("human")}>Humanos</button>
        <button className={StyleHome.btn} onClick={() => filtrarPorEspecie("alien")}>Aliens</button>
        {/* Agrega más botones de filtrado según tus necesidades */}
      </div>

      <div className={StyleHome.container}>
        {personajes.map((items) => {
          return (
            <>
              <div className={StyleHome.containerCard} key={items.id}>
                {/* Image */}
                <div className={StyleHome.title}>
                  <h2>{items.name}</h2>
                </div>

                <div>
                  <img className={StyleHome.img} src={items.image} alt={items.name} />
                </div>

                <div className={StyleHome.info}>
                  <div className={StyleHome.description}>
                    <ul>
                      <li><strong>Gender:</strong> {items.gender}</li>
                      <li><strong>Specie:</strong> {items.species}</li>
                    </ul>
                  </div>
                </div>
              </div>

            </>
          )
        })}
      </div>
      <div ref={scrollContainer} className={StyleHome.containerPaginacion}>
  <button className={StyleHome.btn} onClick={() => paginarAtras()}>Atras</button>
  <p>{paginacion}</p>
  <button className={StyleHome.btn} onClick={() => paginarAdelante()}>Adelante</button>
</div>

       <div className={StyleHome.bannerFooter}>
          <img src={rick} alt="Rick"/>
        </div>
    </>
  )
}
