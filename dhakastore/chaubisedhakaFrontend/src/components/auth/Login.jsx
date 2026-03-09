// import React, { useState } from "react";
// import InputField from "../shared/InputField";
// import { AiOutlineEye, AiOutlineLogin } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
// import Spinners from "../shared/Spinners";
// import { authenticateLoginUser } from "../../store/actions";
// import toast from "react-hot-toast";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [loader, setLoader] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePassword = () => setShowPassword(!showPassword);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onTouched",
//   });

//   const loginHandler = async (data) => {
//     console.log("Click login");
//     dispatch(authenticateLoginUser(data, toast, reset, navigate, setLoader));
//   };

//   return (
//     <div className="min-h-[calc(100vh-64px)] flex justify-center items-center ]">
//       <form
//         onClick={handleSubmit(loginHandler)}
//         className="sm:w-112.5 w-90 shadow-[0_4px_12px_rgba(0,0,0,0.15)] py-8  sm:px-8 px-4 rounded-md"
//       >
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <AiOutlineLogin className="text-slate-800 text-5xl" />
//           <h1 className="text-slate-800 text-center text-montserrat lg:text-3xl text-3xl font-bold">
//             Login Here
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
//             label="Password"
//             required
//             id="password"
//             type={showPassword ? "text" : "password"}
//             message="*Password is required"
//             placeholder="Enter your password"
//             register={register}
//             errors={errors}
//             showPassword={showPassword}
//             onTogglePassword={togglePassword}
//           />
//         </div>
//         <button
//           disabled={loader}
//           type="submit"
//           className="bg-linear-to-r from-purple-500 to-pink-600 flex gap-2 justify-center items-center text-white font-semibold w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-xs my-3"
//         >
//           {loader ? (
//             <>
//               {" "}
//               <Spinners />
//               Loading...
//             </>
//           ) : (
//             <>Login</>
//           )}
//         </button>
//         <p className="text-slate-800 text-center mt-6 text-sm">
//           Don't have an account?
//           <Link
//             className="font-semibold underline hover:text-black "
//             to="/register"
//           >
//             <span>SignUp</span>
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import InputField from "../shared/InputField";
import { AiOutlineEye, AiOutlineLogin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Spinners from "../shared/Spinners";
import { authenticateLoginUser } from "../../store/actions";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    console.log("Click login");
    dispatch(authenticateLoginUser(data, toast, reset, navigate, setLoader));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-black via-gray-900 to-black px-4">
      
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] py-10 px-8 rounded-2xl"
      >
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-6">
          <AiOutlineLogin className="text-purple-500 text-5xl drop-shadow-lg" />
          <h1 className="text-white text-3xl font-bold tracking-wide">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm">
            Login to continue
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
            placeholder="Enter your username"
            register={register}
            errors={errors}
          />

          <InputField
            label="Password"
            required
            id="password"
            type={showPassword ? "text" : "password"}
            message="*Password is required"
            placeholder="Enter your password"
            register={register}
            errors={errors}
            showPassword={showPassword}
            onTogglePassword={togglePassword}
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loader}
          type="submit"
          className="mt-6 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex gap-2 justify-center items-center text-white font-semibold w-full py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-[1.02]"
        >
          {loader ? (
            <>
              <Spinners />
              Logging in...
            </>
          ) : (
            <>Login</>
          )}
        </button>

        {/* FOOTER */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            className="font-semibold text-purple-400 hover:text-pink-500 transition"
            to="/register"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

