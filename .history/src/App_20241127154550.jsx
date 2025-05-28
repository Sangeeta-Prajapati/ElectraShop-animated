import Banner from "./sections/Banner";
import Category from "./sections/Category";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Productsgrid from "./sections/Productsgrid";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import Types from "./sections/Types";

export default function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Category/>
    <Types/>
    <Services/>
    <Productsgrid/>
    <Banner/>
    <Reviews/>
    </>
  )
}