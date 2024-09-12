import React from "react";

const Cantact = ({isDark}) => {
  return (
    <div className={`h-[100vh] flex justify-center items-center ${isDark ? "bg-[#1d1c1b] text-white" : "bg-white text-black" }`}>
      <div>
        <div>
          <label>Email</label>
          <br />
          <input className=" border-2"/>
        </div>

        <div>
          <label>Message</label>
          <br />
          <textarea className="border-2"/>
        </div>
      </div>
    </div>
  );
};

export default Cantact;
