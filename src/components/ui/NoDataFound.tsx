import { ExclamationCircleOutlined } from "@ant-design/icons";

const NoDataFound = () => {
  return (
    <div className="container mx-auto my-10 flex justify-center">
      <div className="bg-red-100 px-6 py-4 rounded-lg shadow-lg text-center">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-red-600 flex items-center justify-center">
          <ExclamationCircleOutlined className="mr-4 text-red-500 text-2xl md:text-3xl" />
          No Data Found!
        </h1>
        <p className="mt-2 text-sm md:text-base text-red-400">
          Please check your input or try again later.
        </p>
      </div>
    </div>
  );
};

export default NoDataFound;
