import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "../home/HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <HeroBanner />
      <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
        {products &&
          products
            ?.slice(0, 8)
            .map((item, i) => <ProductCard key={i} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
