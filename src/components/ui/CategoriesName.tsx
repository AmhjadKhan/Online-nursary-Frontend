import { useGetAllProductCategoriesNameQuery } from "../../redux/api/api";
import Loading from "./Loading";

type TCategoriesName = {
  categoriesName: string;
  thumbnail: string;
};

const CategoriesName = () => {
  const { data, isLoading } = useGetAllProductCategoriesNameQuery({});

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto">
      <div className=" mx-auto mt-4 px-6">
        <h2 className="mb-6 text-4xl font-semibold text-center uppercase">
          Top Categories
        </h2>
      </div>

      <div className="flex flex-row gap-6 my-10 flex-wrap justify-center items-center">
        {data?.data.map((item: TCategoriesName) => (
          <div
            key={item?.categoriesName}
            className="border border-black p-4 rounded-lg"
          >
            <p className="text-center my-2 text-lime-600 font-semibold text-sm md:text-lg">
              {item?.categoriesName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesName;
