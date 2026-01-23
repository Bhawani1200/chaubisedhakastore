import React from "react";
import { Button, Dialog } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const CountryDropDown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="lable">Your Location</span>
          <span className="name">Nepal</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog open={true} className="locationModal">
        <h4>Choose your delivery location.</h4>
        <p>Enter your address and we will specify offer for your area.</p>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search your area..." />
          <Button>
            <IoSearchSharp />
          </Button>
        </div>

        <ul className="countryList">
          <li>
            <Button>Nepal</Button>
          </li>
          <li>
            <Button>India</Button>
          </li>
          <li>
            <Button>Bhutan</Button>
          </li>
          <li>
            <Button>USA</Button>
          </li>
          <li>
            <Button>China</Button>
          </li>
          <li>
            <Button>Japan</Button>
          </li>
          <li>
            <Button>South Korea</Button>
          </li>
          <li>
            <Button>Bangladesh</Button>
          </li>
          <li>
            <Button>Sri Lanka</Button>
          </li>
          <li>
            <Button>Pakistan</Button>
          </li>
          <li>
            <Button>Thailand</Button>
          </li>
          <li>
            <Button>Singapore</Button>
          </li>
          <li>
            <Button>Malaysia</Button>
          </li>
          <li>
            <Button>Australia</Button>
          </li>
          <li>
            <Button>United Kingdom</Button>
          </li>
          <li>
            <Button>Canada</Button>
          </li>
          <li>
            <Button>Germany</Button>
          </li>
          <li>
            <Button>France</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
