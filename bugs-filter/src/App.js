import React from 'react';
import Search from './components/Search'
// import Solicitud from './components/Solicitud/Solicitud';
import './App.css';



  class App extends React.Component{


  render(){
    // console.log('2. SE EJECUTA EL RENDER: PINTO LA PANTALLA');
    return(
      <div className='App'>

      <h1>Bugs issues</h1>
      {/* <Solicitud/> */}
      <Search />
      </div>

    )
  }

}

export default App;
