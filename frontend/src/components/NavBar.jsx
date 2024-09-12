import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-8">
      <ul className="flex space-x-4">
        <li className="hover:text-yellow-400 cursor-pointer">About</li>
        <li className="hover:text-yellow-400 cursor-pointer">Resume</li>
        <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
