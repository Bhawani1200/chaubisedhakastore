import { Button } from "@mui/material";
import React from "react";

import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {
  return (
    <div className="headerSearch ml-3 mr-3">
      <input type="text" placeholder="search for products.." />
      <Button className="button">
        <IoSearchSharp />
      </Button>
    </div>
  );
};

export default SearchBox;
