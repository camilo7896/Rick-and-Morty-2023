import {Route,  Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Nav from '../coponents/Nav';


export default function RoutePage() {
  return (
<>
<Nav/>
<div>
        <Routes>
            <Route path='/' element={<Home/>}/>,
        </Routes>
    </div>
    <div><small>Copiry Cristian</small></div>
    </>
  )
}
