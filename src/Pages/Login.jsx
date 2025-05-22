import React, { use, useState } from "react";
import loginImg from "../assets/vagitable2.jpg";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
const Login = () => {
  const { userLoginWithEmail, userLoginWithGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(true);

  const handlerUserSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLoginWithEmail(email, password)
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state || "/");
        // console.log(data);
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  const hanlderUserLogin = () => {
    userLoginWithGoogle()
      .then(() => {
        toast.success("Login Successfully");
        navigate(location?.state || "/");
        // console.log(data);
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${loginImg})` }}
      className="bg-cover flex items-center justify-center"
    >
      <form onSubmit={handlerUserSignIn}>
        <div className="space-y-3 py-10 my-10 bg-gray-100/80 rounded-2xl p-5 place-items-center">
          <h4 className="text-2xl md:text-4xl font-bold">Login</h4>
          <fieldset>
            <legend className="text-sm md:text-base">Email</legend>
            <input
              type="text"
              className="input w-[350px] border-none focus:outline-none"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </fieldset>
          <fieldset className="relative">
            <legend className="text-sm md:text-base">Password</legend>
            <input
              type={showPassword ? "password" : "text"}
              className="input w-[350px] border-none focus:outline-none"
              name="password"
              placeholder="password"
              required
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-[13px] z-1 right-5"
            >
              {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
            </div>
            <p className="text-sm hover:underline mt-1">Forgot password?</p>
          </fieldset>
          <fieldset>
            <input
              type="submit"
              value="Login"
              className="btn w-[350px] rounded-xl text-white bg-[#534e48] hover:border-[#c88489]"
            />
          </fieldset>
          <p className="text-center">
            You don't have an account?{" "}
            <Link to={"/register"}>
              <span className="underline">Register</span>
            </Link>
            <br />
            or
          </p>
          <button
            onClick={hanlderUserLogin}
            className="bg-white/80 px-3 py-2 rounded-2xl flex items-center gap-2 font-bold cursor-pointer"
          >
            <FcGoogle size={25} />
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
