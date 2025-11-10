import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Cart = () => {
  return (
    <div className="lg:px-14 md:px-8 px-4 py-10">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold flex items-center text-gray-900 gap-3">
          <MdShoppingCart size={45} className="text-gray-700" />
          Your Cart
        </h1>
        <p className="font-lg text-gray-600 mt-2">All your selected items</p>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-4 gap-4 pb-2 font-semibold items-center">
        <div className="md:col-span-2 justify-self-start text-lg text-slate-800 lg:ps-4">
          Product
        </div>
        <div className="justify-self-center text-slate-800">
        Price
        </div>

        <div className="justify-self-center text-slate-800">
        Quantity
        </div>
        <div className="justify-self-center text-slate-800">
        Total
        </div>
      </div>
    </div>
  );
};

export default Cart;
