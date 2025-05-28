import React from 'react'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import cat4 from '../assets/cat4.jpg'
import cat5 from '../assets/cat5.jpg'

import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);


  return (
    <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px]
    flex lg:flex-row flex-col justify-center items-center gap-20'>
      
    </div>
  )
}

export default Category


