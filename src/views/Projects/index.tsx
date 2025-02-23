import React from "react";
import CardProject from "./CardProject";
import { Pagination } from "@mui/material";
const Projects = () => {
  return (
    <div className="container py-10 flex flex-col gap-6">
      <h1 className="text-title1 font-bold uppercase text-center text-gray-900">
        Dự án tiêu biểu
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
      <div className="flex justify-center">
        <Pagination count={10} />
      </div>
    </div>
  );
};

export default Projects;
