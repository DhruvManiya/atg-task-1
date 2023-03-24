import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const DropDown = ({ name }) => {
  return (
    <div className=" bg-dropdown_bg lg:px-4 px-3 py-2 cursor-pointer rounded-[0.25rem]">
      {name ? (
        <div>
          {name}
          <ArrowDropDownIcon />
        </div>
      ) : (
        <ArrowDropDownIcon />
      )}
    </div>
  );
};

export default DropDown;
