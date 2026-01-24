import React, { useState } from "react";
import { Button, Dialog } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="lable">Your Location</span>
          <span className="name">Nepal</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        className="locationModal"
        onClose={() => setIsOpenModal(false)}
      >
        <h4 className="mb-0">Choose your delivery location.</h4>
        <Button className="btn" onClick={() => setIsOpenModal(false)}>
          <IoClose />
        </Button>
        <p>Enter your address and we will specify offer for your area.</p>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search your area..." />
          <Button>
            <IoSearchSharp />
          </Button>
        </div>

        <ul className="countryList mt-3">
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Nepal</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>India</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Bhutan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>USA</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>China</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Japan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>South Korea</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Bangladesh</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Sri Lanka</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Pakistan</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Thailand</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Singapore</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Malaysia</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Australia</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>
              United Kingdom
            </Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Canada</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>Germany</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>France</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
