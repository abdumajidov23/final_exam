const SkeletonProfile = () => {
  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 shadow-md rounded-md animate-pulse transition-colors">
        <nav className="text-gray-500 dark:text-gray-400 mb-6">
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </nav>

        <div className="flex">
          {/* Sidebar */}
          <aside className="w-1/4 pr-8 border-r border-gray-200 dark:border-gray-700 transition-colors">
            <div className="h-6 w-40 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
            <ul className="space-y-2">
              <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-4 w-28 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </ul>

            <div className="h-6 w-40 bg-gray-300 dark:bg-gray-600 rounded mt-6 mb-4"></div>
            <ul className="space-y-2">
              <div className="h-4 w-28 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </ul>
          </aside>

          {/* Profile Form */}
          <div className="w-3/4 pl-8">
            <div className="h-6 w-40 bg-gray-300 dark:bg-gray-600 rounded mb-6"></div>

            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
                <div>
                  <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
                <div>
                  <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              <div className="h-6 w-40 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
              <div className="space-y-4 mb-6">
                <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="flex justify-end space-x-4">
                <div className="h-10 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;
