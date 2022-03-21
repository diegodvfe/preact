import { useEffect, useState } from "react"
import Card from "./Card"
import Wrapper from "./Wrapper"
import Gradient from "./Gradient";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom'

function Veggie() {

  const [vegie, setVegie] = useState([])

  useEffect(()=>{
    getVegie()
  }, [])

  const getVegie = async () =>{
    const check = localStorage.getItem("SetVegie");

     if (check){
      setVegie(JSON.parse(check));
    }else{
          const apiKey = '6f12bb4d12cb4efbb483e5b8c6b3c4a5'
          const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9&tags=vegan`);
          const data = await api.json();

          localStorage.setItem("SetVegie", JSON.stringify(data.recipes));
          setVegie(data.recipes)
          console.log(data.recipes);
    }
  }

  return (
    <div>
      <Wrapper>
        <h3 className="popular-tips">Our Veggie pieck</h3>
        <Splide
          options={{
          perPage:3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: "5rem",
        }}
        >
        {vegie.map((recipe) =>{
          return(
            <SplideSlide key={recipe.id}>
            <Card>
              <Link to={"/recipe/" + recipe.id}> /* Este sirve para ir a la identificacion */
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient/>
              </Link>
            </Card>
            </SplideSlide>
          );
        })}
        </Splide>
      </Wrapper>
    </div>
  )
}

export default Veggie