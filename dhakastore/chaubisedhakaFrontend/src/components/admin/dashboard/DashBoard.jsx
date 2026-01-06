import React, { useEffect } from "react";
import DashBoardOverview from "./DashBoardOverview";
import { FaBoxOpen, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { analyticsAction } from "../../../store/actions";
import Loader from "../../shared/Loader";
import ErrorPage from "../../shared/ErrorPage";

const DashBoard = () => {
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  const {
    analytics: { productCount, totalOrders, totalRevenue },
  } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(analyticsAction());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <ErrorPage message={errorMessage} />;
  }

  return (
    <div>
      <div
        className="flex md:flex-row mt-8 flex-col 
      lg:justify-between border border-slate-400 rounded-lg bg-linear-to-r from-blue-50 to-blue-100 shadow-lg
      "
      >
        <DashBoardOverview
          title="Total Products"
          amount={productCount}
          icon={FaBoxOpen}
        />

        <DashBoardOverview
          title="Total Orders"
          amount={totalOrders}
          icon={FaShoppingCart}
        />

        <DashBoardOverview
          title="Total Revenue"
          amount={totalRevenue}
          icon={FaDollarSign}
        />
      </div>
    </div>
  );
};

export default DashBoard;
