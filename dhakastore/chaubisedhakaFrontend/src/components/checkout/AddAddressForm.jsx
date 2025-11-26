import React, { useEffect, useState } from "react";
import InputField from "../shared/InputField";
import Spinners from "../shared/Spinners";
import { useForm } from "react-hook-form";
import { FaAddressCard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addUpdateUserAddress } from "../../store/actions";
import toast from "react-hot-toast";

const AddAddressForm = ({ address, setOpenAddressModal }) => {
  const dispatch = useDispatch();
  const { btnLoader } = useSelector((state) => state.errors);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSaveAddressHandler = async (data) => {
    dispatch(
      addUpdateUserAddress(data, toast, address?.addressId, setOpenAddressModal)
    );
  };

  useEffect(() => {
    setValue("city", address?.city);
    setValue("street", address?.street);
    setValue("state", address?.state);
    setValue("country", address?.country);
    setValue("nagarOrGaupalika", address?.nagarOrGaupalika);
    setValue("wardNo", address?.wardNo);
    setValue("pincode", address?.pincode);
  }, [address]);

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSaveAddressHandler)} className="">
        <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
          <FaAddressCard className="mr-2 text-2xl" />
          {!address?.addressId ? "Add Address" : "update address"}
        </div>
        <hr className="mt-2 mb-5 text-black" />
        <div className="flex flex-col gap-4">
          <InputField
            label="City"
            required
            id="city"
            type="text"
            message="*City is required"
            placeholder="Enter your city name"
            register={register}
            errors={errors}
          />
          <InputField
            label="Street"
            required
            id="street"
            type="text"
            message="*Street is required"
            placeholder="Enter your street name"
            register={register}
            errors={errors}
          />

          <InputField
            label="State"
            required
            id="state"
            type="text"
            message="*State is required"
            placeholder="Enter your state"
            register={register}
            errors={errors}
          />
          <InputField
            label="Country"
            required
            id="country"
            type="text"
            message="*Country is required"
            placeholder="Enter your country"
            register={register}
            errors={errors}
          />
          <InputField
            label="nagarOrGaupalika"
            required
            id="nagarOrGaupalika"
            name="nagarOrGaupalika"
            type="text"
            message="*nagarOrGaupalika is required"
            placeholder="Enter your nagarOrGaupalika"
            register={register}
            errors={errors}
          />

          <InputField
            label="Ward No"
            required
            id="wardNo"
            name="wardNo"
            type="number"
            message="*Ward number is required"
            placeholder="Enter your ward"
            register={register}
            errors={errors}
          />

          <InputField
            label="Pincode"
            id="pincode"
            type="text"
            message="*Pincode is required"
            placeholder="Enter your pincode"
            register={register}
            errors={errors}
          />
        </div>
        <button
          disabled={btnLoader}
          type="submit"
          className="text-white px-4 py-2 rounded-m mt-4 bg-blue-500"
        >
          {btnLoader ? (
            <>
              {" "}
              <Spinners />
              Loading...
            </>
          ) : (
            <>Save</>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddAddressForm;
