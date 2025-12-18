import React from "react";

const OrderSummary = ({ totalPrice, address, cart, paymentMethod }) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 pr-4">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg shadow-xs">
              <h2 className="text-2xl font-semibold mb-2">Billing Address</h2>
              <p>
                <strong>Building Name:</strong>
              </p>
              <p>
                <strong>City: </strong>
                {address?.city}
              </p>
              <p>
                <strong>Street: </strong>
                {address?.street}
              </p>
              <p>
                <strong>State: </strong>
                {address?.state}
              </p>
              <p>
                <strong>Pincode: </strong>
                {address?.pincode}
              </p>
              <p>
                <strong>Country: </strong>
                {address?.country}
              </p>
              <p>
                <strong>NagarOrGaupalika: </strong>
                {address?.nagarOrGaupalika}
              </p>
              <p>
                <strong>WardNo: </strong>
                {address?.wardNo}
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-xs">
              <h2 className="text-2xl font-semibold mb-2">Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {paymentMethod}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
