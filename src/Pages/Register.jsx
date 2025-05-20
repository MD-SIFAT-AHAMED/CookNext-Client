import React, { use } from "react";
import registerBg from "../assets/vagitable.jpg";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import AuthContext from "../Context/AuthContext";
const Register = () => {
  const { createUserWithEmail, updateUserProfile,userLoginWithGoogle } = use(AuthContext);

  const handlerCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUserData = Object.fromEntries(formData.entries());
    const { name, email, password, photo } = newUserData;
    console.log(email, password);

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast.error(
        "At least 6 characters and minimun uppercase and lowercase letters"
      );
      return;
    }
    const userData = {
          displayName:name,
          photoURL:photo,
        };

    createUserWithEmail(email, password)
      .then(() => {
        updateUserProfile(userData)
          .then(() => {
            toast.success("Registration Successfuly");
          })
          .catch((err) => {
            toast.error(err.code);
          });
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const hanlderUserLogin=()=>{
    userLoginWithGoogle()
    .then((data)=>{
      toast.success("Login Successfully");
      console.log(data)
    })
    .catch((err)=>{
      toast.error(err.code);
    })
  }

  return (
    <div
      style={{ backgroundImage: `url(${registerBg})` }}
      className="bg-cover min-h-screen flex items-center justify-center"
    >
      <form onSubmit={handlerCreateUser}>
        <div className="space-y-3 py-10 bg-gray-100/80 rounded-2xl p-5 place-items-center">
          <h4 className="text-2xl md:text-4xl font-bold">Register</h4>
          <fieldset>
            <legend className="text-sm md:text-base">Name</legend>
            <input
              type="text"
              className="input w-[350px] border-none focus:outline-none"
              name="name"
              placeholder="Enter coffee Name"
              required
            />
          </fieldset>
          <fieldset>
            <legend className="text-sm md:text-base">Photo url</legend>
            <input
              type="text"
              className="input w-[350px] border-none focus:outline-none"
              name="photo"
              placeholder="Photo Url"
              required
            />
          </fieldset>
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
          <fieldset>
            <legend className="text-sm md:text-base">Password</legend>
            <input
              type="text"
              className="input w-[350px] border-none focus:outline-none"
              name="password"
              placeholder="password"
              required
            />
          </fieldset>
          <fieldset>
            <input
              type="submit"
              value="Register"
              className="btn w-[350px] rounded-xl text-white bg-[#534e48] hover:border-[#c88489]"
            />
          </fieldset>
          <p className="text-center">
            You have an account?{" "}
            <Link to={"/login"}>
              <span className="underline">Login</span>
            </Link>
            <br />
            or
          </p>
          <button onClick={hanlderUserLogin} className="bg-white/80 px-3 py-2 rounded-2xl flex items-center gap-2 font-bold">
            <FcGoogle size={25} />
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
