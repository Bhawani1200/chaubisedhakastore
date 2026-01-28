import React, { useContext, useEffect, useState } from "react";
import { Button, Dialog } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);

  const selectCountry = (index,country) => {
    setIsOpenModal(false);
    setSelectedTab(index);
    context.setSelectedCountry(country)
  };

  useEffect(() => {
    setCountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    } else {
      setCountryList(context.countryList);
    }
  };

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
          <input
            type="text"
            placeholder="Search your area..."
            onChange={filterList}
          />
          <Button>
            <IoSearchSharp />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index,index.country)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
