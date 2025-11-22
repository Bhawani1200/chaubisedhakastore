import React, { useState } from "react";
import InputField from "../shared/InputField";
import Spinners from "../shared/Spinners";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaAddressBook, FaAddressCard } from "react-icons/fa";
import { useSelector } from "react-redux";

const AddAddressForm = () => {
  const { btnLoader } = useSelector((state) => state.errors);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSaveAddressHandler = async ({ data }) => {
    console.log("Clicked me");
  };

  return (
    <div className="">
      <form onClick={handleSubmit(onSaveAddressHandler)} className="">
        <div className="flex justify-center items-center mb-4 font-semibold text-2xl text-slate-800 py-2 px-4">
          <FaAddressCard className="mr-2 text-2xl" />
          Add Address
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
            label="nagarOrGauPalika"
            required
            id="nagarOrGauPalika"
            type="text"
            message="*nagarOrGauPalika is required"
            placeholder="Enter your nagarOrGauPalika"
            register={register}
            errors={errors}
          />
          <InputField
            label="Ward"
            required
            id="ward"
            type="number"
            message="*Ward is required"
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
