import { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaMoon, } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../../redux";
import { useCheckTokenQuery } from "../../redux/api/client-api";
import { RxAvatar } from "react-icons/rx";
import logo from "../../assets/images/logo.png";
import user_foto from "../../assets/images/user.png";
import { IoSunnyOutline } from "react-icons/io5";

const Header = () => {
  let [menu, setMenu] = useState(false);
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const token = useSelector((state: RootState) => state.token.accessToken);
  const { data, isFetching, isSuccess } = useCheckTokenQuery(undefined, {
    skip: !token,
  });

  const cartData = useSelector((state: RootState) => state.cart.value);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="w-full bg-white dark:bg-gray-900 text-black dark:text-white transition-colors relative">
      <div className="bg-black text-white text-center py-2 text-sm dark:bg-gray-800">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! {" "}
        <span className="font-bold cursor-pointer underline">ShopNow</span>
      </div>

      <div className="flex justify-between items-center py-4 px-5 lg:px-20 max-w-[1500px] mx-auto relative">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          <h2 className="text-3xl font-bold">Exclusive</h2>
        </div>

        <nav className="hidden lg:flex space-x-6">
          <Link to="/" className="hover:text-gray-500 dark:hover:text-gray-300">Home</Link>
          <Link to="/contact" className="hover:text-gray-500 dark:hover:text-gray-300">Contact</Link>
          <Link to="/about" className="hover:text-gray-500 dark:hover:text-gray-300">About</Link>
          <Link to="/signup" className="hover:text-gray-500 dark:hover:text-gray-300">Sign Up</Link>
        </nav>

        <div className="hidden lg:flex items-center border border-gray-400 dark:border-gray-600 rounded-lg overflow-hidden px-3 py-2">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none w-64 dark:text-white"
          />
          <FaSearch className="text-gray-600 dark:text-gray-400 cursor-pointer" />
        </div>

        <div className="hidden lg:flex space-x-4 items-center">
          <div className="relative">
            <span className="px-1 bg-red-500 text-white rounded-2xl absolute top-[-15px] left-4">{wishlist.length}</span>
            <NavLink to="/wishlist">
              <FaHeart className="cursor-pointer text-2xl" />
            </NavLink>
          </div>
          <div className="relative">
            <span className="px-1 bg-red-500 text-white rounded-2xl absolute top-[-15px] left-4">{cartData.length}</span>
            <NavLink to="/card">
              <FaShoppingCart className="cursor-pointer text-2xl" />
            </NavLink>
          </div>

          <NavLink to={isSuccess ? "/profile" : "/sign-in"}>
            {isFetching ? (
              <div className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-600 font-bold rounded-full">
                <img src={user_foto} alt="" />
              </div>
            ) : isSuccess && data?.username ? (
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white font-bold rounded-full">
                {data.username.charAt(0).toUpperCase()}
              </div>
            ) : (
            <RxAvatar className="cursor-pointer text-4xl text-gray-700 dark:text-gray-300" />
            )}
          </NavLink>
        </div>

        {menu ? (
          <VscClose className="lg:hidden text-2xl dark:text-white" onClick={() => setMenu(!menu)} />
        ) : (
          <FaBars className="lg:hidden text-2xl dark:text-white" onClick={() => setMenu(!menu)} />
        )}
      </div>

      {menu && (
        <nav className="absolute top-[120px] left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center p-5 space-y-4 z-50 lg:hidden">
          <Link to="/" className="hover:text-gray-500 dark:hover:text-gray-300">Home</Link>
          <Link to="/contact" className="hover:text-gray-500 dark:hover:text-gray-300">Contact</Link>
          <Link to="/about" className="hover:text-gray-500 dark:hover:text-gray-300">About</Link>
          <Link to="/signup" className="hover:text-gray-500 dark:hover:text-gray-300">Sign Up</Link>
        </nav>
      )}

      {/* Dark mode toggle positioned in the top-right corner */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-4 rounded-full shadow-lg transition-all text-2xl"
      >
        {darkMode ? <IoSunnyOutline size={28} /> : <FaMoon size={28} />}
      </button>
    </header>
  );
};

export default Header;
