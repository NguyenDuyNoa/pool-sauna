import React from "react";
import Skeleton from "@mui/material/Skeleton";

const Aboutus = () => {
  return (
    <div className="container mx-auto max-w-screen-xl flex flex-col gap-4 justify-center items-center">
      <h1 className="text-headline2 text-gray-900">Về chúng tôi</h1>
      <p className="text-body1 text-gray-600 text-center w-1/2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        voluptate soluta maiores dignissimos cupiditate, iste recusandae
        assumenda corporis ullam possimus veniam obcaecati! Repellat,
        accusantium alias vitae inventore velit veritatis quae.
      </p>
      <Skeleton
        height="300px"
        animation="wave"
        style={{ transform: "scale(1, 1)" }}
        className="w-2/3"
      />
    </div>
  );
};

export default Aboutus;
