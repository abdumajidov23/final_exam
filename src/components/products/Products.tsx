import { memo } from "react";
import { useNavigate } from "react-router-dom";
import Heart from "./Heart";
import CartButton from "./CartButton";
import Review from "./Review";

const Products = ({ data, title }: { data: any; title: any }) => {
  const navigate = useNavigate();

  const productItems = data?.products?.map((product: any) => (
    <div
      key={product.id}
      className="relative overflow-hidden group rounded-lg shadow bg-white dark:bg-gray-800 transition-all duration-300"
    >
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="relative w-full overflow-hidden cursor-pointer transition-all duration-300"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-300"
          src={product.thumbnail}
          alt={product.name}
        />
      </div>

      <div className="absolute top-2 flex flex-col gap-2 max-sm:gap-1 right-[-50px] group-hover:right-2 duration-300 max-md:right-2">
        <Heart product={product} form="rounded-full" />
      </div>

      <div
        className="absolute w-full right-[-60px] left-1/2 transform -translate-x-1/2 group-hover:bottom-20 transition-all duration-300 
          opacity-0 group-hover:opacity-100 
          max-sm:w-[100%] h-[60px] rounded-md"
      >
        <CartButton product={product} />
      </div>

      <div className="transition-colors duration-300 p-4 max-[500px]:p-1">
        <h2 className="line-clamp-1 text-[20px] font-semibold leading-8 max-[620px]:text-lg dark:text-gray-200">
          {product.title}
        </h2>

        <div className="flex gap-4">
          <strong className="text-red-700 dark:text-red-400 max-sm:text-[14px] text-lg font-semibold">
            {product.price.toLocaleString()} USD
          </strong>
          <Review rating={product.rating} review={product?.reviews?.length} />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container my-10 px-4 max-[620px]:my-5 max-[620px]:px-2">
      <h2 className="font-poppins-bold text-2xl mb-6 text-center text-gray-900 dark:text-gray-200 max-[620px]:text-xl">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-4">
        {productItems?.map((item: any, index: any) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default memo(Products);
