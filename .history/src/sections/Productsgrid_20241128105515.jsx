import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import export from '/export.js'
import AOS from "aos";
import "aos/dist/aos.css";

export const products = [
  {
    img: earbud,
    category: "Earphones",
    name: "Smart Earbuds",
    price: "$45.98",
  },
  {
    img: speakers,
    category: "Speakers",
    name: "Bluetooth Speakers",
    price: "$192.23",
  },
  {
    img: watch,
    category: "Smart Watch",
    name: "Smart Watch",
    price: "$12.35",
  },
  {
    img: pendrive,
    category: "Accessories",
    name: "Pendrive",
    price: "$11.98",
  },
  {
    img: laptop,
    category: "Computers Accessories",
    name: "Asus Tuff F15",
    price: "$897.28",
  },
  {
    img: headset,
    category: "Music & Videos",
    name: "Wireless Headset",
    price: "$67.88",
  },
  {
    img: mouse,
    category: "Computer Accessories",
    name: "Wireless Mouse",
    price: "$32.78",
  },
  {
    img: camera,
    category: "Films & Gaming",
    name: "DSLR 360 view",
    price: "$145.28",
  },
];


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
    className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10">
      {
        products.map((item, index) => (
          <div id="product-box" key={index} className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative">
                <img src={item.img} alt="" />
                
                  
                </div>
        ))
        
      }
    </div>
  </div>
)
};

export default Productsgrid;
