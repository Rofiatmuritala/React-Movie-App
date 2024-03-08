import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-gray-300">
        <ul className="flex gap-4">
          <li>Movies</li>
          <li>TV Shows</li>
          <li>People</li>
          <li>More</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
