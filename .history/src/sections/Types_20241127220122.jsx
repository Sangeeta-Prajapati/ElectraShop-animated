import React, {useEffect} from 'react'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'



import AOS from "aos";
import "aos/dist/aos.css";

const Types = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  
  return (
    <div>
      types
    </div>
  )
}

export default Types
