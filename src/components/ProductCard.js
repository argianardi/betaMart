import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { singleProduct } from "../utils/redux/features/productsSlice";

const ProductCard = ({
  id,
  title,
  description,
  price,
  discount,
  rating,
  stock,
  category,
  image,
}) => {
  // const dispatch = useDispatch();

  // Calculate product price without discount
  const priceWithoutDiscount = (discountedPrice, discount) => {
    let oriPrice = discountedPrice / ((100 - discount) / 100);
    oriPrice = Math.floor(oriPrice);
    return oriPrice;
  };

  return (
    <Link to={`/one-product/${id}`}>
      <Card
        // onClick={() => dispatch(singleProduct(id))}
        className="h-48 overflow-hidden border-2 border-gray-100 w-36"
      >
        <figure color="blue" className="w-full h-24">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </figure>
        {/* xs: "320px", sm: "375px", sml: "500px", mdm: "667px", mdl: "768px", lg: "960px", lgl: "1024px", xlm: "1280px", */}
        <div className="w-full p-1">
          <Typography className="overflow-hidden text-xs truncate">
            {title}
          </Typography>
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
    </Link>
  );
};

export default ProductCard;
