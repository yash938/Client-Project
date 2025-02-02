/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/Images/TempImages/image.png";
import img2 from "../../assets/Images/TempImages/img2.png";
import img3 from "../../assets/Images/TempImages/img3.png";
import userContext from "../../Context/userContext";
import bg_img from "../../assets/Images/main-home-page-bg-2.png";
import bg_img2 from "../../assets/Images/bgimg2.png";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
function Home() {

   const handleBookpuja = () => {
     toast.promise("In Development")
   }

   const handleExplorePuja = () => {
    toast.promise("In Development")
   }
  const services = [
  {
    img: img1,
    title: "नवग्रह शांति पुजा : त्रिवेणी शनि मंदिर उज्जैन",
    description: "सभी ग्रह दोषों का निवारण और सौभाग्य प्राप्ति के लिए नवग्रह पूजा कराएं...।",
    tags: ["ग्रह दोष निवारण", "सौभाग्य", "शांति"],
  },
  {
    img: img2,
    title: "कालसर्प दोष शांति : त्रिवेणी शनि मंदिर उज्जैन",
    description: "कालसर्प दोष के शमन के लिए पूजा कराएं और सुख-समृद्धि प्राप्त करें...।",
    tags: ["कालसर्प दोष निवारण", "शांति", "सफलता"],
  },
  {
    img: img3,
    title: "पितृ दोष पूजा : त्रिवेणी शनि मंदिर उज्जैन",
    description: "पितृ दोष से मुक्ति के लिए और पूर्वजों का आशीर्वाद प्राप्त करने हेतु पितृ दोष पूजा करें...।",
    tags: ["पितृ दोष निवारण", "आशीर्वाद", "शांति"],
  }, 
]
  const { darkMode } = useContext(userContext);
  return (
    <div className="max-sm:overflow-x-hidden">
      <style></style>
      {/* Header Section */}
      <section
        style={{
          backgroundImage: darkMode ? "" : `url(${bg_img})`, // Corrected this line
          backgroundSize: "cover",
          backgroundPosition: `center`,
        }}
        className={`${
          darkMode ? "bg-gradient-radial text-white" : "bg-[#8ACFF7] text-black"
        } from-cyan-500 via-transparent to-primaryBg  min-h-screen ${darkMode ? 'max-sm:min-h-[100vh]' : 'max-sm:min-h-[50vh]'} max-sm:pt-[10vh] flex flex-col items-center justify-center  font-sans p-4`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center leading-snug">
          <span className="pb-2 sm:pb-4">
            हमारे साथ करें हर&nbsp;
            <span
              className={`${darkMode ? "text-[#2DD4BF]" : "text-[#FF7D33]"}`}
            >
              शुभ&nbsp;
            </span>
            कार्य का प्रारंभ,{" "}
          </span>
          <span className="flex justify-center pt-2 max-sm:pt-4">
            <span
              className={`${darkMode ? "text-[#2DD4BF]" : "text-[#FF7D33]"}`}
            >
              पवित्र मंत्रों&nbsp;
            </span>
            और{" "}
            <span
              className={`${darkMode ? "text-[#2DD4BF]" : "text-[#FF7D33]"}`}
            >
              &nbsp;विधि-विधान&nbsp;
            </span>{" "}
            के साथ।
          </span>
        </h1>

        <div className="w-full sm:w-[60%] flex justify-center items-center flex-col sm:flex-row mt-4">
          <p className="text-[0.8em] text-center sm:w-[40%] sm:text-left">
            <span
              className={`${
                darkMode ? "text-[#2DD4BF]" : "text-[#FF7D33]"
              } underline`}
            >
              <Link to="/about">पं. हर्षित व्यास</Link>
            </span>{" "}
            त्रिवेणी शनि मंदिर उज्जैन संपर्क करे सभी मांगलिक कर्मकांड हेतु।
          </p>
        </div>

        <button
          className={`mt-6 px-4 sm:px-6 py-2 sm:py-3 ${
            darkMode ? "bg-teal-400 text-black" : "bg-[#FF7D33] text-white"
          }  font-semibold rounded-full text-sm sm:text-base`}
        >
          <span className="underline">
            <Link to={"/services"}>Explore Services</Link>
          </span>{" "}
          - नवग्रह शांति पुजा
        </button>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center pt-10 space-x-4 sm:space-x-10 text-base sm:text-lg">
          <div className="text-center px-4">
            <p className="text-xl sm:text-2xl font-semibold">10k+</p>
            <p>खुश यजमान</p>
          </div>
          <div className="text-center px-4">
            <p className="text-xl sm:text-2xl font-semibold">100+</p>
            <p>पंडित सलाहकार</p>
          </div>
          <div className="text-center px-4">
            <p className="text-xl sm:text-2xl font-semibold">50K+</p>
            <p>संपन्न पूजा</p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section
        className={`w-full min-h-[100vh] ${
          darkMode ? "bg-dual-gradient" : "bg-gradient-flow"
        } p-0 max-sm:p-0`}
      >
        <div>
          <div
            id={`${darkMode ? "homePageIntrodivDark" : "homePageIntrodiv"}`}
            className={`flex flex-col items-center text-center py-14 max-sm:py-0 bg-[#8ACFF7] max-sm:bg-transparent`}
          >
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl ${
                darkMode ? "text-[#2DD4BF]" : "text-black"
              } underline pb-2`}
            >
              पंडित हर्षित व्यास
            </h1>
            <p className="text-white text-lg sm:text-xl">
              नवग्रह त्रिवेणी शनि मंदिर उज्जैन
            </p>
          </div>

          <div className="flex justify-center py-4">
            <iframe
              width="100%"
              height="200%"
              className="max-sm:w-[90vw] max-sm:h-auto md:w-[860px] md:h-[515px]"
              src="https://www.youtube.com/embed/kM3cPShpaXo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            className={`my-4 sm:my-6 px-4 sm:px-6 py-2 sm:py-3 ${
              darkMode ? "bg-teal-400" : "bg-white"
            } text-black font-semibold rounded-full text-sm sm:text-base`}
          >
            <Link to="/about">पंडित जी का परिचय</Link>
          </button>
        </div>

        {/* Puja Cards Section */}
        <div className="w-full">
          <h1
            className={`text-2xl sm:text-3xl ${
              darkMode ? "text-teal-400" : "text-black"
            } flex justify-center p-4`}
          >
            प्रमुख पुजाये
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[24%] bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden m-2"
            >
              <div className="relative">
                <img
                  src={service.img}
                  alt="Puja"
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <span className={`absolute top-2 right-2 ${darkMode ? 'bg-teal-400' : 'bg-[#FF7D33]'} text-black text-xs font-bold px-2 py-1 rounded`}>
                  वैदिक पद्धति
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`${darkMode ? 'bg-teal-400' : 'bg-[#FF7D33]'} text-black text-xs font-semibold px-2.5 py-0.5 rounded`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`flex justify-between items-center p-2 mt-4 ${darkMode ? 'bg-black' : 'bg-white'} rounded-lg`}>
                  <span className={`${darkMode ? 'text-white' : 'text-black'}`}>आचार्य पं. हर्षित व्यास</span>
                  <span className={`${darkMode ? 'text-teal-400' : 'text-[#FF7D33]'} font-bold`}>विशेषज्ञ</span>
                </div>
                <div className="pt-4">
                  <button className={`w-full ${darkMode ? 'bg-teal-400' : 'bg-[#FF7D33]'} text-black font-bold py-2 mb-2 rounded`} onClick={handleBookpuja}>
                    Book Puja
                  </button>
                  <button className={`w-full ${darkMode ? 'bg-teal-400' : 'bg-[#FF7D33]'} text-black font-bold py-2 rounded`} onClick={handleExplorePuja}>
                    Explore Puja
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>

          <h1 className="flex justify-center py-6 pt-8">
            <span className={`${darkMode ? 'bg-teal-500' : 'bg-[#FF7D33]'} text-black py-2 px-4 rounded-md`}>
              <Link to="/services">Explore More Puja</Link>
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
