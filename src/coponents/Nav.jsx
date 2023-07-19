import StyleNav from '../coponents/nav.module.css';
import { } from '../routes/RoutePage'

export default function Nav() {
  return (
    <>
      <div className={StyleNav.container}>
        <div className={StyleNav.logo}>
         
            RICK AND MORTY
         
        </div>
        <div className={StyleNav.menu}>
          <ul>
            <li>Linkedin</li>
            <li>
                GitHub
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
