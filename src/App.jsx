import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import HeroCard from "./components/HeroCard/HeroCard.jsx";
import BgVideo from "./assets/earth-bg.mp4";
import wave from "./assets/wave Gif.gif";
import Footer5 from "./components/Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your pages
import Tech from "./Pages/Tech"; // Assuming the path is correct
import D3 from "./Pages/D3"; // Assuming the path is correct

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []); // Add an empty dependency array to run only once

  return (
    <Router>
      <div className="">
        <div className="h-[700px] relative">
          
          <Navbar />
          <Routes>
          <Route path="/about" element={<Hero />} />
          </Routes>
          <div className="pt-16"> {/* Adjust the padding based on your navbar height */}
          <Routes>
          <Route path="/tech" element={<Tech />} />
          <Route path="/d3" element={<D3 />} />
          </Routes>
          </div>
        </div>
       
        {/* Set up routing for the pages */}
        
        {/* <Footer /> */}
        <Footer5 />
      </div>
    </Router>
  );
};

export default App;
