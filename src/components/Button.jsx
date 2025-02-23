import React from "react";

const Button = ({ title = "click here" }) => {
  return (
    <>
      <div className="text-sm px-3 py-1 border-1 bg-[#09101C] border-[#A1ABBD] text-white rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300">
        <span>{title}</span>
      </div>
    </>
  );
};

export default Button;
