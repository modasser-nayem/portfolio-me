import React from "react";
// icons
import {
   FaGithub,
   FaLinkedinIn,
   FaFacebookF,
   FaPhoneAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// image
import aboutImage from "../../../public/nayem.png";
// countUp
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../utils/variants";
import { Link } from "react-scroll";

const About = () => {
   const [ref, inView] = useInView({
      threshold: 0.5,
   });
   return (
      <section
         id="about"
         className="section"
         ref={ref}
      >
         <div className="container mx-auto">
            <div className="h-screen flex flex-col gap-10 lg:gap-20 lg:flex-row lg:items-center">
               {/* img */}
               {/* bg-about bg-contain bg-no-repeat  mix-blend-lighten bg-top */}
               <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex items-center justify-center h-[640px] w-full"
               >
                  <img
                     className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-4 border-accent"
                     src={aboutImage}
                     alt="ali modasser nayem"
                  />
               </motion.div>

               {/* text */}
               <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1"
               >
                  <h2 className="h2 text-accent ">About me.</h2>
                  {/* <h3 className="h3 mb-4">
                     I'm a FullStack Web Developer with over 2 years of
                     experience.
                  </h3> */}
                  <p className="pb-6 ">
                     I am an accomplished Full-Stack (MERN) web application
                     developer. I am a hard worker and a quick learner. I always
                     try to learn new things to build up my professional skills.
                     I can adjust to any new technology within a very short
                     time. I develop quality responsive websites, clean user
                     interfaces, and rich interactive web apps. Passionate with
                     Html, CSS, Tailwind, Javascript, React, Node, Express, and
                     MongoDB.
                  </p>
                  {/* status */}
                  <div className="flex flex-col md:items-end gap-5 md:flex-row">
                     <div className="text-xl md:py-5">
                        <p className="flex items-center gap-2">
                           <FaPhoneAlt /> +8801816090766
                        </p>
                        <p className="flex items-center gap-2">
                           <HiOutlineMail /> mdalimodassernayem@gmail.com
                        </p>
                     </div>
                     <div className="text-3xl text-white flex items-center gap-6 max-w-max mb-8">
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
                     </div>
                  </div>
                  {/* <div className="flex gap-6 lg:gap-10 mb-12">
                     <div className="">
                        <div className="text-[40px] font-tertiary text-gradient mb-2">
                           {inView ? (
                              <CountUp
                                 start={0}
                                 end={2}
                                 duration={3}
                              />
                           ) : null}
                           <div className="font-primary text-sm tracking-[2px]">
                              Years of <br /> Experience
                           </div>
                        </div>
                     </div>
                     <div className="">
                        <div className="text-[40px] font-tertiary text-gradient mb-2">
                           {inView ? (
                              <CountUp
                                 start={0}
                                 end={50}
                                 duration={3}
                              />
                           ) : null}
                           +
                           <div className="font-primary text-sm tracking-[2px]">
                              Project <br /> Completed
                           </div>
                        </div>
                     </div>

                     <div className="">
                        <div className="text-[40px] font-tertiary text-gradient mb-2">
                           {inView ? (
                              <CountUp
                                 start={0}
                                 end={25}
                                 duration={3}
                              />
                           ) : null}
                           +
                           <div className="font-primary text-sm tracking-[2px]">
                              Satisfied <br /> Clients
                           </div>
                        </div>
                     </div>
                  </div> */}
                  <div className="flex gap-8 items-center">
                     <button className="btn btn-sm md:btn-lg">
                        Download CV
                     </button>
                     <Link
                        to="portfolio"
                        className="text-gradient btn-link"
                        smooth={true}
                        spy={true}
                        duration={500}
                     >
                        My Portfolio
                     </Link>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default About;
