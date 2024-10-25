import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="Logo" className="w-10" />
              <span>TCJ-SPACE</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <Link to="/About">About</Link> {/* Update to Link component */}
                </li>
                <li>
                  <Link to="/Tech">Technology</Link> {/* Update to Link component */}
                </li>
                <li>
                <a 
                    href="http://localhost:5174/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Solar System
                  </a>
                </li>
                <li>
                  <Link to="/D3">Infographics</Link> {/* Update to Link component */}
                </li>
              </ul>
            </div>
            <div>
              <button className="text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
