import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import FAQ from "./common/coreComponent/FAQ";
import { FAQ_LIST } from "./common/enums/core";
import Footer from "./common/coreComponent/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="mx-20 my-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <FAQ faqList={FAQ_LIST} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
