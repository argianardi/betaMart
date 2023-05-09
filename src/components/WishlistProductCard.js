import { Card, Typography } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { BsHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../utils/redux/features/wishlistSlice";

const WishlistProductCard = ({
  id,
  title,
  price,
  discount,
  rating,
  stock,
  image,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate product price without discount
  const priceWithoutDiscount = (discountedPrice, discount) => {
    let oriPrice = discountedPrice / ((100 - discount) / 100);
    oriPrice = Math.floor(oriPrice);
    return oriPrice;
  };

  return (
    <Card
      className="w-48 h-48 overflow-hidden border-2 border-gray-100 cursor-pointer hover:bg-blue-gray-50"
      onClick={() => navigate(`/product-detail/${id}`)}
    >
      {/* Product image */}
      <figure color="blue" className="w-full h-24">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </figure>

      {/* Product description */}
      <div className="w-full p-1">
        <div className="flex items-center justify-between">
          <Typography className="overflow-hidden text-xs truncate w-36">
            {title}
          </Typography>
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(removeFromWishlist(id));
            }}
          >
            <BsHeartFill color="red" />
          </button>
        </div>
        <div className="flex">
          <Typography variant="small" className="mr-12 font-bold">
            {price}$
          </Typography>
          <FaStar color="#ffc107" />
          <Typography variant="small" className="ml-1">
            {rating}
          </Typography>
        </div>
        <div className="flex items-center">
          <Typography
            variant="small"
            className="px-1 mr-1 font-bold text-gray-100 bg-orange-600 rounded-md"
          >
            {discount}%
          </Typography>
          <Typography className="text-xs line-through">
            {priceWithoutDiscount(price, discount)}$
          </Typography>
        </div>
        <Typography variant="small">Stock: {stock}</Typography>
      </div>
    </Card>
  );
};

export default WishlistProductCard;
