import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
const Home = () => {
  const id = "1233";
  return (
    <div>
      <Header />
      <div className="home-hero-bg"></div>
      <div className="container">
        <HomeContent />
      </div>
      {/* <Link to={`/offer/${id}`}> Go to Offer </Link> */}
    </div>
  );
};
export default Home;
