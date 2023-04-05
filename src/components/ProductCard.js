import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, discount, rating, stock, image }) => {
  // Calculate product price without discount
  const priceWithoutDiscount = (discountedPrice, discount) => {
    let oriPrice = discountedPrice / ((100 - discount) / 100);
    oriPrice = Math.floor(oriPrice);
    return oriPrice;
  };

  return (
    <Card className="h-48 overflow-hidden border-2 border-gray-100 cursor-pointer w-36 hover:bg-blue-gray-50">
      <Link to={`/product-detail/${id}`} onClick={() => window.scrollTo(0, 0)}>
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
      </Link>
    </Card>
  );
};

export default ProductCard;
