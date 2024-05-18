import {FaPizzaSlice, FaHamburger}  from 'react-icons/fa';
import{GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <div>
      <div>
        <FaPizzaSlice/>
        <h4>South</h4>
      </div>
      <div>
        <FaHamburger/>
        <h4>West</h4>
      </div>
      <div>
        <GiNoodles/>
        <h4>East</h4>
      </div>
      <div>
        <GiChopsticks/>
        <h4>North</h4>
      </div>
    </div>
  );
}

export default Category
