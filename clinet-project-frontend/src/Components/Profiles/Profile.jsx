/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import userContext from "../../Context/userContext";
import defaultProfile from "../../assets/Images/profile.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const { darkMode } = useContext(userContext);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
useEffect(() => {
    if(!token) {
      navigate("/");
      toast.info("Please login");
    }
  }, [token]);

  const [userData, setUserData] = useState({
    profileImage: "",
    fullName: "Sarthak Vyas",
    email: "sarthak@gmail.com",
    bio: "Enter the bio data of a user.",
    reviews: [],
    details: { joined: "2024-01-01", remediesPosted: 0 },
  });

  const [bioEditMode, setBioEditMode] = useState(false);
  const [newBio, setNewBio] = useState(userData.bio);
  const [services, setServices] = useState([]);
  const [password, setPassword] = useState("");
  const [requests, setRequests] = useState([]);

  const handleBioUpdate = () => {
    setUserData((prev) => ({ ...prev, bio: newBio }));
    setBioEditMode(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUserData((prev) => ({ ...prev, profileImage: imageURL }));
    }
  };

  return (
    <div className={`min-h-screen flex justify-center items-center px-4 py-16 ${darkMode ? "bg-[#0C0C0C] text-white" : "bg-white text-black"}`}>
      <div className="max-w-3xl w-full shadow-lg rounded-lg p-6 bg-opacity-80 bg-gray-800 text-gray-200">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 mb-4">
            <img
              src={userData.profileImage || defaultProfile}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-2 border-gray-500 shadow-lg"
            />
            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer text-white text-xs hover:bg-blue-600 transition"
            >
              Edit
            </label>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <h1 className="text-2xl font-semibold mb-1">{userData.fullName}</h1>
          <p className="text-sm text-gray-400">{userData.email}</p>
        </div>

        {/* Bio Section */}
        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-lg font-semibold mb-2">Bio</h2>
          {bioEditMode ? (
            <div>
              <textarea
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                className="w-full p-2 border rounded bg-gray-700 text-white"
              />
              <div className="mt-2 flex gap-4">
                <button
                  onClick={handleBioUpdate}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setBioEditMode(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-gray-300 text-sm leading-relaxed">{userData.bio}</p>
              <button
                onClick={() => setBioEditMode(true)}
                className="mt-2 text-blue-200 underline hover:text-blue-400 transition"
              >
                Edit Bio
              </button>
            </div>
          )}
        </div>
         <hr />
         <br />
         <h1 className="text-2xl font-semibold text-black">Actions </h1>
        <div className="flex gap-2">
          <button className="px-2 py-2 bg-blue-500 rounded-md">Add New Service</button>
          <button className="px-2 py-2 bg-orange-500 rounded-md">Puja Requests</button>
          
        </div>

        {/* Account Details */}
        <div className="mt-6 border-t border-gray-600 pt-4">
          <h2 className="text-lg font-semibold mb-2">Account Details</h2>
          <p className="text-sm"><span className="font-bold">Joined:</span> {userData.details.joined}</p>
          <button className="underline">Manage Users</button>

          <div className="flex justify-end">
          <button className="px-3 py-2 bg-black rounded-md">Setting</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
