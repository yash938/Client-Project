/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import TitleImg from "../../assets/Images/TempImages/title.png";
import CR1 from "../../assets/Images/Certificates/p1.jpeg";
import CR2 from "../../assets/Images/Certificates/p4.jpeg";
import CR3 from "../../assets/Images/Certificates/p5.jpeg"; 
import userContext from "../../Context/userContext";
function About() {
  const {darkMode} = useContext(userContext);
  return (
    <div className={`w-[100vw] min-h-screen ${darkMode ? 'bg-gradient-radial-high text-white' : 'bg-gradient-flow-for-about text-black'}`}>
      <div className="w-full min-h-[90vh] relative top-[10vh] max-sm:block flex gap-6 justify-center pt-4 max-sm:px-2">
        <img
          className="w-auto max-sm:pb-6 h-[10%] max-sm:h-[70%] rounded-md"
          src={TitleImg}
          alt=""
        />
        <span className="w-[50vw] h-auto">
          <h1 className="text-2xl font-semibold underline">
            पंडित हर्षित व्यास
          </h1>{" "}
          <br />
          <p>
            पंडित हर्षित व्यास, त्रिवेणी शनि मंदिर, उज्जैन में कर्मकांड विशेषज्ञ
            के रूप में 7 से अधिक वर्षों का गहन अनुभव रखते हैं। यजुर्वेद में
            शिक्षित पंडित हर्षित जी ने कर्मकांड की विधाओं में अपनी गहरी रुचि और
            निपुणता को परिवार की परंपरा से प्राप्त किया है। वे नवग्रह पूजा,
            कालसर्प दोष निवारण, पितृ दोष पूजा और अन्य शांति यज्ञों में विशेष रूप
            से दक्ष हैं। उनकी पूजा विधियों का उद्देश्य भक्तों के जीवन में संतुलन
            और समृद्धि लाना है, जिसमें सभी दोषों और बाधाओं का निवारण कर
            सकारात्मक ऊर्जा को प्रवाहित करना शामिल है। पंडित हर्षित जी के
            अनुसार, सच्ची श्रद्धा और विश्वास से की गई पूजा के परिणाम सदैव
            उत्कृष्ट होते हैं। उज्जैन में शिप्रा नदी के पावन किनारे और त्रिवेणी
            शनि मंदिर की आध्यात्मिक ऊर्जा के बीच किए गए कर्मकांडों का विशेष
            महत्व है, जो भक्तों की समस्त इच्छाओं को पूर्णता की ओर ले जाते हैं।
            पंडित हर्षित व्यास का मानना है कि उनकी प्राचीन वेदिक ज्ञान और अनुभव
            का उद्देश्य यजमानों के जीवन में सुख-शांति और आंतरिक संतुलन स्थापित
            करना है, ताकि हर भक्त अपने जीवन में आने वाली समस्याओं का समाधान
            प्राप्त कर सके।
          </p>
          <p className="pt-4 font-bold">
            शासकीय संस्कृत महाविधायल से उपाधि प्राप्त पंडित हर्षित गुरुजी से आज
            अपनी कुंडली दिखाये ओर कालसर्प दोष के बारे मे अधिक जाने व उसका निवारण
            पूरे विधि विधान से उज्जैन मे करवाए, अपनी पूजा के लिए कॉल करे
            9981546195 पर ।
          </p>
        </span>
      </div>

      <div class="achievementBox w-full h-[40vh]  flex justify-around items-center">
        <div class="achievementItem text-center">
          <div class="icon text-4xl">😊</div>
          <div class="value text-3xl">1500</div>
          <div class="label">खुश यजमान</div>
        </div>
        <div class="achievementItem text-center">
          <div class="icon text-4xl">🔥</div>
          <div class="value text-3xl">4000</div>
          <div class="label">सम्प्र पूजा</div>
        </div>
        <div class="achievementItem text-center">
          <div class="icon text-4xl">🎧</div>
          <div class="value text-3xl">24/7</div>
          <div class="label">उपलब्धता</div>
        </div>
        <div class="achievementItem text-center ">
          <div class="icon text-4xl">👥</div>
          <div class="value text-3xl">5+</div>
          <div class="label">सहयोगी</div>
        </div>
      </div>

      <div className="certificates w-full min-h-screen px-4 py-2">
        <h1 className=" flex justify-start px-24 pb-8">
          <span className="text-2xl font-semibold underline">प्रमाणपत्र</span>
        </h1>
        <div className="flex justify-evenly max-sm:block">
          <span>
            <p className="flex justify-center">
              <img
                className="w-auto h-60 flex justify-center"
                src={CR1}
                alt=""
              />
            </p>
            <p className="text-white pt-1 flex justify-center">
              शुक्ल यजुर्वेद प्रमाणपत्र <br /> (Dgreee)
            </p>
          </span>
          <br />
          <span>
            <p className="flex justify-center">
              <img className="w-auto h-60" src={CR2} alt="" />
            </p>
            <p className=" pt-1 flex justify-center">
              शुक्ल यजुर्वेद अंक प्रमाणपत्र <br /> (marksheet)
            </p>
          </span>
          <br />
          <span>
            <p className="flex justify-center">
              <img className="w-auto h-60" src={CR3} alt="" />
            </p>
            <p className=" pt-1 flex justify-center">प्रमाणपत्र</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About; 