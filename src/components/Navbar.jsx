import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-center"
      initial={{ y: -80 ,opacity:0 }}
      animate={{ y: 0,opacity:1 }}
      transition={{ duration: 0.5 }}
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
