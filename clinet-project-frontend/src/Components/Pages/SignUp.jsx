/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userContext from "../../Context/userContext";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const { darkMode, storeTokenLS, token } = useContext(userContext);
  const [signUpForm, setSignUpForm] = useState({
    fullName: "",
    email: "",
    password: "",
    username: "", // New field
    contact: "", // New field
  });
  const navigate = useNavigate();

  useEffect(() => {
    if(token) {
      navigate("/");
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (
      !signUpForm.fullName.trim() ||
      !signUpForm.email.trim() ||
      !signUpForm.password.trim() ||
      !signUpForm.username.trim() ||
      !signUpForm.contact.trim() // Ensure new fields are validated
    ) {
      toast.error("Please fill out all fields!", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await axios.post("/api/v1/user/signup", {
        fullName: signUpForm.fullName,
        email: signUpForm.email,
        password: signUpForm.password,
        username: signUpForm.username, // Send the username
        contact: signUpForm.contact, // Send the contact number
      });

      if (response.status === 201) {
        toast.success("Registration Successful!", {
          position: "top-center",
        });
        storeTokenLS(response.data.data.accessToken);
        // Clear form on successful registration
        setSignUpForm({
          fullName: "",
          email: "",
          password: "",
          username: "", // Reset username field
          contact: "", // Reset contact field
        });
      } else {
        console.log("signup failed");
        setSignUpForm({
          fullName: "",
          email: "",
          password: "",
          username: "", // Reset username field
          contact: "", // Reset contact field
        });
      }
    } catch (error) {
      if (error.response && error.response.status >= 400) {
        toast.error("User already exists!", {
          position: "top-center",
        });
        setSignUpForm({
          fullName: "",
          email: "",
          password: "",
          username: "", // Reset username field
          contact: "", // Reset contact field
        });
      } else {
        toast.error("Something went wrong. Please try again!", {
          position: "top-center",
        });
        setSignUpForm({
          fullName: "",
          email: "",
          password: "",
          username: "", // Reset username field
          contact: "", // Reset contact field
        });
      }
    }
  };

  return (
    <div
      className={`w-[100vw] h-[100vh] flex items-center justify-center ${
        darkMode ? "bg-[#0C0C0C]" : "bg-gradient-to-r from-blue-100 to-white"
      }`}
    >
      <div
        className={`${
          darkMode
            ? "bg-[#1A1A1A] text-gray-200"
            : "bg-white text-gray-900 shadow-lg"
        } rounded-lg p-8 w-[700px] max-sm:w-[90vw]`}
      >
        <p
          className={`text-center text-2xl font-bold mb-6 tracking-wider ${
            darkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Sign Up
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <input
              type="text"
              name="fullName"
              value={signUpForm.fullName}
              onChange={handleChange}
              required
              className={`peer w-full bg-transparent border-b ${
                darkMode ? "border-gray-600" : "border-gray-400"
              } focus:outline-none focus:ring-0 focus:border-blue-500 pb-2 text-lg ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            />
            <label
              className={`absolute left-0 top-[-25px] ${
                darkMode ? "text-gray-500" : "text-gray-600"
              } transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode
                  ? "peer-focus:text-blue-400"
                  : "peer-focus:text-blue-600"
              }`}
            >
              Full Name
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              value={signUpForm.email}
              onChange={handleChange}
              required
              className={`peer w-full bg-transparent border-b ${
                darkMode ? "border-gray-600" : "border-gray-400"
              } focus:outline-none focus:ring-0 focus:border-blue-500 pb-2 text-lg ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            />
            <label
              className={`absolute left-0 top-[-25px] ${
                darkMode ? "text-gray-500" : "text-gray-600"
              } transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode
                  ? "peer-focus:text-blue-400"
                  : "peer-focus:text-blue-600"
              }`}
            >
              Email
            </label>
          </div>
          <div className="relative mb-6">
            <input
              type="password"
              name="password"
              value={signUpForm.password}
              onChange={handleChange}
              required
              className={`peer w-full bg-transparent border-b ${
                darkMode ? "border-gray-600" : "border-gray-400"
              } focus:outline-none focus:ring-0 focus:border-blue-500 pb-2 text-lg ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            />
            <label
              className={`absolute left-0 top-[-25px] ${
                darkMode ? "text-gray-500" : "text-gray-600"
              } transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode
                  ? "peer-focus:text-blue-400"
                  : "peer-focus:text-blue-600"
              }`}
            >
              Create Password
            </label>
          </div>

          {/* Username Field */}
          <div className="relative mb-6">
            <input
              type="text"
              name="username"
              value={signUpForm.username}
              onChange={handleChange}
              required
              className={`peer w-full bg-transparent border-b ${
                darkMode ? "border-gray-600" : "border-gray-400"
              } focus:outline-none focus:ring-0 focus:border-blue-500 pb-2 text-lg ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            />
            <label
              className={`absolute left-0 top-[-25px] ${
                darkMode ? "text-gray-500" : "text-gray-600"
              } transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode
                  ? "peer-focus:text-blue-400"
                  : "peer-focus:text-blue-600"
              }`}
            >
              Username
            </label>
          </div>

          {/* Contact Field */}
          <div className="relative mb-6">
            <input
              type="number"
              name="contact"
              maxLength={10}
              minLength={10}
              value={signUpForm.contact}
              onChange={handleChange}
              required
              className={`peer w-full bg-transparent border-b ${
                darkMode ? "border-gray-600" : "border-gray-400"
              } focus:outline-none focus:ring-0 focus:border-blue-500 pb-2 text-lg ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            />
            <label
              className={`absolute left-0 top-[-25px] ${
                darkMode ? "text-gray-500" : "text-gray-600"
              } transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-sm ${
                darkMode
                  ? "peer-focus:text-blue-400"
                  : "peer-focus:text-blue-600"
              }`}
            >
              Contact
            </label>
          </div>

          <button
            type="submit"
            className="relative w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className={`underline ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Log in!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
