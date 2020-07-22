import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const FruitInfo = styled.div`
   {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
  }
  .fruit-names {
    text-align: center;
    font-size: 1.5rem;
  }
  .fruit-details {
    text-align: center;
  }
  button {
    border: none;
    border-radius: 8px;
    height: 80px;
    width: 250px;
    padding: 1rem;
    background-color: #24a0ed;
    color: #fff;
    font-size: 1.5rem;
  }
  .fruit-pic {
    height: 500px;
    border-radius: 12px;
  }
  .fruit-seller {
    margin: 0.5rem;
    text-align: center;
  }
  .seller-avatar {
    border-radius: 50%;
    height: 100px;
  }
`;

const ItemDetails = () => {
  const { itemId } = useParams();
  const fruitData = Object.values(items);
  const itemInfo = fruitData.find((item) => item.name === itemId);
  const {
    name,
    latinName,
    description,
    imageSrc,
    countryOfOrigin,
    sellerId,
    price,
    quantity,
  } = itemInfo;
  const sellersData = Object.values(sellers);
  const sellerInfo = sellersData.find((seller) => seller.id === sellerId);
  const buttonText =
    quantity > 0 ? <button>{`${price}$ - Buy Now`}</button> : "Out of stock";
  return (
    <FruitInfo>
      <img className="fruit-pic" src={imageSrc} alt={name}></img>
      <div>
        <div className="fruit-names">
          <h2>{name}</h2>
          <p>{latinName}</p>
        </div>
        <div className="fruit-details">
          <p>{description}</p>
          <p>Product of {countryOfOrigin}</p>
        </div>
        {buttonText}
        <div class="fruit-seller">
          <img
            className="seller-avatar"
            src={sellerInfo.avatarSrc}
            alt={sellerInfo.id}
          />
          <p>Sold by: {sellerInfo.storeName}</p>
        </div>
      </div>
    </FruitInfo>
  );
};

export default ItemDetails;
