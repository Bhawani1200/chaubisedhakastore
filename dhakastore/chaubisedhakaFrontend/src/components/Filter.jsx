import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Filter = () => {
  const categories = [
    { categoryId: 1, categoryName: "saree" },
    { categoryId: 2, categoryName: "coat" },
    { categoryId: 3, categoryName: "blouse" },
    { categoryId: 4, categoryName: "daura-suruwal" },
  ];

  const [category, setCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-4">
      <div className="relative flex items-center 2xl:w-[640px] sm:w-[420px] w-full">
        <input
          type="text"
          placeholder="Search products"
          className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1976d2]"
        />
        <FiSearch className="absolute left-3 text-slate-800 size={20}" />
      </div>
      <div className="flex sm:flex-row flex-col gap-4 items-center">
        <FormControl variant="outlined" size="small">
          <InputLabel>Category</InputLabel>
          <Select
            labelId="category-select-label"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map((item) => (
              <MenuItem value={item.categoryName} key={item.categoryId}>
                {item.categoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filter;
