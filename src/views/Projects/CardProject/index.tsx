import React from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import CropFreeIcon from '@mui/icons-material/CropFree';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const CardProject = () => {
  return (
    <div className="relative flex w-full h-[200px] border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-title1  uppercase text-gray-900">Hồ bơi</h2>
          <p className="text-base text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="flex gap-3 text-gray-900">
          <div className="flex items-center gap-1">
            <RoomOutlinedIcon sx={{ fontSize: "16px" }} />
            <p className="text-sm">Quảng Ngãi</p>
          </div>
          <div className="flex items-center gap-1">
            <CalendarMonthOutlinedIcon sx={{ fontSize: "16px" }}/>
            <p className="text-sm">2024</p>
          </div>
          <div className="flex items-center gap-1">
            <CropFreeIcon sx={{ fontSize: "16px" }}/>
            <p className="text-sm">100m2</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={IMAGES.gray}
          alt="project"
          width={300}
          height={300}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default CardProject;
