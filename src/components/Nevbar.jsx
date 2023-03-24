import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ModalContext from "../context/ModalContext";
const Nevbar = () => {
  const { setIsOpen } = useContext(ModalContext);
  const [joinGroup, setJoinGroup] = useState(false);
  return (
    <>
      <nav className=" fixed h-[4.5rem] top-0 left-0 right-0 w-full md:flex hidden justify-between items-center lg:px-[4.5rem] px-[1rem] z-50 bg-primary border-b-[1px]">
        <img src="./logo.PNG" className="h-[2.5rem] w-auto" alt="logo" />
        <div>
          <SearchIcon className="text-[#7A7A7A]" />
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="font-[400] w-[20rem] outline-none tracking-wide p-4"
          />
        </div>
        {sessionStorage.length === 0 ? (
          <div
            className="font-[800] tracking-[0.04rem] cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <span> Create account.</span>{" "}
            <span className=" text-button_bg">It's free</span>
            <ArrowDropDownIcon />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4">
            <img
              src="./fdp4.jpg"
              alt=""
              className="h-[2.25rem] w-[2.25rem] rounded-full object-cover"
            />
            <h3 className="font-[600] text-[1.15rem]">
              {sessionStorage.getItem("firstName")}{" "}
              {sessionStorage.getItem("lastName")}
            </h3>
            <ArrowDropDownIcon />
          </div>
        )}
      </nav>
      <nav className=" absolute h-[4.5rem] top-0 left-0 right-0 w-full flex md:hidden justify-between items-center lg:px-[4.5rem] px-[1rem] z-50 ">
        <div>
          <ArrowBackIcon className=" text-primary" />
        </div>
        <div
          onClick={() => {
            sessionStorage.length === 0
              ? setIsOpen(true)
              : setJoinGroup(!joinGroup);
          }}
        >
          {!joinGroup ? (
            <button className="text-[0.9rem] border-primary border-[1px] text-primary py-1 px-3 rounded-md">
              Join Group
            </button>
          ) : (
            <button className="text-[0.9rem] border-primary border-[1px] text-primary py-1 px-3 rounded-md">
              Leave Group
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nevbar;
