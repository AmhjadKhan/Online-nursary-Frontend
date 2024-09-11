import { useGetProductsQuery } from "../../redux/api/api";

const Product = () => {
  const { data: products} = useGetProductsQuery({});
  console.log("product: ", products?.data?.result);
  return (
    <div className="container flex flex-col mx-auto p-6 lg:flex-row lg:mb-0">
      <div className="container mx-auto mt-16 px-6">
        <h2 className="mb-6 text-4xl font-semibold text-center uppercase">
          Products page
        </h2>
        <p className="max-w-md mx-auto text-center text-grayishBlue">
         hlw product
        </p>
      </div>
    </div>
  );
};

export default Product;