import React from 'react';
import axios from 'axios'

class Solicitud extends React.Component {
  state={
      results:[],
      filters: []
    }

    sendBug = () =>{
      axios.get('https://api.github.com/repos/facebook/react/issues')
       .then((res)=>{
        console.log(res);
        this.setState({results: res.data})
        this.setState({filters: res.data})// guardo mi busqueda en el estado
      }).catch((error)=>{
        console.log(error);
      })

    }
   componentDidMount(){
      this.sendBug()
    }

}

export default Solicitud;