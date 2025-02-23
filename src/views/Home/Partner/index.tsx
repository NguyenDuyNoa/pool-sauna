import Skeleton from "@mui/material/Skeleton";

const Partner = () => {
  return (
    <div className="bg-bg-partner bg-gray-100 bg-repeat py-10">
      <div className="container mx-auto max-w-screen-xl gap-10 flex flex-col ">
        <div className="text-gray-900 text-4xl font-bold">
          Đối tác cùng các <br />
          Doanh nghiệp lớn
          <h3 className="text-primary">,,,,,,,,</h3>
        </div>
        <div className="flex gap-8 justify-center">
          <Skeleton variant="rectangular" height={100} width={200} />
          <Skeleton variant="rectangular" height={100} width={200} />
          <Skeleton variant="rectangular" height={100} width={200} />
          <Skeleton variant="rectangular" height={100} width={200} />
          <Skeleton variant="rectangular" height={100} width={200} />
          <Skeleton variant="rectangular" height={100} width={200} />
          <Skeleton variant="rectangular" height={100} width={200} />
        </div>
      </div>
    </div>
  );
};

export default Partner;
