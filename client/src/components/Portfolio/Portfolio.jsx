import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../utils/variants";
// images
import img1 from "../../assets/portfolio-img1.png";
import img2 from "../../assets/portfolio-img2.png";
import img3 from "../../assets/portfolio-img3.png";

const Work = () => {
   return (
      <section
         id="portfolio"
         className="section"
      >
         <div className="container mx-auto">
            <motion.h2
               variants={fadeIn("down", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className="title"
            >
               Portfolio
               <span></span>
            </motion.h2>
            <div className="flex flex-col lg:flex-row gap-10">
               <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex flex-col gap-12"
               >
                  {/* text */}
                  <div>
                     <h2 className="h2 leading-tight text-accent">
                        My Latest <br />
                        Work.
                     </h2>
                     <p className="max-w-sm mb-16">
                        I have done 15 projects in total. Some of them are
                        fullstack projects. And some frontend projects. Below
                        are all the projects.
                     </p>
                     <button className="btn btn-sm">View all projects</button>
                  </div>
                  {/* image1 */}
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                     {/* overlay */}
                     <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
                     {/* img */}
                     <img
                        className="group-hover:scale-125 transition-all duration-300"
                        src={img1}
                        alt="project 1"
                     />
                     {/* pretitle */}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                        <span className="text-gradient">UI/UX Design</span>
                     </div>
                     {/* title */}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-40">
                        <span className="text-3xl text-white">
                           Project Title
                        </span>
                     </div>
                  </div>
               </motion.div>
               <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex flex-col gap-10"
               >
                  {/* image2 */}
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                     {/* overlay */}
                     <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
                     {/* img */}
                     <img
                        className="group-hover:scale-125 transition-all duration-300"
                        src={img2}
                        alt="project 2"
                     />
                     {/* pretitle */}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                        <span className="text-gradient">UI/UX Design</span>
                     </div>
                     {/* title */}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-40">
                        <span className="text-3xl text-white">
                           Project Title
                        </span>
                     </div>
                  </div>
                  {/* image3 */}
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                     {/* overlay */}
                     <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>
                     {/* img */}
                     <img
                        className="group-hover:scale-125 transition-all duration-300"
                        src={img3}
                        alt="project 3"
                     />
                     {/* pretitle */}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40">
                        <span className="text-gradient">UI/UX Design</span>
                     </div>
                     {/* title */}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-40">
                        <span className="text-3xl text-white">
                           Project Title
                        </span>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Work;
