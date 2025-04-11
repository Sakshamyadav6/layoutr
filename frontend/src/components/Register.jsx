import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { registerUser } from "../../services/axios.service";
import { errorToast, successToast } from "../../services/toast.service";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerSuccessMessages = [
    "Welcome aboard, captain! 🛸",
    "You're officially in the club 🎉",
    "Account created. Time to shine ✨",
    "Glad to have you with us! 🤝",
    "Registration complete. Let’s gooo 🚀",
    "You're all set! Start exploring 🔍",
    "Boom! You're now one of us 😎",
    "Signed up and ready to roll ✅",
    "Account? Created. Vibes? Immaculate 💫",
    "You just unlocked a new level 🗝️",
  ];

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        errorToast("Password and Confirm Password are not equal");
        return;
      }
      const response = await registerUser("api/auth/register", {
        name: name,
        email: email,
        password: confirmPassword,
      });
      console.log(response);
      if (response.status == "200") {
        successToast(
          registerSuccessMessages[
            Math.floor(Math.random() * registerSuccessMessages.length)
          ]
        );
        const data = {
          email: response.data.user.email,
          name: response.data.user.name,
          token: response.data.token,
          avatar: response.data.user.avatar,
        };
        dispatch(login(data));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col md:m-6 w-full md:w-1/3 md:me-20 ms-1  ">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-4xl shadow-xl p-3 md:p-5 text-sm md:text-lg space-y-6"
      >
        {/* toggle button */}
        <div className="bg-gray-200 rounded-full p-1">
          <button
            className="w-1/2 py-2 rounded-full  font-medium cursor-pointer transition 
                bg-white shadow text-gray-500"
          >
            <Link to="/login">Login</Link>
          </button>
          <button
            className="w-1/2 py-2 rounded-full   font-medium cursor-pointer transition
              bg-white shadow text-gray-900"
          >
            Register
          </button>
        </div>
        {/* form */}
        <form className="space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-lg  text-gray-700 mb-1 ms-1">
              Name
            </label>
            <input
              type="text"
              placeholder="John"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg  text-gray-700 mb-1 ms-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-lg  text-gray-700 mb-1 ms-1">
              Password
            </label>
            <input
              type="password"
              placeholder="*********"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-lg  text-gray-700 mb-1 ms-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="*********"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition cursor-pointer"
          >
            Register
          </button>
        </form>
        {/* OR line */}
        <div className="flex items-center gap-3 my-4">
          <hr className="flex-1 border-gray-300" />
          <span>OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        {/* OAuth Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition cursor-pointer">
            <i className="fa-brands fa-github"></i>
            <span>Continue with GitHub</span>
          </button>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition cursor-pointer">
            <i className="fa-brands fa-google"></i>
            <span>Continue with Google</span>
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className="underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
