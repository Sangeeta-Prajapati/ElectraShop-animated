import React, { useEffect } from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.png";
import pay1 from "../assets/pay-1.png";
import pay2 from "../assets/pay-2.png";
import pay3 from "../assets/pay-3.png";
import pay4 from "../assets/pay-4.png";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-center items-center"
    >
      {/* 1st box start here */}
      <div data-aos="zoom-in" data-aos-delay="100" className="w-full bg-themeyellow lg:px-20 px-10 py-8 grid 
      lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10">
        <img src={client1} alt="client1" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        
        <img src={client2} alt="client2" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        <img src={client3} alt="client3" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        <img src={client4} alt="client4" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        <img src={client5} alt="client5" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />
        <img src={client6} alt="client6" className="w-[130px] opacity-70 cursor-pointer hover:opacity-100" />

      </div>
      {/* 1st box end here */}

      {/* 2nd box start here */}
      <div></div>
      {/* 2nd box end here}
{/* 3rd box start  */}
      <div></div>
      {/* 3rd box end here */}
    </div>
  );
};

export default Footer;
