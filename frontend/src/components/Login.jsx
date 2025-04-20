import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/axios.service";
import { successToast } from "../../services/toast.service";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const successMessages = [
    "Welcome back, legend! 🦸",
    "You're in. Time to crush it! 🚀",
    "Nice! Login successful 🔐",
    "Hello again, you beautiful human 😎",
    "Back like you never left 🔁",
    "Access granted. Proceed with awesomeness ✅",
    "Doors opened. Welcome to your dashboard 🏠",
    "Logged in like a boss 😤",
    "You're online and unstoppable 💻⚡",
    "Session started. Let the magic begin ✨",
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser("api/auth/login", { email, password });
      console.log(response);
      if (response.status == "200") {
        console.log(response.data.user);
        const data = {
          email: response.data.user.email,
          name: response.data.user.name,
          token: response.data.token,
          avatar: response.data.user.avatar,
          role: response.data.user.role,
          createdAt: response.data.user.createdAt,
        };
        dispatch(login(data));
        successToast(
          successMessages[Math.floor(Math.random() * successMessages.length)]
        );
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col md:m-6 w-full  md:w-1/3   md:me-20 ms-1  ">
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
                  bg-white shadow text-gray-900"
          >
            Login
          </button>
          <button
            className="w-1/2 py-2 rounded-full  font-medium cursor-pointer transition 
                bg-white shadow text-gray-500"
          >
            <Link to="/register">Register</Link>
          </button>
        </div>
        {/* form */}
        <form className="space-y-4">
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

          <div className="text-sm text-blue-600 text-right">
            <a href="">Forgot password?</a>
          </div>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition cursor-pointer"
          >
            Login
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

export default Login;
