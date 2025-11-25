import React from "react";
import { useDispatch } from "react-redux";
import { PiCityFill } from "react-icons/pi";
import { FaCheckCircle, FaStreetView } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const AddressList = ({
  addresses,
  setSelectedAddress,
  setOpenAddressModal,
}) => {
  const dispatch = useDispatch();
  const selectedUserAddress = addresses[1];

  const handleAddressSelection = (address) => {};

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <div
          key={address.addressId}
          onClick={() => handleAddressSelection(address)}
          className={`p-4 border rounded-md relative cursor-pointer ${
            selectedUserAddress?.addressId === address.addressId
              ? "bg-green-200"
              : "bg-white"
          }`}
        >
          <div className="flex items-start">
            <div className="space-y-1">
              <div className="flex items-center">
                <PiCityFill size={35} className="mr-2 text-gray-600" />
                <p className="font-semibold ">{address.city}</p>
                {selectedUserAddress?.addressId === address.addressId && (
                  <FaCheckCircle className="text-green-500 ml-3" />
                )}
              </div>
              <div className="flex items-center">
                <FaStreetView size={30} className="mr-2 text-gray-600" />
                <p className="font-semibold ">{address.street}</p>
              </div>
              <div className="flex items-center">
                <FaMapLocationDot size={30} className="mr-2 text-gray-600" />
                <p className="font-semibold ">{address.state}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
