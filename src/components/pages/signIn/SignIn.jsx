import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../shared/Loading";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../../firebase.init";
import { IoArrowBackSharp } from "react-icons/io5";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  console.log(user);

  if (user) {
    toast.success("Congratulations!! User Logged in successfully");
    navigate("/");
  }

  const newLocal =
    "inline-flex mt-4 w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80";
  return (
    <div>
      <section className="m-28">
        <div className="flex bg-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
          <div className="xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <Link to="/">
                <IoArrowBackSharp className="text-md" />
              </Link>
              <span className="text-sm font-semibold">Home</span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign in to your account
            </h2>

            <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      {...register("email", { required: true })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <a
                      className="text-sm font-semibold text-black hover:underline"
                      title=""
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Password"
                      type="password"
                      {...register("password", { required: true })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  {errors.password && (
                    <span className="text-red-600">Password is required</span>
                  )}
                  {loading ? (
                    <Loading />
                  ) : (
                    <input className={newLocal} type="submit" />
                  )}

                  {error && (
                    <h1 className="text-red-700 text-center mt-6 text-2xl font-semibold">
                      {error.message}
                    </h1>
                  )}
                </div>
                <div></div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <p className="mt-2 text-center text-sm text-gray-600">
                Dont have an account?{" "}
                <Link to="/sign-up" className="text-red-500 text-lg">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
