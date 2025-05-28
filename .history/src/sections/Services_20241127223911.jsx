import React, {useEffect} from 'react'

import payment from '../assets/payment.jpg'
import shipping from '../assets/shipping.jpg'
import return from '../assets/return.jpg'
import gift from '../assets/gift.jpg'


import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);


  return (
    <div className='w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4 *:grid-cols-1 justify-center gap-10'>
      <div data-aos="zoom-in" data-aos-delay="100" 
      className='flex flex-col justify-center items-center gap-2'>
        <img src={shipping} alt="shipping" className='mb-[20px] w-[60px]' />
        <h1>Worldwide Shipping</h1>
        <h1 className='text-xl text-black font-semibold'></h1>
      </div>
    </div>
  )
}

export default Services
