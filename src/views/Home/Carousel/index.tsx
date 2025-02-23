"use client";
import { IMAGES } from "@/constants/images";

const Carousel = () => {

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-2">
        <div className="h-60">
          <img
            src={IMAGES.gray}
            className="w-full h-full object-cover rounded-lg"
            alt="Blue fabric"
          />
        </div>

        <div className="h-60">
          <img
            src={IMAGES.gray}
            className="w-full h-full object-cover rounded-lg"
            alt="Orange fabric"
          />
        </div>

        <div className="row-span-2 h-full">
          <img
            src={IMAGES.gray}
            className="w-full h-full object-cover rounded-lg"
            alt="Green fabric"
          />
        </div>
        <div className="col-span-2 flex gap-2">
          <div className="w-1/4 h-60">
            <img
              src={IMAGES.gray}
              className="w-full h-full object-cover rounded-lg"
              alt="Mint fabric"
            />
          </div>

          <div className="w-3/4 h-60">
            <img
              src={IMAGES.gray}
              className="w-full h-full object-cover rounded-lg"
              alt="Red fabric"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
