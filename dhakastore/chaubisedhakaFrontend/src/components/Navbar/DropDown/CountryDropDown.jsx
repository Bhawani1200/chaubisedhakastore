import { Button } from "@mui/material";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const CountryDropDown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="lable">Your Location</span>
          <span className="name">Nepal</span>
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>
    </>
  );
};

export default CountryDropDown;
