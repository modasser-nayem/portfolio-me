import React from "react";
// icon
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../utils/variants";

const Contact = () => {
   return (
      <section
         id="contact"
         className="py-16 mb-16 lg:section"
      >
         <div className="container mx-auto">
            <motion.h2
               variants={fadeIn("down", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className="title"
            >
               Contact me
               <span></span>
            </motion.h2>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               {/* text */}
               <motion.div
                  variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 justify-start items-center"
               >
                  <div>
                     <h4 className="text-xl text-accent font-medium uppercase mb-2 tracking-wide">
                        Get in touch
                     </h4>
                     <h2 className="uppercase text-5xl lg:text-8xl leading-none">
                        Let's work <br /> together!
                     </h2>
                     <div className="text-xl">
                        <p className="flex items-center gap-2">
                           <FaPhoneAlt /> +8801816090766
                        </p>
                        <p className="flex items-center gap-2">
                           <HiOutlineMail /> mdalimodassernayem@gmail.com
                        </p>
                     </div>
                  </div>
               </motion.div>
               {/* form */}
               <motion.form
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 w-full md:w-[400px] flex flex-col items-start gap-6 pb-12 p-6 border rounded-2xl"
               >
                  <input
                     className="bg-transparent border-b focus:border-accent w-full py-3 placeholder:text-white outline-none transition-all"
                     type="text"
                     placeholder="Your Name"
                  />
                  <input
                     className="bg-transparent border-b focus:border-accent w-full py-3 placeholder:text-white outline-none transition-all"
                     type="text"
                     placeholder="Your Email"
                  />
                  <textarea
                     rows="4"
                     className="resize-none bg-transparent border-b focus:border-accent w-full py-3 placeholder:text-white outline-none transition-all"
                     placeholder="Write your message"
                  ></textarea>
                  <button className="btn btn-lg">Send message</button>
               </motion.form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
