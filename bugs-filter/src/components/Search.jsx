import React from 'react'
import '../components/Search.css'

class Search extends React.Component{

 render(){
   return(
     <div className='search-bar'>
       <input
       className='input'
       type="text"
       placeholder='Buscar problema'
       name='search'
      //  event
      onChange={(event)=>{

         console.log(event);
        this.setState({search:event})
      }}
       />
       <button
      className='search-button'
      onClick={()=> this.props.emitSearch(this.state.sendSearch)}
      >
        Buscar
      </button>
     </div>

   )

 }

}

export default Search;