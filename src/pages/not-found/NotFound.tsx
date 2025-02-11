import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container flex flex-col items-center justify-center min-h-screen text-center'>
      <DotLottieReact
        src="https://lottie.host/69d9795b-b0b1-44ba-8aa6-62176f423392/oA2He8GjPC.lottie"
        loop
        autoplay
      />
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-yellow-500 transition"
      >
       Go Back
      </Link>
    </div>
  );
};

export default NotFound;
