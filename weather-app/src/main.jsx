import {StrictMode} from 'react'
import {render} from 'react-dom'
import { Menu } from './components/Menu'
import { Weather } from './components/Weather/Weather'
import './index.css'
import App from './styles/index.css'

render(
  <StrictMode>
    <>
    <Menu/>
    <Weather/>
    </>
  </StrictMode>,
  document.getElementById('root')
)
