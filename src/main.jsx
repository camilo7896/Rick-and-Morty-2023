import ReactDOM from 'react-dom/client'
import './index.css'
import StateCompo from './providers/StateCompo.jsx'
import RoutePage from './routes/RoutePage.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StateCompo>
    < BrowserRouter>
    <RoutePage/>
    </BrowserRouter> 
    </StateCompo>
    )
