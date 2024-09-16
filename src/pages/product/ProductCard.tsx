import { Card, Rate } from "antd";
import { TProduct } from "./Product.interface";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addProduct } from "../../redux/features/cartSlice";

const { Meta } = Card;

// Define ProductCard component
const ProductCard = ({ item }: any) => {
  const dispatch = useAppDispatch();
  
  const {
    thumbnail,
    name,
    description,
    price,
    rating,
    _id,
    stock,
    availabilityStock,
  }: TProduct = item;


  const navigate = useNavigate();
  
  const onViewDetails = (id: string) => {
    navigate(`/product/${id}`);
  };

  // Dispatch action to add product to cart when "Add to Cart" button is clicked
  const handleOnClickDetails = (productData: TProduct) => {
    dispatch(addProduct(productData));
  };

  return (
    <Card
      hoverable
      style={{ width: "100%", maxWidth: 320 }}
      actions={[
        // Render buttons for "Add to Cart" and "View Details"
        <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between mx-4">
          <button
            className="custom-button-primary"
            onClick={() => handleOnClickDetails(item)}
            disabled={stock === 0 || availabilityStock === false}
          >
            {stock === 0 || availabilityStock === false
              ? "Stock out"
              : "Add to Cart"}
          </button>

          <button
            onClick={() => onViewDetails(_id as string)} // View product details
            className="px-6 py-2 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
          >
            View Details
          </button>
        </div>,
      ]}
      cover={<img alt="example" className="h-[210px]" src={thumbnail} />} 
    >
      <Meta title={name} description={description} />

      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-lime-500 px-3 py-1 rounded">
            <span className="text-gray-500">Price:</span> ${price}
          </span>
          <Rate disabled allowHalf defaultValue={rating} /> {/* Display product rating */}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
