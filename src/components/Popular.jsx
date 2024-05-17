 import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {

const [popular, setPopular] = useState ([]);

    useEffect(() => {
        getPopular();
    },[]);
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        setPopular(data.recipes);
        console.log(data.recipes);
    };


  return (
  <div>
            <Wrapper>
                <h3>Popular</h3>

                <Splide options={{
                    perPage:3,
                    pagination: false,
                    gap: "2rem",
                }}>
                {popular.map((recipe) => {
                    return(
                        <SplideSlide>
                        <Card>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                        </Card>
                        </SplideSlide>
                    );
                })}
                </Splide>
            </Wrapper>
  </div>
  );
}

const Wrapper = styled.div`
margin: 4rem 0rem;
background-color: #e86100;

`;

const Card = styled.div`
min-height: 2rem;
border-radius: 1rem;
overflow: hidden;


img{
    border-radius: 2rem;
    height: 4rem;
    object-fit: cover;
    width: 80%;
    height: 100%;
}

p{
    font-size: 1rem;
    font-weight: bold;

}

`;


export default Popular; 
