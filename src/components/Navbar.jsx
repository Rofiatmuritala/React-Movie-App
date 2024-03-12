import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-300">
      <ul className="flex gap-4">
        <li>
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li>
          <Link to={"/popular"}>Popular</Link>{" "}
        </li>
        <li>
          <Link to={"/toprated"}>Top Rated</Link>{" "}
        </li>

        <li>
          <Link to={"/search"}>Search</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
