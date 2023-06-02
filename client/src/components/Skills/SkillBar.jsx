import React from "react";

const SkillBar = ({ skill }) => {
   const { name, value } = skill;
   return (
      <div className="mb-8">
         <h3 className="text-3xl tracking-[3px] font-semibold flex justify-between pl-1 text-purple-300">
            {name}{" "}
            <span className="text-gradient animate-skill text-2xl font-secondary">
               {value}%
            </span>
         </h3>
         <div className="bg-gray-300 w-full rounded-full overflow-hidden mt-2">
            <div
               style={{ width: `${value}%` }}
               className={`animate-skill bg-gradient-to-r from-fuchsia-600 via-teal-600 to-purple-600 p-1.5 rounded-full`}
            ></div>
         </div>
      </div>
   );
};

export default SkillBar;
