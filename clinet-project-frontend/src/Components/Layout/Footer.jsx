/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import userContext from "../../Context/userContext";

function Footer() {
  const {darkMode} = useContext(userContext);
  return (
    <section className={`w-full h-auto flex flex-col justify-center items-center ${darkMode ? "text-white" : 'bg-white text-black'}  pb-8`}>
      <div className="w-[95%] h-full">
        <header className={`w-full h-auto flex flex-col md:flex-row ${darkMode ? 'bg-[#0C0C0C] border-white' : 'bg-[#FFFDFC] text-black border-black'} border-y-[1px]  pb-4`}>
          <div className="w-full md:w-[30%] h-auto flex flex-col py-8 px-4">
            <span className="flex flex-col items-center">
              <img className="w-16 h-16" src={Logo} alt="" />
              <p className="text-center">Let Connect with our Socials</p>
            </span>
            <span className="flex justify-center gap-2 cursor-pointer mt-2">
              <p>youtube</p>
              <p>Insta</p>
              <p>FB</p>
            </span>
          </div>

          <div className="w-full md:w-[70%] h-auto flex flex-col md:flex-row justify-evenly pt-4 md:pt-10">

            <div className="leading-loose mb-4 md:mb-0">
              <h1 className="font-bold text-lg">Company</h1>
              <ul className="leading-6 text-sm font-extralight cursor-pointer">
                <li>About Us</li>
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Terms and Condition</li>
                <li>Pricing & Refund</li>
                <li>Hire From Us</li>
                <li>Bug Bounty</li>
              </ul>
            </div>

            <div className="leading-loose mb-4 md:mb-0">
              <h1 className="font-bold text-lg">Community</h1>
              <ul className="leading-6 text-sm font-extralight cursor-pointer">
                <li>
                  <Link to="/">PujaPath</Link>
                </li>
                <li>
                  <Link to="/">Discord</Link>
                </li>
              </ul>
            </div>

            <div className="leading-loose mb-4 md:mb-0">
              <h1 className="font-bold text-lg">Get In Touch</h1>
              <ul className="leading-6 text-sm font-extralight cursor-pointer">
                <li>
                  <Link to="/">+91-9981546195</Link>
                </li>
                <li>
                  <Link to="/">+91-9516754208</Link>
                </li>
                <li>
                  <Link>vyassarthak183@gmail.com</Link>
                </li>
              </ul>
            </div>

          </div>
        </header>

        <div className="w-full h-auto flex justify-center pt-4">
          <span className="text-center">
            <h1 className="text-sm">Copyright © 2024 navgrahpujaUjjain.com</h1>
            <p className="text-xs">All Rights Reserved.</p>
          </span>
        </div>

      </div>
    </section>
  );
}

export default Footer;