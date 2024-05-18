import {FaPizzaSlice, FaHamburger}  from 'react-icons/fa';
import{GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';

function Category() {
  return (
    <List>
    <CategoryItem>
      <FaPizzaSlice />
      <h4>South</h4>
    </CategoryItem>
    <CategoryItem>
      <FaHamburger />
      <h4>West</h4>
    </CategoryItem>
    <CategoryItem>
      <GiNoodles />
      <h4>East</h4>
    </CategoryItem>
    <CategoryItem>
      <GiChopsticks />
      <h4>North</h4>
    </CategoryItem>
  </List>
);
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0;
`;

const CategoryItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 1rem;

h4 {
  margin-top: 0.5rem;
}
`;

export default Category
