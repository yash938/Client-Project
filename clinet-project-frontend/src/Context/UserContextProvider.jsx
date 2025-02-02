/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import userContext from "./userContext";
import axios from "axios";
import { toast } from "react-toastify";
import { error } from "jquery";
import { RiLogoutCircleRFill } from "react-icons/ri";

const UserContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();

  const storeTokenLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const logoutUser = async () => {
    try {
      const response = await axios.get("/api/v1/user/logout",
        {
          headers : {
            Authorization : `Bearer ${token}`
          },
        }
      );
      if (!response) {
        return toast("logout failed !");
      }
      setToken("");
      localStorage.removeItem("token");
      toast.info("You are logged out");
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    }
  };

  //authenticate current user token
  const userVerification = async () => {
    try {
      const response = await axios.post(
        "/api/v1/user/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ); 
  
      if (response.status >= 200 && response.status < 300) {
        setUser(response.data.userdata);
      } else {
        console.log(`Error foud: ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Error while fetching user data: ${error.message}`);
      localStorage.removeItem("token")
    }
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  useEffect(() => {
    if (token) {
      userVerification();
    }
  }, [token]);

  return (
    <userContext.Provider
      value={{
        darkMode,
        setDarkMode,
        token,
        setToken,
        storeTokenLS,
        userVerification,
        updateUser,
        user,
        logoutUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
