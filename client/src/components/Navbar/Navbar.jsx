import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

// import Link
import { Link } from "react-scroll";

// navLink json
const navLinks = [
   {
      _id: "1",
      path: "home",
      name: "Home",
      icon: <BiHomeAlt />,
   },
   {
      _id: "2",
      path: "about",
      name: "About",
      icon: <BiUser />,
   },
   {
      _id: "3",
      path: "skills",
      name: "Skills",
      icon: <BsClipboardData />,
   },
   {
      _id: "4",
      path: "services",
      name: "Services",
      icon: <BsClipboardData />,
   },
   {
      _id: "5",
      path: "portfolio",
      name: "Portfolio",
      icon: <BsBriefcase />,
   },
   {
      _id: "6",
      path: "contact",
      name: "Contact",
      icon: <BsChatSquare />,
   },
];

const Nav = () => {
   return (
      <nav className="">
         <div className="">
            <div className="flex flex-col lg:flex-row items-center gap-8">
               {navLinks.map((navLink) => (
                  <Link
                     key={navLink._id}
                     to={navLink.path}
                     className="nav-link"
                     activeClass="cs-nav-active"
                     smooth={true}
                     spy={true}
                     duration={500}
                  >
                     {/* {navLink.icon} */}
                     {navLink.name}
                  </Link>
               ))}
            </div>
         </div>
      </nav>
   );
};

export default Nav;

{
   /* <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
   <div className="container mx-auto">
      <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex items-center justify-between text-2xl text-white/50">
         {navLinks.map((navLink) => (
            <Link
               key={navLink._id}
               to={navLink.path}
               className="nav-link"
               activeClass="active"
               smooth={true}
               spy={true}
            >
               {navLink.icon}
            </Link>
         ))}
      </div>
   </div>
</nav>; */
}
