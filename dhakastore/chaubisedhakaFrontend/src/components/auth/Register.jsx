// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import InputField from "../shared/InputField";
// import { useDispatch } from "react-redux";
// import { authenticateLoginUser, registerNewUser } from "../../store/actions";
// import toast from "react-hot-toast";
// import { FaUserPlus } from "react-icons/fa";
// import Spinners from "../shared/Spinners";

// const Register = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [loader, setLoader] = useState();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onTouched",
//   });

//   const registerHandler = async (data) => {
//     console.log("Register click");
//     dispatch(registerNewUser(data, toast, reset, navigate, setLoader));
//   };
//   return (
//     <div className="min-h-[calc(100vh-64px)] flex justify-center items-center ]">
//       <form
//         onClick={handleSubmit(registerHandler)}
//         className="sm:w-112.5 w-90 shadow-[0_4px_12px_rgba(0,0,0,0.15)] py-8  sm:px-8 px-4 rounded-md"
//       >
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <FaUserPlus className="text-slate-800 text-5xl" />
//           <h1 className="text-slate-800 text-center text-montserrat lg:text-3xl text-3xl font-bold">
//             Register Here
//           </h1>
//         </div>
//         <hr className="mt-2 mb-5 text-black" />
//         <div className="flex flex-col gap-3">
//           <InputField
//             label="UserName"
//             required
//             id="username"
//             type="text"
//             message="*Username is required"
//             placeholder="Enter your name"
//             register={register}
//             errors={errors}
//           />
//           <InputField
//             label="Email"
//             required
//             id="email"
//             type="email"
//             message="*Email is required"
//             placeholder="Enter your email"
//             register={register}
//             errors={errors}
//           />
//           <InputField
//             label="Password"
//             required
//             id="password"
//             type="password"
//             message="*Password is required"
//             placeholder="Enter your password"
//             min={6}
//             register={register}
//             errors={errors}
//           />
//         </div>
//         <button
//           disabled={loader}
//           type="submit"
//           className="bg-linear-to-r from-purple-500 to-pink-600 flex gap-2 justify-center items-center text-white font-semibold w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-xs my-3"
//         >
//           {loader ? <> <Spinners /> Loading...</> : <>Register</>}
//         </button>
//         <p className="text-slate-800 text-center mt-6 text-sm">
//           Already have an account?
//           <Link
//             className="font-semibold underline hover:text-black "
//             to="/login"
//           >
//             <span>Login</span>
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../shared/InputField";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../../store/actions";
import toast from "react-hot-toast";
import { FaUserPlus } from "react-icons/fa";
import Spinners from "../shared/Spinners";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    console.log("Register click");
    dispatch(registerNewUser(data, toast, reset, navigate, setLoader));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-10 px-8 rounded-2xl"
      >
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-6">
          <FaUserPlus className="text-pink-500 text-5xl drop-shadow-lg" />
          <h1 className="text-white text-3xl font-bold tracking-wide">
            Create Account
          </h1>
          <p className="text-gray-400 text-sm">
            Register to get started
          </p>
        </div>

        <hr className="border-white/10 mb-6" />

        {/* INPUTS */}
        <div className="flex flex-col gap-4 text-white">
          <InputField
            label="Username"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Enter your name"
            register={register}
            errors={errors}
          />

          <InputField
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Enter your email"
            register={register}
            errors={errors}
          />

          <InputField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Enter your password"
            min={6}
            register={register}
            errors={errors}
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loader}
          type="submit"
          className="mt-6 bg-linear-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 flex gap-2 justify-center items-center text-white font-semibold w-full py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-[1.02]"
        >
          {loader ? (
            <>
              <Spinners />
              Creating Account...
            </>
          ) : (
            <>Register</>
          )}
        </button>

        {/* FOOTER */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link
            className="font-semibold text-purple-400 hover:text-pink-500 transition"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
