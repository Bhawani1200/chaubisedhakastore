import React from "react";
import Banner from "../Banner/Banner";
import ProductsLayout from "../products/ProductsLayout";
import ProductSidebar from "../products/ProductSidebar";
import Features from "../Info/Features";
import CategoryShowcase from "../Category/CategoryShowcase";
import NewLaunches from "../Category/NewLaunches";
import Offer from "../Info/Offer";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <CategoryShowcase />
      <NewLaunches />
      <ProductsLayout />
      <ProductSidebar />
      <Features />
      <Offer />
    </div>
  );
};

export default Home;
