import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
    return (
      <List>

        <NavLink to={'/cuisine/South'}>
          <FaPizzaSlice/>
          <h4>South</h4>
        </NavLink>

        <NavLink to={'/cuisine/West'}>
          <FaHamburger/>
          <h4>West</h4>
        </NavLink>

        <NavLink to={'/cuisine/East'}>
          <GiNoodles/>
          <h4>East</h4>
        </NavLink>

        <NavLink to={'/cuisine/North'}>
          <GiChopsticks/>
          <h4>North</h4>
        </NavLink>

      </List>
    );
  }
  
  const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  
  `;
  export default Category;
