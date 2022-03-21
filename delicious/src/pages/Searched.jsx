// import { Item } from 'framer-motion/types/components/Reorder/Item'
import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Searched() {

  const [searchedReciped, setSearchedReciped] = useState([])
  let params = useParams();

  const getSearched = async (name ) => {

    const apiKey = '6f12bb4d12cb4efbb483e5b8c6b3c4a5'
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=10&query=${name}`);
      const recipes = await data.json();
      setSearchedReciped(recipes.results)
  }

   useEffect(()=>{
    getSearched(params.search)
    console.log(params.search)
  }, [params.search])

  return (
    <Grid>
      {searchedReciped.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id}>
            <img src={item.image} alt="" />
            <h4> {item.title}</h4>
            </Link>
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

export default Searched;