import React from "react";
import { FOOTER_IMAGES } from "../enums/core";

const Footer = () => {
  return (
    <footer className="bg-black text-white my-10 w-full">
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="flex space-x-6 animate-scroll">
          {FOOTER_IMAGES.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="h-10 w-auto"
            />
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="text-center mt-15 space-y-5">
        <h2 className="text-5xl font-black pt-10">LET’S TALK!</h2>
        <a
          href="mailto:supriya.ranjan2001@gmail.com"
          className="text-lg font-medium hover:underline flex justify-center items-center space-x-2"
        >
          <span>supriya.ranjan2001@gmail.com</span>
          <img src="../../../public/assets/img/upVector.svg" alt="arrow" />
        </a>
      </div>
      <div className="flex justify-between items-center mx-20 mt-5">
        <p className="text-xs text-gray-300">© Supriya Ranjan - 2025</p>
        <div className="flex space-x-6 text-sm text-gray-300">
          <a href="#dribbble" className="hover:text-white">
            Dribbble
          </a>
          <a href="#behance" className="hover:text-white">
            Behance
          </a>
          <a href="#twitter" className="hover:text-white">
            Twitter
          </a>
          <a href="#instagram" className="hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
