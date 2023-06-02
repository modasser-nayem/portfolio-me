import React, { useEffect, useRef, useState } from "react";
// images
import Logo from "../../../public/nayem.svg";

// icon
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

// component
import Navbar from "../Navbar/Navbar";

const Header = () => {
   const clickRef = useRef(null);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      document.addEventListener("click", clickOutside, true);
      return () => document.addEventListener("click", clickOutside, true);
   }, []);

   const clickOutside = (e) => {
      if (!clickRef.current.contains(e.target)) {
         setIsOpen(false);
      } else if (e.target.className === "nav-link") {
         setIsOpen(false);
      }
   };
   return (
      <header className="fixed w-full z-40 bg-black/20 h-[80px] backdrop-blur-2xl text-white/70 flex items-center">
         <div className="container mx-auto">
            <div
               ref={clickRef}
               className="flex lg:items-center justify-between gap-10"
            >
               {/* logo */}
               <a
                  className=""
                  href="#3"
               >
                  <h2 className="h3 text-4xl text-gradient italic pr-2 pt-2">
                     Nayem
                  </h2>
               </a>
               {/* nav items */}
               <div
                  className={`flex flex-col lg:flex-row items-center gap-10 absolute lg:static left-0 w-full lg:w-auto -z-50 lg:z-auto py-10 lg:py-0 transition-all duration-500 ease-linear lg:transition-none ${
                     isOpen ? "bg-black/90 top-20" : " -top-[900px]"
                  }`}
               >
                  <div>
                     <Navbar />
                  </div>
                  <button className="btn btn-sm">Download CV</button>
               </div>
               {/* responsive button */}
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden text-3xl"
               >
                  {isOpen ? <AiOutlineClose /> : <FaBars />}
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;

{
   /* <header className="fixed w-full z-50 bg-black/20 lg:h-[96px] backdrop-blur-2xl py-10 px-5 text-white/50 flex items-center">
<div className="container mx-auto">
   <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* logo */
}
//       <a href="#3">
//          <img
//             src={Logo}
//             alt="logo"
//          />
//       </a>
//       <div>
//          <Navbar />
//       </div>
//       <button className="btn btn-sm">Download CV</button>
//    </div>
// </div>
// </header> */}
