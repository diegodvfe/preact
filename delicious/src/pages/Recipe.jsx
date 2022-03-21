import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import React from 'react'

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetail = async ()=>{
    const apiKey = '6f12bb4d12cb4efbb483e5b8c6b3c4a5';
    const dataApi = await fetch(
    `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`);
      const detailData = await dataApi.json();
      setDetails(detailData);
    console.log(detailData);
  }

  useEffect(() =>{
    fetchDetail()
  }, [params.name])

  return (
    <DetailRecipe>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab ('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''}
        onClick={() => setActiveTab ('ingredients')}
        >
          Ingredients
        </Button>

        {activeTab === 'instructions' && (
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
        )}

        {activeTab === 'ingredients' &&(
        <ul>
          {details.extendedIngredients.map((ingredient)=>(
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
          </ul>
        )}

      </Info>
    </DetailRecipe>
  )
}

const DetailRecipe = styled.div`
  margin: 10rem;
  margin-top: 3rem;
  display: flex;
  .active {
    background: linear-gradient(40deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
  img{
    border-radius: 10px;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: black;
  background: white;
  border: 2px solid black;
  margin-right: 1.5rem;
  font-weight: 600;
  border-radius: 5px;
`
const Info = styled.div`
  margin-left: 10rem;
`

// const ButtonRecipe = styled.button`
//   padding: 1rem 3rem;
//   color: white;
//   background: black;
//   border: 2px solid ;
//   margin-right: 2.5rem;
//   font-weight: 600;
// `
export default Recipe