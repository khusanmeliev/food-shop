import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0px;
`;

const Slink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  margin-right: 32px;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 96px;
  height: 96px;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 12px;
  }
  svg {
    color: white;
    font-size: 24px;
  }
  &.active {
    background: linear-gradient(to right, yellow, red);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
