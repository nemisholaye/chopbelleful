import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Specialdiet() {
  const [specialdiet, setSpecialdiet] = useState([]);

  useEffect(() => {
    getSpecialdiet();
  }, []);
  const getSpecialdiet = async () => {
    const check = localStorage.getItem("specialdiet");

    if (check) {
      setSpecialdiet(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("specialdiet", JSON.stringify(data.recipes));

      setSpecialdiet(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Special diet</h3>

        <Splide
          options={{
            perPage: 3,
            pagination: false,
            gap: "2rem",
          }}
        >
          {specialdiet.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
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
  overflow: hidden;

  img {
    border-radius: 2rem;
    height: 4rem;
    object-fit: cover;
    width: 80%;
    height: 100%;
  }

  p {
    margin: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export default Specialdiet;
