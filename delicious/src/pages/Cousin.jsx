import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import {Link, useParams } from 'react-router-dom'
// import Gradient from "../components/Gradient";

 function Cousin() {

  const [cuisine, setCusine] = useState([]);
  let params = useParams();

const getCousine = async (name ) => {

    const apiKey = '6f12bb4d12cb4efbb483e5b8c6b3c4a5'
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&cuisine=${name}`);
      const recipes = await data.json();
      setCusine(recipes.results)
  }

  useEffect(()=>{
    getCousine(params.type)
    console.log(params.type)
  }, [params.type])// los params sirve para pasar un parametro  --->

  return (
    <Grid>
      {cuisine.map((item)=>{
        return(
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 95%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding:  0.6rem;
  }
`

export default Cousin