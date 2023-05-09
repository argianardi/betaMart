import React, { useState, useCallback, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { BsCart, BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { addToCart } from "../utils/redux/features/cartSlice";
import productAPI from "../services/productAPI";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";
import { addToWishlist } from "../utils/redux/features/wishlistSlice";
import { removeFromWishlist } from "../utils/redux/features/wishlistSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const [getProductLoading, setGetProductLoading] = useState(true);
  const [getProductError, setGetProductError] = useState("");
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [productsByCategoryLoading, setProductsByCategoryLoading] =
    useState(true);
  const [productsByCategoryError, setProductsByCategoryError] = useState("");

  const relatedProducts = productsByCategory.filter(
    (item) => item.id !== product.id
  );
  const wishlistProducts = useSelector(
    (state) => state.wishlist.wishlistProducts
  );

  const isWishlist = wishlistProducts.some(
    (wishlistProduct) => wishlistProduct.id === product.id
  );

  // get product by id
  const getProductById = useCallback(async () => {
    await productAPI
      .get(`/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        setGetProductError(err.message);
      })
      .finally(() => {
        setGetProductLoading(false);
      });
  }, [productId]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  // get products by category
  const getProductsByCategory = useCallback(async () => {
    await productAPI
      .get(`/category/${product.category}`)
      .then((res) => {
        setProductsByCategory(res.data.products);
      })
      .catch((err) => {
        setProductsByCategoryError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setProductsByCategoryLoading(false);
      });
  }, [product.category]);

  useEffect(() => {
    getProductsByCategory();
  }, [getProductsByCategory]);

  // Handle decrease quantity
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //   Handle  Increase quantity
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Layout>
      {/* Product detail */}
      <div className="max-w-full mdm:w-[500px] mdm:border-2  mdm:border-gray-200 lgm:w-[800px] rounded-none mdm:rounded-md mdl:w-[700px] mx-auto my-5 overflow-hidden">
        <div className="items-end block mdl:flex">
          {/*Product image, price, title  and wishlist & cart button*/}
          <div className="w-full mdl:w-[300px]">
            <figure className="min-w-full -mx-8 h-[300px] sm:h-[370px] sml:h-[500px] mdm:h-[400px] mdl:w-[300px] mdl:h-[300px] mdm:mx-auto ">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="object-cover object-center w-full h-full"
              />
            </figure>
            <div className="flex justify-around mt-2 text-black ">
              {isWishlist ? (
                <button
                  onClick={() => dispatch(removeFromWishlist(product.id))}
                >
                  <BsHeartFill color="red" size={20} />
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch(
                      addToWishlist({
                        id: product.id,
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        discount: product.discountPercentage,
                        rating: product.rating,
                        stock: product.stock,
                        image: product.thumbnail,
                      })
                    )
                  }
                >
                  <BsHeart color="red" size={20} />{" "}
                </button>
              )}
              <div className="flex items-center border-[1px] border-black rounded-md h-7 mx-2">
                <button
                  onClick={handleDecreaseQuantity}
                  className="px-2 font-bold"
                >
                  -
                </button>
                <p className="mx-2">{quantity}</p>
                <button
                  onClick={handleIncreaseQuantity}
                  className="px-2 font-bold"
                >
                  +
                </button>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      price: product.price,
                      quantity: quantity,
                      image: product.thumbnail,
                      totalPricePerProduct: product.price * quantity,
                      title: product.title,
                    })
                  )
                }
                className="flex items-center bg-[#00aa5b] rounded-sm px-2"
              >
                <BsCart color="white" />{" "}
                <span className="ml-[2px] text-sm text-white font-bold">
                  +Cart
                </span>
              </button>
            </div>
            <h4 className="pt-2 pl-2 text-sm font-semibold text-black font-inter">
              ${quantity * product.price}
            </h4>
            <h5 className="pl-2 text-base text-black">{product.title}</h5>
          </div>
          {/* Product details */}
          <div className="w-full mdl:w-[55%] mb-0 pl-0 mdl:pl-4 mdl:mb-5">
            <div className="pl-2 pt-1 mt-4 lgl:mt-0 text-sm text-gray-800 border-t-[2px] border-t-gray-800 mdl:border-0">
              <h4 className="font-bold text-black">Product Details</h4>
              <p>Category: {product.category}</p>
              <p>Stock: {product.stock}</p>
              <p>Discount: {product.discount}%</p>
              <div className="flex">
                <span>Rating:</span>
                <span className="flex items-center ml-1">
                  {" "}
                  <FaStar color="#ffc107" /> {product.rating}
                </span>
              </div>
            </div>
            <div className="pl-2 mt-3 text-sm">
              <h4 className="font-bold text-black">Product Description</h4>
              <p className="text-gray-800">{product.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-5 border-t border-gray-400 pt-7 ">
        <h2 className="font-bold font-inter">Related Products</h2>
        <div className="mt-2 grid grid-cols-2 sml:grid-cols-3 mdm:grid-cols-4 lgm:grid-cols-5 xlm:grid-cols-7 xs:w-[310px] sm:w-full mx-auto mdm:w-[650px] sml:w-[460px] lgm:w-[800px] lgl:w-[850px] xlm:w-[1100px] gap-y-2">
          {relatedProducts?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              discount={product.discountPercentage}
              rating={product.rating}
              stock={product.stock}
              category={product.category}
              image={product.thumbnail}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
