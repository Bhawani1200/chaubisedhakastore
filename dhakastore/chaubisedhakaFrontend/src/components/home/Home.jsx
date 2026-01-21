import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../home/HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="lg:px-14 sm:px-8 px-4">
      <div className="py-6">
        <HeroBanner />
      </div>
      <div className="py-5">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className="mb-4 font-bold text-3xl md:text-4xl text-balance text-foreground">
            Our Products
          </h1>
          <p className="text-2xl text-muted-foreground font-semibold  mx-auto text-pretty text-gray-700">
            {" "}
            Explore our extensive collection of authentic traditional clothing
          </p>
        </div>
        {isLoading ? (
          <Loader />
        ) : errorMessage ? (
          HeroBanner(
            <div className="flex justify-center items-center h-50">
              <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
              <span className="text-slate-800 text-l font-medium">
                {errorMessage}
              </span>
            </div>
          )
        ) : (
          <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
            {products &&
              products
                ?.slice(0, 8)
                .map((item, i) => <ProductCard key={i} {...item} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
