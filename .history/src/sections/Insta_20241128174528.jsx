import React,{useEffect} from 'react'
import insta1 from '../assets/insta-1.jpg'
import insta2 from '../assets/insta-2.jpg'
import insta3 from '../assets/insta-3.jpg'
import insta4 from '../assets/insta-4.jpg'
import insta5 from '../assets/insta-5.jpg'
import insta6 from '../assets/insta-6.jpg'

import AOS from "aos";
import "aos/dist/aos.css";

const Insta = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay="100"
      className='text-themepurple text-xl font-semibold capitalize'>Our Instagram Shop</h1> 
      
    </div> 
  )
}

export default Insta
