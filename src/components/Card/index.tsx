import { IMAGES } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Card = ({ className, lineClamp }: { className?: string, lineClamp?: number }) => {
  return (
    <div className={`flex flex-col flex-1 bg-white border rounded-3xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="p-4">
        <Image
          src={IMAGES.gray}
          alt="carousel1"
          width={384}
          height={296}
          className="w-full h-full object-cover rounded-3xl aspect-[3/2]"
        />
      </div>

      <div className="px-5 pb-5 flex flex-col gap-4">
        <p className="text-2xl font-bold text-gray-600">Hồ bơi</p>
        <div className="flex items-center gap-1">
          <p className={`text-sm text-gray-600 ${lineClamp ? `line-clamp-${lineClamp}` : 'line-clamp-3'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            blanditiis a voluptatum illo sint velit explicabo facilis fuga,
            obcaecati cum odio quod pariatur magnam at laudantium quisquam
            dolores, voluptatibus fugit?
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
