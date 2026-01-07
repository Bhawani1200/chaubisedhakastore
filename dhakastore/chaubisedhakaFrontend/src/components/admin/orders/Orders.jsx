import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import OrderTable from "./OrderTable";
import { useSelector } from "react-redux";
import useOrderFilter from "../../../hook/useOrderFilter";

const Orders = () => {
  const { adminOrder, pagination } = useSelector((state) => state.order);

  useOrderFilter();

  const emptyOrder = !adminOrder || adminOrder?.length === 0;
  return (
    <div className="pt-20 pb-6">
      {emptyOrder ? (
        <div className="flex flex-col items-center text-gray-600 justify-center py-10">
          <FaShoppingCart className="text-slate-900 mb-3" size={50} />
          <h2 className="text-2xl font-semibold">No orders placed</h2>
        </div>
      ) : (
        <OrderTable adminOrder={adminOrder} pagination={pagination} />
      )}
    </div>
  );
};
export default Orders;
