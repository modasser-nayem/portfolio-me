import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../utils/variants";
import { Link } from "react-scroll";

// services
const servicesData = [
   {
      _id: "1",
      name: "Web Design",
      description:
         "Qualified web designs and attractive effects which catches visitor's eye. Responsive Design which will be working almost all browsers and screens, Mobile, TaB, PC etc",
      link: "Learn more",
   },
   {
      _id: "2",
      name: "Frontend Development",
      description:
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis accusantium esse exercitationem nihil corrupti error? Iste eveniet vitae pariatur dolores?",
      link: "Learn more",
   },
   {
      _id: "3",
      name: "Backend Development",
      description:
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis accusantium esse exercitationem nihil corrupti error? Iste eveniet vitae pariatur dolores?",
      link: "Learn more",
   },
   {
      _id: "4",
      name: "Web bug Fixing",
      description:
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis accusantium esse exercitationem nihil corrupti error? Iste eveniet vitae pariatur dolores?",
      link: "Learn more",
   },
];

const Services = () => {
   return (
      <section
         id="services"
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
               What I do
               <span></span>
            </motion.h2>
            <div className="flex flex-col lg:flex-row">
               {/* text & image */}
               <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 mb-12 lg:mb-0 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten"
               >
                  {/* <h2 className="h2 text-accent mb-6">What I Do.</h2> */}
                  <h3 className="h3 max-w-[455px] mb-16">
                     I'm a FullStack Web Developer with over 2 years of
                     experience.
                  </h3>
                  <Link
                     to="portfolio"
                     className="btn btn-sm py-3"
                     smooth={true}
                     spy={true}
                     duration={500}
                  >
                     See My Work
                  </Link>
               </motion.div>
               {/* services */}
               <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1"
               >
                  {/* services list */}
                  {servicesData.map((service) => (
                     <div
                        key={service._id}
                        className="border-b border-white/20 h-36 mb-9 flex"
                     >
                        <div className="max-w-[476px]">
                           <h4 className="text-xl tracking-wider font-primary font-semibold mb-6">
                              {service.name}
                           </h4>
                           <p className="font-secondary leading-tight">
                              {service.description}
                           </p>
                        </div>
                        <div className="flex flex-col flex-1 items-end">
                           <a
                              href="#1"
                              className="btn w-9 h-9 mb-10 flex items-center justify-center"
                           >
                              <BsArrowUpRight />
                           </a>
                           <a
                              href="#1"
                              className="text-gradient text-sm"
                           >
                              {service.link}
                           </a>
                        </div>
                     </div>
                  ))}
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Services;
