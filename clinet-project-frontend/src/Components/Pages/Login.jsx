/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import userContext from "../../Context/userContext";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const { darkMode, storeTokenLS, token } = useContext(userContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
      toast.info("login already");
    }
  }, [token]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensure all fields are filled
    if (!loginForm.email.trim() || !loginForm.password.trim()) {
      toast.error("Please fill out all fields!", {
        position: "top-center",
      });
      return;
    }
    try {
      const response = await axios.post("/api/v1/user/login", {
        email: loginForm.email,
        password: loginForm.password,
      });
      
      if (!response) {
        setLoginForm({
          email: "",
          password: "",
        });
        return toast.error("login failed");
      }

      storeTokenLS(response.data.data.accessToken);
      setLoginForm({
        email: "",
        password: "",
      });
      toast.success("login success");
      navigate("/");
    } catch (error) {
      toast.error("somethis went wrong");
    }
  };

  return (
    <div
      className={`max-sm:w-[100vw] max-sm:h-[70vh] w-[100vw] h-[100vh] pt-[10vh] ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
          : "bg-gradient-to-br from-blue-100 to-blue-300"
      } flex items-center justify-center`}
    >
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } shadow-2xl rounded-lg p-10 w-96 max-sm:w-[90vw]`}
      >
        <p className="text-center text-xl font-extrabold mb-8 tracking-wide">
          Login
        </p>
        <form>
          <div className="relative mb-8">
            <input
              type="text"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
              required
              className={`peer w-full bg-transparent border-b-2 ${
                darkMode ? "border-gray-500" : "border-gray-300"
              } focus:outline-none focus:ring-0 focus:border-blue-500 pb-2`}
            />
            <label
              className={`absolute left-0 top-[-25px] text-base transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode
                  ? "peer-focus:text-blue-300"
                  : "peer-focus:text-blue-500"
              }`}
            >
              Email
            </label>
          </div>
          <div className="relative mb-8">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={loginForm.password}
              required
              className={`peer w-full bg-transparent border-b-2 ${
                darkMode ? "border-gray-500" : "border-gray-300"
              } focus:outline-none focus:ring-0 focus:border-blue-500 pb-2`}
            />
            <label
              className={`absolute left-0 top-[-25px] text-base transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode
                  ? "peer-focus:text-blue-300"
                  : "peer-focus:text-blue-500"
              }`}
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full text-center font-bold uppercase tracking-widest px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-sm mt-5">
          Don&#39;t have an account?{" "}
          <Link
            to="/signup"
            className={`underline ${
              darkMode ? "text-blue-300" : "text-blue-500"
            }`}
          >
            Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
