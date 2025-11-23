import React from "react";
import { useDispatch } from "react-redux";

const AddressList = ({
  addresses,
  setSelectedAddress,
  setOpenAddressModal,
}) => {
  const dispatch = useDispatch();
  const selectedUserAddress = 1;

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <div
          key={address.addressId}
          onClick={() => handleAddressSelection(address)}
          className={`p-4 border rounded-md relative cursor-pointer ${
            selectedUserAddress?.addressId === address.addressId
              ? "bg-green"
              : "bg-white"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default AddressList;
