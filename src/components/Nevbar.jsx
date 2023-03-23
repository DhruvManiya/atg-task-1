import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Nevbar = () => {
  return (
    <nav className=" fixed h-[4.5rem] top-0 left-0 right-0 w-full flex justify-between items-center px-[4.5rem]">
      <img src="./logo.PNG" className="h-[2.5rem] w-auto" />
      <div>
        <SearchIcon className="text-[#7A7A7A]" />
        <input type="text" placeholder="Search for your favorite group in ATG" className="font-[900] w-[20rem] outline-none tracking-wide" />
      </div>
      <div className="font-[1000] tracking-[0.04rem]">
        <span> Create account.</span> <span className=" text-button_bg">It's free</span><ArrowDropDownIcon />
      </div>
    </nav>
  );
};

export default Nevbar;
