import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProduct } from "../utils/redux/features/productsSlice";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  return (
    <Link to={`/one-product/${id}`}>
      <Card onClick={() => dispatch(singleProduct(id))} className="w-96">
        <CardHeader color="blue" className="relative h-96">
          <img loading="lazy" src={img} alt={name} className="w-full h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{price}$</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => (
              <i
                key={index}
                style={{ backgroundColor: color }}
                className="fas fa-map-marker-alt fa-sm  mt-[3px] p-2 rounded-full mr-4"
              />
            ))}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
