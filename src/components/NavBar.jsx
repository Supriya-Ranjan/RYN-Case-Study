import React from "react";
import NavLinks from "../common/coreComponent/NavLinks";

function NavBar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-black border-b border-gray-800">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <img
          src="../../public/assets/img/logo.svg"
          alt="Logo"
          className="w-12"
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <NavLinks path="/" title="Home" />
        <NavLinks path="/about" title="About" />
        <NavLinks path="/projects" title="Projects" />
        <NavLinks path="/contact" title="Contact" />
      </nav>

      {/* Hire Me Button */}
      <div>
        <button className="text-white border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
          HIRE ME
        </button>
      </div>
    </div>
  );
}

export default NavBar;
