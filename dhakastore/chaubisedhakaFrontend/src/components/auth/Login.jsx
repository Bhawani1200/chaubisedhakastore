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
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center ]">
      <form
        onClick={handleSubmit(loginHandler)}
        className="sm:w-[450px] w-[360px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] py-8  sm:px-8 px-4 rounded-md"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <AiOutlineLogin className="text-slate-800 text-5xl" />
          <h1 className="text-slate-800 text-center text-montserrat lg:text-3xl text-3xl font-bold">
            Login Here
          </h1>
        </div>
        <hr className="mt-2 mb-5 text-black" />
        <div className="flex flex-col gap-3">
          <InputField
            label="UserName"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Enter your name"
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
        <button
          disabled={loader}
          type="submit"
          className="bg-linear-to-r from-purple-500 to-pink-600 flex gap-2 justify-center items-center text-white font-semibold w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-xs my-3"
        >
          {loader ? (
            <>
              {" "}
              <Spinners />
              Loading...
            </>
          ) : (
            <>Login</>
          )}
        </button>
        <p className="text-slate-800 text-center mt-6 text-sm">
          Don't have an account?
          <Link
            className="font-semibold underline hover:text-black "
            to="/register"
          >
            <span>SignUp</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
