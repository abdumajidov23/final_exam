import { useNavigate } from "react-router-dom";

const EmptyWishlist = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center h-[450px] bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Your Wishlist is Empty
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 mb-6">
        Explore our collection and add your favorite items to your wishlist!
      </p>
      <button
        className="px-4 sm:px-6 py-2 sm:py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg shadow hover:bg-gray-700 dark:hover:bg-gray-300 transition duration-300"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default EmptyWishlist;
