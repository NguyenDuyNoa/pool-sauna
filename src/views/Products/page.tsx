import React from "react";
import Sidebar from "./Sidebar";
import Card from "@/components/Card";
import { Pagination } from "@mui/material";
import { IMAGES } from "@/constants/images";

const productsData = [
  {
    id: 1,
    title: "Máy Lọc Hồ Bơi Cao Cấp",
    description:
      "Máy lọc công suất lớn, công nghệ Đức, phù hợp cho hồ bơi từ 50-200m³. Tích hợp hệ thống điều khiển thông minh, tiết kiệm điện năng.",
    image: IMAGES.mayloc,
    href: "/san-pham/may-loc-ho-boi-cao-cap",
  },
  {
    id: 2,
    title: "Đèn LED Hồ Bơi",
    description:
      "Bộ đèn LED RGB đổi màu cao cấp, chống nước IP68, điều khiển từ xa. Tạo không gian bơi lội lung linh trong đêm.",
    image: IMAGES.denled,
    href: "/san-pham/den-led-ho-boi",
  },
  {
    id: 3,
    title: "Vòi Phun Massage",
    description:
      "Hệ thống vòi phun massage cao cấp cho sông hơi. Thiết kế hiện đại, áp lực nước mạnh mẽ, dễ dàng điều chỉnh cường độ.",
    image: IMAGES.voiphun,
    href: "/san-pham/voi-phun-massage",
  },
  {
    id: 4,
    title: "Gạch Hồ Bơi Chống Trượt",
    description:
      "Gạch mosaic cao cấp chuyên dụng cho hồ bơi, chống trượt cấp độ cao, đa dạng màu sắc và họa tiết.",
    image: IMAGES.gach,
    href: "/san-pham/gach-ho-boi-chong-truot",
  },
  {
    id: 5,
    title: "Máy Bơm Nhiệt",
    description:
      "Thiết bị gia nhiệt nước thông minh, tiết kiệm năng lượng. Tự động duy trì nhiệt độ nước lý tưởng cho bơi lội.",
    image: IMAGES.maybom,
    href: "/san-pham/may-bom-nhiet",
  },
  {
    id: 6,
    title: "Cầu Thang Hồ Bơi",
    description:
      "Cầu thang inox 304 cao cấp, thiết kế chắc chắn, chống gỉ sét, dễ dàng lắp đặt và vệ sinh.",
    image: IMAGES.cauThang,
    href: "/san-pham/cau-thang-ho-boi",
  },
  {
    id: 7,
    title: "Hệ Thống Tạo Sóng",
    description:
      "Thiết bị tạo sóng chuyên nghiệp, tạo cảm giác bơi thực tế như ngoài biển. Điều chỉnh được cường độ sóng.",
    image: IMAGES.taosong,
    href: "/san-pham/he-thong-tao-song",
  },
  {
    id: 8,
    title: "Hóa Chất Xử Lý Nước",
    description:
      "Bộ sản phẩm hóa chất xử lý nước cao cấp, đảm bảo nước hồ bơi luôn trong xanh, an toàn cho người sử dụng.",
    image: IMAGES.hoachat,
    href: "/san-pham/hoa-chat-xu-ly-nuoc",
  },
];

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
          {productsData.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              href={product.href}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
};

export default Products;
