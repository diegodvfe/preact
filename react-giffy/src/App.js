import React from 'react';
import axios from "axios"
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import './App.css';

class App extends React.Component{
  state={
    results:[]// Aque guardo los resultados de mi busqueda, para usuralos en
  }

// El parametro es buscar
  sendSearch = (search) =>{
    const apiKey = 'pXmHkFKB7XdNUOtpxDtJvMsLbD7aK22n'
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=
    ${search}&limit=25&offset=0&rating=g&lang=de`
    )
    .then((res)=>{
      console.log(res.data.data);
      this.setState({results: res.data.data})// guardo mi busqueda en el estado
    }).catch((error)=>{
      console.log(error);
    })
  }

  componentWillMount(){
    console.log('1. WillUnmount ANTES DE QUE SE EJECUTE EL RENDER');
  }
  componentDidMount(){
    console.log('3.DidMount DESPUE DE QUE SE EJECUTA EL RENDER');
    // this.sendSearch('gatitos')
  }

  render(){
    console.log('2. SE EJECUTA EL RENDER: PINTO LA PANTALLA');
    return(
      <div>
        <h1>Hola</h1>
        <SearchBar emitSearch={this.sendSearch }/>
        <div className='grid-cards'>
          {
            // Iterar cada elemento del arreglo, e invocar un componente Image para cada uno
            this.state.results.map(gif=>( <ImageCard url={gif.images.fixed_height.url} key={gif.id}/> ))
          }
        </div>
      </div>
    )
  }
}


export default App;
