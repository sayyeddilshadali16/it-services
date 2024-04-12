import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
