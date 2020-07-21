import React from "react";
import { ListingGrid } from "./ListingGrid";
import { items } from "../data";

const Home = (props) => {
  let itemList = Object.values(items);
  return (
    <div>
      <h2>
        Fruit emporium sells the finest fruits from this world and beyond.
        Browse items:
      </h2>
      <ListingGrid itemList={itemList} />
    </div>
  );
};

export default Home;
