import React from "react";
import Header from "../Header/Header";
import DBoardDrawar from "./DBoardDrawar";

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-l from-secondary to-accent text-left h-screen w-full bg-cover bg-center">
      {/* <img src="https://victoriaseducationalservices.com/wp-content/uploads/2020/06/berlin-germany-1.jpg" alt="" className="h-screen w-full object-cover absolute mix-blend-overlay" /> */}
      <Header />

      <DBoardDrawar />
    </div>
  );
};

export default Dashboard;
