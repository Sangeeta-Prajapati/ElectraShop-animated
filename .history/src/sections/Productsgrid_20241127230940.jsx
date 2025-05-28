import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";



import AOS from "aos";
import "aos/dist/aos.css";

const Productsgrid = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);


  return (
  <div id="products" className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 
  flex flex-col justify-center items-center gap-4">
    <h1 data-aos="zoom-in" data-aos-delay="100"
    className="text-themepurple text-xl font-semibold">BrowseCollections</h1>
    <h1 data-aos="zoom-in" data-aos-delay="200" 
    className="text-black font-semibold text-[42px] leading-[50px] text-center">Trending Products</h1>
    <div data-aos="zoom-in" data-aos-delay="300"
    className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10"></div>
  </div>
)
};

export default Productsgrid;
