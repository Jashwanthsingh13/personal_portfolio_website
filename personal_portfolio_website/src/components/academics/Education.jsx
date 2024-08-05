import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Education = () => {
  const educations = [
    {
      title: "BTech in Computer Science and Engineering",
      subTitle:
        "Lovely Professional University, Phagwara, Punjab ( 2021 - 2025 )",
      result: "CGPA: 7.51/10",
      des: "The rigorous training at Lovely Professional University equips students with the skills and knowledge to thrive in diverse sectors of the economy, cultural fields, and advanced technology.",
    },
    {
      title: "Senior Secondary Education in Science",
      subTitle: "Winner's junior college, warangal, Telangana ( 2018 - 2020 )",
      result: "Percentage: 90/100",
      des: "Higher education is tertiary education that leads to the award of an academic degree. The comprehensive curriculum at Winner's junior college prepares students for academic and professional excellence in various fields.",
    },
    {
      title: "Secondary Education",
      subTitle: "Sharada high school, warangal, telangana ( 2017 - 2018 )",
      result: "CGPA: 9.3/10",
      des: "Secondary education, also referred to as post-primary education, covers two distinct phases within the classification of education. It serves as a crucial foundation for students as they prepare to enter higher levels of learning or vocational training.",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="mt-6 lgl:mt-20 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {educations.map((education, index) => (
            <Card
              key={index}
              title={education.title}
              subTitle={education.subTitle}
              result={education.result}
              des={education.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
