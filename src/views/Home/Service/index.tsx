import Card from "@/components/Card";
import React from "react";
import { IMAGES } from "@/constants/images";

const Service = () => {
  return (
    <div className="container mx-auto max-w-screen-xl flex flex-col gap-4 justify-center items-center">
      <div className="text-2xl font-bold text-gray-900">Dịch vụ</div>
      <div className="grid grid-cols-3 gap-6">
        <Card image={IMAGES.nhapho1} title="Nhà phố" description="Nhà phố là một loại hình nhà ở phổ biến ở thành phố và thường có nhiều tầng. Nó thường được thiết kế với nhiều phòng ngủ và phòng khách, phù hợp cho gia đình có nhiều thành viên." />
        <Card image={IMAGES.hoboi1} title="Hồ bơi" description="Hồ bơi là một trong những dịch vụ phổ biến nhất tại các khu resort và khách sạn. Nó cung cấp cho bạn một không gian thoải mái để tập luyện và giải trí, đồng thời tạo cảm giác thư thái và dễ chịu cho người dùng." />
        <Card image={IMAGES.banner1} title="Xông hơi" description="Xông hơi là một dịch vụ giải trí thú vị và tốt cho sức khỏe. Nó giúp loại bỏ độc tố và tạo cảm giác thư thái cho người dùng." />
      </div>
    </div>
  );
};

export default Service;
