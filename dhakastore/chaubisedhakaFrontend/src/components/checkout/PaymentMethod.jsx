import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentMethod } from "../../store/actions";

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const { paymentMethod } = useSelector((state) => state.payment);
  const { errorMessage } = useSelector((state) => state.errors);

  const paymentMethodHandler = (method) => {
    dispatch(addPaymentMethod(method));
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow-md rounded-lg mt-16 border">
      <h1 className="font-semibold text-2xl mb-4">Select Payment method</h1>
      <FormControl>
        <FormControl>
          <RadioGroup
            aria-label="payment method"
            name="paymentMethod"
            value={paymentMethod}
            onChange={(e) => paymentMethodHandler(e.target.value)}
          >
            <FormControlLabel
              value="Esewa"
              control={<Radio color="primary" />}
              label="Esewa"
              className="text-gray-700"
            />
            <FormControlLabel
              value="Khalti"
              control={<Radio color="primary" />}
              label="Khalti"
              className="text-gray-700"
            />
          </RadioGroup>
        </FormControl>
      </FormControl>
    </div>
  );
};

export default PaymentMethod;
