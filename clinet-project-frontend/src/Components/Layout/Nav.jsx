/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { RiCloseLargeFill } from "react-icons/ri";
import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import userContext from "../../Context/userContext";
function Nav() {
  const [SidebarStatus, setSidebarStatus] = useState(false);
  const { darkMode, setDarkMode, token, logoutUser } = useContext(userContext);
  const toggleSidebar = () => {
    setSidebarStatus(!SidebarStatus);
  };

  const modechange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Navbar */}
      <div
        className={`w-full min-sm:w-[100vw] h-[10vh] backdrop-blur-sm fixed ${
          darkMode ? "text-white" : "text-black"
        } flex items-center justify-between px-4 z-10`}
      >
        <div className="w-[40%] max-sm:w-[75%] h-full flex items-center gap-2">
          <img className="w-10 h-10 rounded-full" src={Logo} alt="Logo" />
          <h1 className="text-lg font-semibold">नवग्रह पूजा उज्जैन</h1>
        </div>

        {/* Desktop Links */}
        <section className="w-[60%] max-sm:hidden h-full pr-8 flex items-center justify-end">
          <ul className="flex gap-10 items-end">
            <li>
              <Link to="/" className="hover:text-gray-500">
                Home
              </Link>
            </li> 

            <li>
              <Link to="/services" className="hover:text-gray-500">
                Services
              </Link>
            </li> 

            <li>
              <Link to="/about" className="hover:text-gray-500">
                About
              </Link>
            </li>

            <li>
              <Link to="/connect" className="hover:text-gray-500">
                Connect
              </Link>
            </li> 

            {token ? (
              <div className="flex gap-6">
                <li className="flex items-end">
                  <Link to="/profile" className="hover:text-gray-500">
                    Profile
                  </Link>
                </li>
                <button
                  className={`py-1 px-4 ${
                    darkMode ? "bg-[#24CFA6]" : "bg-blue-400"
                  } rounded-md text-white`}
                >
                  <span onClick={logoutUser}>Logout</span>
                </button>
              </div>
            ) : (
              <button
                className={`py-1 px-4 ${
                  darkMode ? "bg-[#24CFA6]" : "bg-blue-400"
                } rounded-md text-white`}
              >
                <Link to="/login">login</Link>
              </button>
            )}
            <li>
              <span
                className="flex flex-col items-center justify-center cursor-pointer max-sm:space-y-0.5"
                onClick={modechange}
              >
                {" "}
                {darkMode ? (
                  <CiLight className="max-sm:text-3xl   text-white transition-colors duration-200 ease-in-out" />
                ) : (
                  <MdLightMode className="max-sm:text-2xl  text-black transition-colors duration-200 ease-in-out" />
                )}
                <p
                  className={`text-xs max-sm:text-[10px] ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {darkMode ? "Light" : "Dark"}
                </p>
              </span>
            </li>
          </ul>
        </section>

        {/* Mobile Menu Icon */}
        <div className="flex max-sm:w-[25%] justify-end items-center gap-2">
          <section
            className="hidden max-sm:flex justify-end"
            onClick={toggleSidebar}
          >
            {SidebarStatus ? (
              <RiCloseLargeFill
                size={30}
                className="transition-transform duration-300 ease-in-out"
              />
            ) : (
              <TbMenu
                size={40}
                className="transition-transform duration-300 ease-in-out"
              />
            )}
          </section>

          {darkMode ? (
            <CiLight
              onClick={modechange}
              className="max-sm:text-3xl hidden max-sm:flex  text-white transition-colors duration-200 ease-in-out"
            />
          ) : (
            <MdLightMode
              onClick={modechange}
              className="max-sm:text-2xl hidden max-sm:flex text-black transition-colors duration-200 ease-in-out"
            />
          )}
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`w-[100vw] h-[90vh] ${
          darkMode ? "bg-[#0C1110]" : "bg-[#D6EEFC] opacity-90"
        } fixed top-[10vh] z-20 transform ${
          SidebarStatus ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out max-sm:flex flex-col items-center pt-4`}
      >
        <ul
          className={`flex flex-col  w-full px-4 gap-10 ${
            darkMode ? "text-white" : "text-black"
          } text-2xl`}
        >
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
          <Link to="/connect" onClick={toggleSidebar}>
              connect
          </Link>
            <br /> <br />
            {token ? (
              <div className="flex gap-6">
                <li className="flex items-end">
                  <Link to="/profile" className="hover:text-gray-500">
                    Profile
                  </Link>
                </li>
                <button
                  className={`py-1 px-4 ${
                    darkMode ? "bg-[#24CFA6]" : "bg-blue-400"
                  } rounded-md text-white`}
                >
                  <span onClick={logoutUser}>Logout</span>
                </button>
              </div>
            ) : (
              <button
                className={`py-1 px-4 ${
                  darkMode ? "bg-[#24CFA6]" : "bg-blue-400"
                } rounded-md text-white`}
              >
                <Link to="/login">login</Link>
              </button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
