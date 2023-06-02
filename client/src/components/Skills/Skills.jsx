import React, { useState } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../utils/variants";
import SkillBar from "./SkillBar";

const Skills = () => {
   const skillsData = [
      { _id: "1", type: "frontend", name: "HTML", value: 82 },
      { _id: "2", type: "frontend", name: "CSS", value: 86 },
      { _id: "9", type: "frontend", name: "Bootstrap", value: 80 },
      { _id: "4", type: "frontend", name: "Javascript", value: 70 },
      { _id: "3", type: "frontend", name: "Tailwind CSS", value: 90 },
      { _id: "8", type: "tools", name: "Git Github", value: 87 },
      { _id: "5", type: "frontend", name: "React JS", value: 81 },
      { _id: "6", type: "backend", name: "Node JS", value: 75 },
      { _id: "13", type: "backend", name: "Express JS", value: 80 },
      { _id: "10", type: "backend", name: "Mongodb", value: 78 },
      { _id: "7", type: "tools", name: "VS Code", value: 90 },
      { _id: "14", type: "backend", name: "Ejs", value: 70 },
      { _id: "11", type: "programming", name: "C Programming", value: 67 },
      { _id: "12", type: "tools", name: "Ubuntu", value: 50 },
   ];
   const [skills, setSkills] = useState(skillsData);
   const handleClick = (text, event) => {
      if (text === "all") {
         setSkills(skillsData);
      } else {
         const newData = skillsData.filter((skill) => skill.type === text);
         setSkills(newData);
      }
   };
   return (
      <section
         id="skills"
         className="py-16 lg:section"
      >
         <div className="container mx-auto">
            <motion.h2
               variants={fadeIn("down", 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className="title"
            >
               My Skills
               <span></span>
            </motion.h2>
            <div className="flex flex-wrap gap-7 items-center justify-center">
               <button
                  onClick={(e) => handleClick("all", e)}
                  className="btn-outline focus:bg-accent"
               >
                  All
               </button>
               <button
                  onClick={(e) => handleClick("frontend", e)}
                  className="btn-outline focus:bg-accent"
               >
                  Frontend
               </button>
               <button
                  onClick={(e) => handleClick("backend", e)}
                  className="btn-outline focus:bg-accent"
               >
                  Backend
               </button>
               <button
                  onClick={(e) => handleClick("tools", e)}
                  className="btn-outline focus:bg-accent"
               >
                  Tools
               </button>
            </div>
            <div className="md:max-w-[700px] mx-auto mt-16">
               {skills.map((skill) => (
                  <SkillBar
                     key={skill._id}
                     skill={skill}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Skills;
