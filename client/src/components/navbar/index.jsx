import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-black/30">
      <div className="flex justify-normal items-center ">
        <div>
          <img src="/assets/logo.png" className="w-[6rem]" alt="logo" />
        </div>
        <div className="text-2xl font-[500]">Alpha Market</div>
      </div>
      <div className="text-[1.1rem] font-[500] flex justify-normal items-center gap-[2rem]">
        <div className="border-b-[2px] border-transparent hover:border-black transition-all duration-500 px-[0.3rem]">
          Home
        </div>
        <div className="border-b-[2px] border-transparent hover:border-black transition-all duration-500 px-[0.3rem]">
          About
        </div>
      </div>
    </div>
  );
};

export default Navbar;
