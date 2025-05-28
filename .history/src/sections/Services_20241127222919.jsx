import React, {useEffect} from 'react'
import payment from '../assets/payment.png'

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
    <div>
      services
    </div>
  )
}

export default Services
