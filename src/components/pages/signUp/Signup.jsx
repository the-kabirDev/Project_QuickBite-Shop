import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import auth from "../../../../firebase.init";
import { IoArrowBackSharp } from "react-icons/io5";
import {
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//
const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data.email, data.password);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  console.log(user?.user?.accessToken);
  if (user?.user?.accessToken) {
    toast.success("User Created Successfull");
    navigate("/sign-in");
  }

  console.log(watch("example"));

  return (
    <>
      <section className="xl:mx-auto xl:w-full shadow-md p-2 m-24 xl:max-w-sm 2xl:max-w-md">
        <div className="flex items-center gap-2">
          <Link to="/">
            <IoArrowBackSharp className="text-2xl" />
          </Link>
          <span className="text-lg font-semibold">Home</span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Sign Up
        </h2>

        <form
          className="grid justify-center m-auto mt-8 mb-8 gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-base font-medium text-gray-900">
            Email address
          </label>
          <input
            placeholder="Email"
            type="email"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">This field is required</span>
          )}

          {/* include validation with required or other standard HTML validation rules */}
          <label className="text-base font-medium text-gray-900">
            Password
          </label>
          <input
            placeholder="password"
            type="password"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            {...register("password", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}

          <input
            className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-105  hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85"
            type="submit"
          />
          <button
            onClick={handleGoogleSignIn}
            className="bg-blue-500 w-[350px] mt-5 text-white font-bold text-lg"
          >
            Sign Up With
            <FaGoogle className="text-4xl font-bold inline text-white m-auto p-2" />
          </button>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an acount ?{" "}
            <Link to="/sign-in" className="text-red-500">
              Login
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Signup;
