import React from "react";
import { motion } from "framer-motion";
import { drobDown } from "../animation";

const Navbar = ({ isDark }) => {
  return (
    <motion.nav
      className={`${
        isDark ? "bg-[#1d1c1b] text-white" : "bg-white text-black"
      }  flex
    justify-center `}
      {...drobDown}
    >
      <div className="">
        <button className="p-3 hover:underline">Home</button>
        <button className="p-3 hover:underline">Projects</button>
        <button className="p-3 hover:underline">contact</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
