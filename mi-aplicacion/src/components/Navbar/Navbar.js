import React, { Component } from 'react';
import { MenuItmes} from '../MenuItems'

class Navbar extends Component{
  render(){
    return(
      <nav className='NavbarItems'>
        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon">

        </div>
        <ul>
          {MenuItmes.map((item, index)=>{
            return(
              <li className={item.cName}></li>
            )
          })}
             
        </ul>
      </nav>
    )
  }
}

export default Navbar