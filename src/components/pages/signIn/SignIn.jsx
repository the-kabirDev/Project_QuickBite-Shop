import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import auth from "../../../../firebase.init";
import {
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const SignIn = () => {
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
    console.log(user.user.accessToken);
    if (user.user.accessToken) {
      toast.success("User Created Successfull");
    }
  };
  console.log(user);

  console.log(watch("example"));

  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <form
        className="grid justify-center m-auto mt-14 mb-8 gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          E-mail
        </label>
        <input
          placeholder="example@email.com"
          type="email"
          className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <label className="font-semibold text-sm text-gray-600 pb-1 block">
          Password
        </label>
        <input
          placeholder="password"
          type="password"
          className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...register("password", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}

        <input
          className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-105  hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85"
          type="submit"
        />
        <button
          onClick={handleGoogleSignIn}
          className="bg-blue-500 w-[350px] mt-5 text-white font-bold text-lg"
        >
          Sign In With
          <FaGoogle className="text-4xl font-bold inline text-white m-auto p-2" />
        </button>
      </form>
    </>
  );
};

export default SignIn;
