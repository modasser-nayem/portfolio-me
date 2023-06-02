import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Main = () => {
   return (
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
         <Header />
         <Banner />
         <About />
         <Skills />
         <Services />
         <Portfolio />
         <Contact />
         <Footer />
      </div>
   );
};

export default Main;
