import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const PaypalPayment = () => {
  return (
    <div className="h-50 flex justify-center items-center">
      <Alert variant="filled" severity="warning" style={{ maxWidth: "400px" }}>
        <AlertTitle>Paypal is Unavailable</AlertTitle>
        Paypal Payment is not implemented yet.Please use stripe payemnt.
      </Alert>
    </div>
  );
};

export default PaypalPayment;
