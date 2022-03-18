import { useEffect, useState } from "react";
// import styled from "styled-components"
import Card from "./Card"
import Wrapper from "./Wrapper"
import Gradient from "./Gradient";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


function Popular() {

  const [popular, setPopular] = useState([])

    useEffect(() =>{
      getPopular();
    }, [])

  const getPopular = async () =>{ // Esta para no opstaculizar la llamada
    const check = localStorage.getItem("SetPopular");

    if (check){
      setPopular(JSON.parse(check));
    }else{
          const apiKey = '6f12bb4d12cb4efbb483e5b8c6b3c4a5'
          const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`);
          const data = await api.json();

          localStorage.setItem("SetPopular", JSON.stringify(data.recipes));
          setPopular(data.recipes)
          console.log(data.recipes);
    }
    // console.log(data);
  }


    return (
      <div>
            <Wrapper>
              <h3 className="popular-tips">Popular Tips</h3>
              <Splide
              options={{
                perPage:4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: "5rem",
              }}
              >
              {popular.map((recipe) =>{
                return(
                  <SplideSlide key={recipe.id}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient/>
                  </Card>
                  </SplideSlide>
                );
              })}
              </Splide>
            </Wrapper>
      </div>
    )
}

export default Popular