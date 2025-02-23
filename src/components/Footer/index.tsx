import Link from "next/link";
import React from "react";

const quickLinks = [
  { text: "Giới thiệu", href: "/gioi-thieu" },
  { text: "Dịch vụ", href: "/dich-vu" },
  { text: "Sản phẩm", href: "/san-pham" },
  { text: "Dự án", href: "/du-an" },
  { text: "Liên hệ", href: "/lien-he" },
];

const contactLinks = [
  { text: "Hotline: 0909090909", href: "/" },
  { text: "Email: info@gmail.com", href: "/" },
];

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto max-w-screen-xl py-16">
        <div className="flex justify-between gap-20">
          <div className="flex flex-col gap-8 text-gray-300">
            {/* <img
              className=" w-52"
              src="https://mixivivu.com/_next/image?url=%2Fwhite-logo.png&w=640&q=75"
              alt="logo"
            /> */}
            <div className="w-52 h-10 bg-white text-gray-900 flex items-center justify-center rounded-full">
              Logo
            </div>
            <label className=" font-medium flex flex-col gap-4">
              <h2>Công ty TNHH ...</h2>
              <h2>Quảng Ngãi, Việt Nam</h2>
              <h2>Mã số doanh nghiệp: ...</h2>
              <h2>
                Copyright © 2025 Công ty TNHH Đầu tư xây dựng và cảnh quan Thiên
                Mộc
              </h2>
            </label>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <span className="text-gray-500">Truy cập nhanh</span>
              {quickLinks.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="text-gray-400 hover:text-white font-bold"
                >
                  {item.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-gray-500">Liên hệ</span>
              {contactLinks.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="text-gray-400 hover:text-white font-bold"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
