import React from "react";
import Banner from "../Banner/Banner";
import NewLaunches from "./NewLaunches";
import ProductsLayout from "../products/ProductsLayout";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <NewLaunches />
      <ProductsLayout />
    </div>
  );
};

export default Home;
