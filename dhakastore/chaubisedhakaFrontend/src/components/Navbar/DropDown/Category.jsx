import React from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <Button className="allCatTab align-items-center">
              <span className="icon1 me-2">
                <IoMenu />
              </span>
              <span className="text">All Categories</span>
              <span className="icon2 ms-2">
                <FaAngleDown />
              </span>
            </Button>
          </div>

          <div className="navPart2 col-sm-10 d-flex align-items-center">
            <ul className="list list-inline ms-auto ">
              <li className="list-inline-item">
                <Link to="/">Boys</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Girls</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Unisex</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Kids</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Shoe Cleaner</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Category;
