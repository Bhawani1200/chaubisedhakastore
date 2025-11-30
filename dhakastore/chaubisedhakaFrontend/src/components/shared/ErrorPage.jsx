import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-14">
      <FaExclamationTriangle className="text-red-500 mb-4 text-6xl" />
      <p className="text-center mb-6 text-gray-600">
        {message ? message : "An unexpected error has occurred"}
      </p>
    </div>
  );
};

export default ErrorPage;
