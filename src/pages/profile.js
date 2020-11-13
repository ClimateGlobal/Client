import React from "react";
import Footer from "../components/footer";
import Jumbo from "../components/jumbo";
import Navigation from "../components/navbar";

const ProfileApp = () => {
  return (
    <div className="bg-home">
      <Navigation />
      <Jumbo />
      <div className="wrapper"></div>
      <Footer />
    </div>
  );
};
export default ProfileApp;
