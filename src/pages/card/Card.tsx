// import React from "react";
// import CartButton from "../../components/products/CartButton";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleLike } from "../../redux/features/wishlist-slice";
// import { RootState } from "../../redux";
// import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaMoon, FaSun } from "react-icons/fa";

// const Card = ({ product }: { product: any }) => {
//   const dispatch = useDispatch();
//   const wishlist = useSelector((state: RootState) => state.wishlist.value);
//   const isLiked = wishlist.some((item) => item.id === product.id);

//   return (
//     <div className="border rounded-md shadow-lg overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 relative">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover"
//       />
//       <button
//         onClick={() => dispatch(toggleLike(product))}
//         className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md"
//       >
//         <FaShoppingCart className={`h-6 w-6 ${isLiked ? "text-red-500" : "text-gray-400"}`} />
//       </button>
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
//           {product.name}
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
//         <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">
//           ${product.price}
//         </p>
//       </div>
//       <CartButton product={product} />
//     </div>
//   );
// };

// export default React.memo(Card);
