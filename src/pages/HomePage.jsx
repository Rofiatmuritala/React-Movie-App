import React from "react";
import Popular from "../components/Popular";
import Toprated from "../components/Toprated";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <div className="bg-blue-800">
      <Hero />
      <Popular />
      <Toprated />
    </div>
  );
}

export default HomePage;
