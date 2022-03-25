import {StrictMode} from 'react'
import {render} from 'react-dom'
import { Weather } from './components/Weather/Weather'
import './index.css'
import App from './styles/index.css'

render(
  <StrictMode>
    <Weather/>
  </StrictMode>,
  document.getElementById('root')
)
