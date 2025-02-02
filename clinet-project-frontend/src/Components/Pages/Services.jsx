/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import img1 from "../../assets/Images/TempImages/image.png";
import img2 from "../../assets/Images/TempImages/img2.png";
import img3 from "../../assets/Images/TempImages/img3.png";
import img4 from "../../assets/Images/TempImages/mangle.png";
import img5 from "../../assets/Images/TempImages/shani.png";
import img6 from "../../assets/Images/TempImages/Vastu.png";
import userContext from "../../Context/userContext";

function Services() {
  const {darkMode} = useContext(userContext); 
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
    {
      img: img4,
      title: "मंगल दोष पूजा : त्रिवेणी शनि मंदिर उज्जैन",
      description: "मंगल दोष निवारण के लिए यह पूजा कराएं और वैवाहिक जीवन में सुख प्राप्त करें...।",
      tags: ["मंगल दोष निवारण", "सुख", "शांति"],
    },
    {
      img: img5,
      title: "शनि दोष पूजा : त्रिवेणी शनि मंदिर उज्जैन",
      description: "शनि की अनुकम्पा पाने और दोषों का निवारण करने हेतु शनि पूजा का आयोजन करें...।",
      tags: ["शनि दोष निवारण", "समृद्धि", "शांति"],
    },
    {
      img: img6,
      title: "वास्तु दोष निवारण पूजा : त्रिवेणी शनि मंदिर उज्जैन",
      description: "वास्तु दोष निवारण हेतु विशेष पूजा कराएं और घर में सकारात्मक ऊर्जा प्राप्त करें...।",
      tags: ["वास्तु दोष निवारण", "सकारात्मकता", "शांति"],
    },
  ];

  return (
    <div className={`w-full min-h-[90vh] ${darkMode ? 'bg-gradient-radial' : 'bg-gradient-flow-for-service'} pt-[10vh]`}>
      <div className="w-full">
        <h1 className={`text-2xl sm:text-3xl ${darkMode ? 'text-teal-400' : 'text-[#FF7D33]'} flex justify-center p-4`}>
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
                  <button className={`w-full ${darkMode ? 'bg-teal-400' : 'bg-[#FF7D33]'} text-black font-bold py-2 mb-2 rounded`}>
                    Book Puja
                  </button>
                  <button className={`w-full ${darkMode ? 'bg-teal-400' : 'bg-[#FF7D33]'} text-black font-bold py-2 rounded`}>
                    Explore Puja
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default Services;
