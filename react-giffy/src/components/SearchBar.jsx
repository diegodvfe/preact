import React from 'react'

class SearchBar extends React.Component {
// Necesito un estado que guarde las letras que voy pulsado.
  state ={
     search: " ",
  }

  render(){
    return(
      <div className='search-bar'>
          <input
            className='search-input'
            placeholder='Que deseas buscar?'
            name='search'
            // event
            onChange={(event)=>{
              //Cada vez que el usuario modifica el input
              //onChange recibe un callback con el evento y
              // este trae el valor actual
              console.log(event.target.value);
              this.setState({search:event.target.value})
            }}
          />
          <button
          className='search-button'
          onClick={()=> this.props.emitSearch(this.state.search)}
          >
            Buscar
          </button>
      </div>
    )
  }
}

export default SearchBar;