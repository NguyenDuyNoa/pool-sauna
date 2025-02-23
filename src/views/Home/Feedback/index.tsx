import React from "react";

const Feedback = () => {
  return (
    <div className="flex flex-col gap-20 bg-bg-partner bg-gray-100 bg-repeat py-10">
      <div className="container mx-auto max-w-screen-xl ">
        <div className="flex justify-between">
          <div className="text-gray-900 text-4xl font-bold">
            Đánh giá từ những <br /> người đã trải nghiệm
            <h3 className="text-primary">,,,,,,,,</h3>
          </div>
          <label className=" w-[488px] text-lg font-medium text-gray-600">
            Khách hàng chia sẻ về những kỷ niệm tuyệt vời khi sử dụng dịch vụ
            của chúng tôi.
          </label>
        </div>
        <div className="flex gap-10">
          <h2 className=" text-9xl text-primary">&quot;</h2>
          <div className="flex flex-col gap-6">
            <h3 className=" text-lg text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a,
              commodi nam perferendis inventore facere at repudiandae
              voluptatibus nisi iure consequatur voluptatum cumque recusandae ad
              eaque quaerat tenetur beatae ea!
            </h3>
            <h2 className=" uppercase font-semibold text-gray-900">
              CHỊ LÊ THỦY -
            </h2>
          </div>
        </div>
        <div className="flex gap-6">
          <button className=" text-gray-800 bg-[#fff8f8] p-2 rounded-full border font-medium">
            Chị Lê Thủy
          </button>
          <button className=" text-gray-800 bg-[#fff8f8] p-2 rounded-full border font-medium">
            Cô Minh Hòa
          </button>
          <button className=" text-gray-800 bg-[#fff8f8] p-2 rounded-full border font-medium">
            Anh Quang Anh
          </button>
          <button className=" text-gray-800 bg-[#fff8f8] p-2 rounded-full border font-medium">
            Chị Giang
          </button>
          <button className=" text-gray-800 bg-[#fff8f8] p-2 rounded-full border font-medium">
            Bạn Chu Huyền
          </button>
          <button className=" text-gray-800 bg-[#fff8f8] p-2 rounded-full border font-medium">
            Cô Giang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
