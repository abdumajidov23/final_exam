import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGetProductByIdQuery } from "../../redux/api/product-api";
import Review from "../../components/products/Review";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineChangeCircle } from "react-icons/md";
import Heart from "../../components/products/Heart";
import SkeletonDetail from "./SkeletonDetail";

const Detail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(Number(id));
  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product?.thumbnail) {
      setMainImage(product.thumbnail);
    }
  }, [product]);

  if (isLoading) {
    return <SkeletonDetail />;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found.</div>;
  }

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prevQuantity) => {
      if (type === "increase" && prevQuantity < product.stock) {
        return prevQuantity + 1;
      } else if (type === "decrease" && prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };


  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex md:flex-col gap-2 overflow-y-auto max-h-96">
          {product.images.map((img: any, index: any) => (
            <img
              key={index}
              src={img}
              alt={product.title}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-300 transition-all duration-300 ${mainImage === img ? "border-red-500" : ""
                }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <div className="flex-1">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-500 text-sm mt-1">{product.category}</p>
        <div className="flex items-center mt-2">
          <Review rating={product.rating} review={product.reviews.length} />
          <p className="text-gray-500"> reviews</p>
          <p className="text-green-500">In stock: {product.stock}</p>
        </div>
        <div>
          <span className="text-lg font-semibold text-black">
            ${product.price}
          </span>
        </div>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <div className="mt-4">
          <h3 className="font-semibold">Rang:</h3>
          <div className="flex gap-2 mt-2">
            {["Qora", "Oq", "Qizil", "Ko'k", "Yashil"].map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border rounded-lg transition-all duration-200 ${
                  selectedColor === color ? "bg-gray-300 text-black" : "hover:bg-gray-200"
                }`}
              >
                {color}
              </button>
            ))}
          </div>

        </div>
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              className="px-3 py-1 border-r hover:bg-red-500 hover:text-white"
              onClick={() => handleQuantityChange("decrease")}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 py-1 border-l hover:bg-red-500 hover:text-white"
              onClick={() => handleQuantityChange("increase")}
              disabled={quantity >= product.stock}
            >
              +
            </button>
          </div>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
            Buy Now
          </button>

          <div className="border rounded-lg">
            <Heart product={product} form="rounded-lg" />
          </div>
        </div>
        <div className="mt-7 border pt-6 border-gray-500 rounded p-4">
          <div className="flex items-center gap-4 mb-4">
            <TbTruckDelivery className="text-3xl" />
            <div>
              <h2 className="font-semibold text-lg">Free Delivery</h2>
              <p className="text-base text-gray-700">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MdOutlineChangeCircle className="text-3xl" />
            <div>
              <h2 className="font-semibold text-lg">Return Delivery</h2>
              <p className="text-base text-gray-700">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Detail;
