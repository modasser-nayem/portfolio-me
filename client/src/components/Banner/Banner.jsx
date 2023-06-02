import React from "react";
// images
// import BannerImage from "../../assets/avatar.svg";
import BannerImage from "../../assets/banner_nayme.png";
// icons
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../utils/variants";
import { Link } from "react-scroll";

const Banner = () => {
   return (
      <section
         id="home"
         className="mt-[15vh] lg:mt-[22vh] min-h-[85vh] lg:min-h-[78vh] flex items-center"
      >
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
               <div className="flex-1 text-center lg:text-left">
                  <motion.h1
                     variants={fadeIn("up", 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                     className="text-5xl lg:text-7xl font-bold leading-[0.8]"
                  >
                     Ali <span>Modasser Nayem</span>
                  </motion.h1>
                  <motion.div
                     variants={fadeIn("up", 0.3)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                     className="mb-6 mt-2 text-4xl lg:text-5xl font-secondary font-semibold uppercase leading-1"
                  >
                     <span className="mr-3 text-white">I am a</span>
                     <TypeAnimation
                        sequence={["Web Developer", 2000, "Web Designer", 2000]}
                        speed={50}
                        className="text-accent"
                        wrapper="span"
                        repeat={Infinity}
                     />
                  </motion.div>
                  <motion.p
                     variants={fadeIn("up", 0.4)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                     className="mb-8 max-w-lg mx-auto lg:mx-0"
                  >
                     I work with Fullstack development. So I can work with
                     Frontend and Backend of any website.
                  </motion.p>
                  <motion.div
                     variants={fadeIn("up", 0.5)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                     className="max-w-max mx-auto lg:mx-0 flex items-center gap-6 mb-12"
                  >
                     <Link
                        to="contact"
                        className="flex items-center btn-sm btn md:btn-lg"
                        smooth={true}
                        spy={true}
                        duration={500}
                     >
                        Contact me
                     </Link>
                     <Link
                        to="portfolio"
                        className="text-gradient btn-link"
                        smooth={true}
                        spy={true}
                        duration={500}
                     >
                        My Portfolio
                     </Link>
                  </motion.div>
                  <motion.div
                     variants={fadeIn("up", 0.6)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                     className="text-3xl text-white flex gap-6  max-w-max mx-auto lg:mx-0"
                  >
                     <a
                        className="hover:scale-125 duration-200 hover:text-blue-600"
                        href="https://web.facebook.com/alimodassernayem"
                     >
                        <FaFacebookF />
                     </a>
                     <a
                        className="hover:scale-125 duration-200 hover:text-blue-600"
                        href="https://www.linkedin.com/in/alimodassernayem"
                     >
                        <FaLinkedinIn />
                     </a>
                     <a
                        className="hover:scale-125 duration-200 hover:text-blue-600"
                        href="https://github.com/modasser-nayem"
                     >
                        <FaGithub />
                     </a>
                  </motion.div>
               </div>
               <motion.div
                  variants={fadeIn("down", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  className="hidden lg:flex flex-1 justify-end max-w-xs lg:max-w-lg mix-blend-hard-light"
               >
                  <img
                     className="border-4 border-accent shadow-[-10px_10px_#B809C3]"
                     src={BannerImage}
                     alt="ali modasser nayem"
                  />
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Banner;
