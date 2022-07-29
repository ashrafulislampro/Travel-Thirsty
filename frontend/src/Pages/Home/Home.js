import React from "react";
import Feature from "../../Components/ashraful.Component/feature/Feature.Com";
import Hotel from "../../Components/ashraful.Component/Hotel.Comp/Hotel.com";
import Restaurant from "../../Components/ashraful.Component/Restaurant.Comp/Restaurant.Com";
import Statistics from "../../Components/ashraful.Component/Statistics.Comp/Statistics";
import Subscribe from "../../Components/ashraful.Component/Subscribe.Comp/Subscribe.Com";
import Testimony from "../../Components/ashraful.Component/Testimony.Com/Testimony.Com";
import Tour from "../../Components/ashraful.Component/Tour.Package/Tour.Com";
import HomeHeader from "../Header/HeaderBanner/HomeHeader";
import ShortCard from "./ShortCard/ShortCard";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <ShortCard />
      <Feature />
      <Tour />
      <Statistics />
      <Hotel />
      <Testimony />
      <Restaurant />
      <Subscribe />
    </div>
  );
};

export default Home;
