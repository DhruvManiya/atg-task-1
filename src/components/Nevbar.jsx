import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModalContext from "../context/ModalContext";
const Nevbar = () => {
  const { setIsOpen } = useContext(ModalContext);
  console.log(sessionStorage.getItem('items'))
  console.log(sessionStorage.getItem('items'))
  return (
    <>
      <nav className=" fixed h-[4.5rem] top-0 left-0 right-0 w-full flex justify-between items-center px-[4.5rem] z-50 bg-primary">
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
            <h3 className="font-[600] text-[1.15rem]">{sessionStorage.getItem('firstName')}</h3>
            <ArrowDropDownIcon />
          </div>
        )}
      </nav>
    </>
  );
};

export default Nevbar;
