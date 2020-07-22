import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FruitList = styled.div`
   {
    display: flex;
    flex-wrap: wrap;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
    margin: 0.5rem 0;
  }
  img {
    height: 200px;
  }
  .fruit-name {
    font-size: 1.5rem;
  }
`;

export const ListingGrid = ({ itemList }) => {
  let fruits = itemList.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.imageSrc} alt={item.name}></img>
        <div className="fruit-name">
          <Link to={`/items/${item.name}`}>{item.name}</Link>{" "}
        </div>
        <div>{item.latinName}</div>
      </div>
    );
  });
  return <FruitList>{fruits}</FruitList>;
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
