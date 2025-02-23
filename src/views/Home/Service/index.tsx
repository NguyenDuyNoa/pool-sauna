import Card from "@/components/Card";
import React from "react";

const Service = () => {
  return (
    <div className="container mx-auto max-w-screen-xl flex flex-col gap-4 justify-center items-center">
      <div className="text-2xl font-bold text-gray-900">Dịch vụ</div>
      <div className="grid grid-cols-4 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Service;
