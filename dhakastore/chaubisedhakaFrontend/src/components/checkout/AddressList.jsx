import React from "react";
import { useDispatch } from "react-redux";
import { PiCityFill } from "react-icons/pi";
import {
  FaCheckCircle,
  FaEdit,
  FaLaptopCode,
  FaStreetView,
  FaTrash,
} from "react-icons/fa";
import { FaLocationCrosshairs, FaMapLocationDot } from "react-icons/fa6";
import { IoFlagSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";

const AddressList = ({
  addresses,
  setSelectedAddress,
  setOpenAddressModal,
}) => {
  const dispatch = useDispatch();
  const selectedUserAddress = addresses[0];

  const handleAddressSelection = (addresses) => {
    
  };

  const onEditButtonHandler = (addresses) => {
    setSelectedAddress(addresses);
    setOpenAddressModal(true);
  };

  const onDeleteButtonHandler = (addresses) => {
    setSelectedAddress(addresses);
  };

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
              <div className="flex items-center">
                <IoFlagSharp size={30} className="mr-2 text-gray-600" />
                <p className="font-semibold ">{address.country}</p>
              </div>
              <div className="flex items-center">
                <MdPlace size={30} className="mr-2 text-gray-600" />
                <p className="font-semibold ">{address.nagarOrGaupalika}</p>
              </div>
              <div className="flex items-center">
                <FaLocationCrosshairs
                  size={30}
                  className="mr-2 text-gray-600"
                />
                <p className="font-semibold ">{address.wardNo}</p>
              </div>

              <div className="flex items-center">
                <FaLaptopCode size={30} className="mr-2 text-gray-600" />
                <p className="font-semibold ">{address.pincode}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 absolute top-4 right-2">
            <button onClick={() => onEditButtonHandler(address)}>
              <FaEdit size={20} className="text-teal-700" />
            </button>
            <button onClick={() => onDeleteButtonHandler(address)}>
              <FaTrash size={18} className="text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
