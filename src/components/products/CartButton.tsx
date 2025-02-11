import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { addCart } from "../../redux/features/cart-slice";

const CartButton = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart.value);
  const isInCart = cartData?.some((cart) => cart.id === product.id);

  return (
    <button
      onClick={() => dispatch(addCart(product))}
      className="w-full py-2 text-white text-lg font-semibold bg-black transition-all duration-300 rounded-b-md 
        hover:bg-gray-800 active:scale-95"
    >
      {isInCart ? "Added" : "Add To Cart"}
    </button>
  );
};

export default React.memo(CartButton);
