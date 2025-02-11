import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux";
import { useCheckTokenQuery } from "../../redux/api/client-api";
import SkeletonProfile from "./SkeletonProfile";

const Profile = () => {
  const token = useSelector((state: RootState) => state.token.accessToken);
  const { data, isLoading } = useCheckTokenQuery(undefined, {
    skip: !token,
  });

  if (isLoading) return <SkeletonProfile />;

  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-8 shadow-md rounded-md">
        <nav className="text-gray-500 dark:text-gray-400 mb-6">
          <Link to="/" className="text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200">
            Home
          </Link>{" "}
          / <span className="text-gray-900 dark:text-gray-100">My Account</span>
        </nav>

        <div className="flex">
          {/* Sidebar */}
          <aside className="w-1/4 pr-8 border-r border-gray-200 dark:border-gray-600">
            <h2 className="text-lg font-semibold mb-4 dark:text-gray-200">Manage My Account</h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li className="text-red-500 font-semibold">My Profile</li>
              <li className="hover:text-gray-700 dark:hover:text-gray-300">Address Book</li>
              <li className="hover:text-gray-700 dark:hover:text-gray-300">My Payment Options</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6 mb-4 dark:text-gray-200">My Orders</h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li className="hover:text-gray-700 dark:hover:text-gray-300">My Returns</li>
              <li className="hover:text-gray-700 dark:hover:text-gray-300">My Cancellations</li>
            </ul>

            <Link to={"/wishlist"}>
              <h2 className="text-lg font-semibold mt-6 mb-4 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300">My Wishlist</h2>
            </Link>
          </aside>

          {/* Profile Form */}
          <div className="w-3/4 pl-8">
            <h2 className="text-xl font-semibold text-red-500 mb-6">Edit Your Profile</h2>

            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300">First Name</label>
                  <input 
                    type="text"
                    value={data?.firstName || ""}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300">Last Name</label>
                  <input
                    type="text"
                    value={data?.lastName || ""}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    value={data?.email || ""}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300">Address</label>
                  <input
                    type="text"
                    value={
                      data?.address
                        ? `${data.address.address}, ${data.address.state}, ${data.address.country}`
                        : ""
                    }
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                    disabled
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Password Changes
              </h3>
              <div className="space-y-4 mb-6">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                  disabled
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                  disabled
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                  disabled
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  Cancel
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
