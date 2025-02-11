import image from "../../assets/images/login.png";
import { useSignInClientMutation } from "../../redux/api/client-api";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  username: yup
    .string()
    .matches(/^[a-zA-Z0-9_]+$/, "Invalid username format.")
    .required("Username is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password is required."),
});

const SignIn = () => {
  const [signInClient, { isLoading }] = useSignInClientMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data:any) => {
    try {
      const response = await signInClient(data).unwrap();
      localStorage.setItem("accessToken", response.accessToken);
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <div className="md:hidden flex justify-center mt-6">
        <img src={image} alt="Login" className="h-32" />
      </div>

      <div className="hidden md:flex md:w-1/2 justify-center items-center p-5">
        <img src={image} alt="Login" className="max-w-full h-auto" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-2 text-center">Log in to Exclusive</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">Enter your details below</p>

        <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <input
              type="text"
              {...register("username")}
              placeholder="Username"
              className="w-full p-3 border-b border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none focus:border-red-500 dark:focus:border-red-400"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          <div className="relative">
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full p-3 border-b border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none focus:border-red-500 dark:focus:border-red-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="w-full flex justify-end">
            <a href="#" className="text-red-500 dark:text-red-400 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 dark:bg-red-600 text-white p-3 rounded-lg hover:bg-red-600 dark:hover:bg-red-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
