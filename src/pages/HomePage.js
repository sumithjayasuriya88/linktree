import React from "react";
import HomeAboutSection from "../components/HomeAboutSection";
import HomeFeatured from "../components/HomeFeatured";
import HomeFeatures from "../components/HomeFeatures";
import HomeFooter from "../components/HomeFooter";
import HomeJoinTree from "../components/HomeJoinTree";
import HomePageHero from "../components/HomePageHero";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="homePage">
        <HomePageHero />
        <HomeAboutSection />
        <HomeFeatures />
        <HomeJoinTree />
        <HomeFeatured />
        <HomeFooter />
      </div>
    </div>
  );
}

export default HomePage;
