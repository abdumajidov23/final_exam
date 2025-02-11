const SkeletonDetail = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 animate-pulse">
      {/* Left Side (Image Section) */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex md:flex-col gap-2 overflow-y-auto max-h-96">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-20 h-20 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
        <div className="flex-1">
          <div className="w-full h-[500px] bg-gray-300 rounded-lg shadow-md"></div>
        </div>
      </div>

      {/* Right Side (Product Details) */}
      <div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 mt-2"></div>

        <div className="flex items-center mt-4 space-x-4">
          <div className="h-5 bg-gray-300 rounded w-16"></div>
          <div className="h-5 bg-gray-300 rounded w-12"></div>
          <div className="h-5 bg-gray-300 rounded w-24"></div>
        </div>

        <div className="h-6 bg-gray-300 rounded w-1/3 mt-4"></div>

        <div className="h-16 bg-gray-300 rounded w-full mt-4"></div>

        <div className="mt-6">
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="flex gap-2 mt-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-gray-300 rounded-lg"
              ></div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <div className="px-3 py-1 bg-gray-300 w-8 h-8"></div>
            <div className="px-4 bg-gray-300 w-10 h-8"></div>
            <div className="px-3 py-1 bg-gray-300 w-8 h-8"></div>
          </div>
          <div className="bg-gray-300 w-24 h-10 rounded-lg"></div>
          <div className="bg-gray-300 w-10 h-10 rounded-lg"></div>
        </div>

        <div className="mt-6 border pt-4 border-gray-500 rounded">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-gray-300 rounded"></div>
            <div>
              <div className="h-6 bg-gray-300 rounded w-32"></div>
              <div className="h-4 bg-gray-300 rounded w-48 mt-1"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-300 rounded"></div>
            <div>
              <div className="h-6 bg-gray-300 rounded w-32"></div>
              <div className="h-4 bg-gray-300 rounded w-48 mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetail;
