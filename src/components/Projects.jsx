import React from "react";
import resumeBuilder from "../assets/resume-builder.png";
import codepen1 from "../assets/codepen1.png";
import { motion } from "framer-motion";
import { scaleSmallToBig } from "../animation";

const Projects = ({ isDark }) => {
  return (
    <section
      className={`h-screen px-4 lg:px-10 2xl:px-20 ${
        isDark ? "bg-[#101010] text-white" : "bg-[#edf2f8] text-black"
      }`}
      id="projects"
    >
      <h1>Projcts</h1>
      <div className="flex items-center flex-wrap gap-16 justify-center h-full">
        <motion.div
          className="h-[30.5rem] w-[30.5rem] z-10 border shadow-md border-[#535253]  hover:shadow-slate-800 p-4 rounded-2xl bg-[#1e1d1c]"
          {...scaleSmallToBig}
        >
          <img
            className="object-cover"
            src={resumeBuilder}
            alt="resume-builder"
          />
          <h1 className="text-2xl font-semibold text-center text-[#f2f2f2] py-2 ">
            Resume Builder
          </h1>
          <p className="text-[#97978b]">
            This projects is a real-timeresumebuilderapplication enabling
            usersto effortlessly edit resumes.It includes a feature to download
            resumes in multiple formats, such as PDF, JPG, SVG, and PNG.
          </p>
        </motion.div>
        <motion.div
          className="h-[30.5rem] w-[30.5rem] z-10 border shadow-md  p-4 rounded-2xl hover:shadow-slate-800 border-[#535253] bg-[#1e1d1c]"
          {...scaleSmallToBig}
        >
          <img className="object-cover" src={codepen1} alt="resume-builder" />
          <h1 className="text-2xl font-semibold text-center pb-2 text-[#f2f2f2] py-2">
            Codepen
          </h1>
          <p className="text-[#97978b]">
            Developed an online editor for a front-end development platform that
            mirrors the functionalities of CodePen.io. It allows users to write
            HTML, CSS, and JavaScript. Additionally, it features immediate
            display of the code results..
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
