import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 dark:bg-gray-900 px-4 transition-colors duration-300">
      <div className="w-full max-w-xl sm:mt-[-50px]">
        <DotLottieReact
          src="https://lottie.host/69d9795b-b0b1-44ba-8aa6-62176f423392/oA2He8GjPC.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '400px' }} 
        />
      </div>
      <h1 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">Oops! Page not found</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">Kechirasiz, siz izlayotgan sahifa mavjud emas.</p>
      <Link
        to="/"
        className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 transition-transform dark:bg-green-700 dark:hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
