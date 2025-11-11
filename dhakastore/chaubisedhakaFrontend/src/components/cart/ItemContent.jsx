import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ItemContent = ({
  productId,
  productName,
  image,
  specialPrice,
  description,
  price,
  quantity,
  discount,
  cartId,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const dispatch = useDispatch();

  return (
    <div className="grid md:grid-cols-5 grid-cols-4 md:text-lg text-sm gap-4 items-center rounded-md border border-slate-200 lg:px-4 py-4 p-2">
      <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
        <div className="flex md:flex-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
            <h3></h3>
        </div>
      </div>
    </div>
  );
};

export default ItemContent;
