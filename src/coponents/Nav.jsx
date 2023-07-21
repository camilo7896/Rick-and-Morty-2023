import { Link } from 'react-router-dom';
import StyleNav from '../coponents/nav.module.css';
import { } from '../routes/RoutePage'
import { MyContext } from '../contexts/Mycontext';
import { useContext } from 'react';

export default function Nav() {
  const {setPaginacion } = useContext(MyContext)
  const resetPaginacion=()=>{
    setPaginacion(1)
  }
  return (
    <>
      <div className={StyleNav.container}>
        <div onClick={resetPaginacion} className={StyleNav.logo}>
            RICK AND MORTY
        </div>
        <div className={StyleNav.menu}>
          <ul>
            <Link to={'https://www.linkedin.com/in/cristian-camilo-garcia/'}target="_blank" rel="noopener noreferrer">
            <li>Linkedin</li>
            </Link>
            <Link to={'https://github.com/camilo7896'}target="_blank" rel="noopener noreferrer">
            <li>Git Hub</li>
            </Link>
            <Link to={'https://portfolio-cristian-garcia.netlify.app/'}target="_blank" rel="noopener noreferrer">
            <li>Portafolio</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}
