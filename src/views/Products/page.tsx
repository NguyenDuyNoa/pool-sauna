import React from "react";
import Sidebar from "./Sidebar";
import Card from "@/components/Card";
import { Pagination } from "@mui/material";
const Products = () => {
  return (
    <div className="container my-8 flex gap-8">
      <Sidebar />
      <div className="flex flex-col gap-4">
        <div className="text-gray-600 flex items-center my-2">
          <h4>Xếp theo :</h4>
          <span className="text-gray-600 flex items-center">
            <input
              type="radio"
              className="mr-2 ml-4 w-5 h-5"
              // checked={sort === "nameAsc"}
              // onChange={() => handleSortOptionChange("nameAsc")}
            />
            Tên A - Z
          </span>
          <span className="text-gray-600 flex items-center">
            <input
              type="radio"
              className="mr-2 ml-4 w-5 h-5"
              // checked={sort === "nameDesc"}
              // onChange={() => handleSortOptionChange("nameDesc")}
            />
            Tên Z - A
          </span>
          <span className="text-gray-600 flex items-center">
            <input
              type="radio"
              className="mr-2 ml-4 w-5 h-5"
              // checked={sort === "priceAsc"}
              // onChange={() => handleSortOptionChange("priceAsc")}
            />
            Giá thấp đến cao
          </span>
          <span className="text-gray-600 flex items-center">
            <input
              type="radio"
              className="mr-2 ml-4 w-5 h-5"
              // checked={sort === "priceDesc"}
              // onChange={() => handleSortOptionChange("priceDesc")}
            />
            Giá cao đến thấp
          </span>
        </div>
        <hr className="border-gray-300" />
        <div className="grid grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center">
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
};

export default Products;
