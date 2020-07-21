import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.header`
   {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  h1 {
    font-size: 2.5rem;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    width: 40%;
  }
  ul li {
    list-style: none;
    color: #0048ba;
    font-size: 1.5rem;
  }
  ul a {
    text-decoration: none;
  }
`;

const Header = (props) => {
  return (
    <NavBar>
      <h1>Fruit Emporium</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/items">
          <li>Items</li>
        </Link>
      </ul>
    </NavBar>
  );
};

export default Header;
