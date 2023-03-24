import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FollowButton from "../ui/followButton";
const RecamendadeGroups = ({joinGroup}) => {
  return (
    <div className=" self-start w-[30%] md:block hidden">
      <div className="flex items-center border-b-[1px]">
        <LocationOnIcon className="text-[#7A7A7A]" />
        <input
          type="search"
          placeholder="Enter Your Location"
          className="font-[400] w-[100%] outline-none tracking-wide p-4"
        />
      </div>
      <div className="text-[#7A7A7A] flex my-12">
        <ErrorOutlineIcon />
        <p className="ml-2">Your location will help us serve better and extend a personalised experience.</p>
      </div>
      {joinGroup ? <div>
        <div className="flex gap-4 font-[600]">
        <ThumbUpOffAltIcon />
        <p>RECOMMENDED GROUPS</p>
        </div>
        <ul className="my-8">
          <li className="flex justify-between items-center my-6">
            <div className="flex justify-center items-center lg:gap-4 gap-2">
              <img src="./fdp1.jpg" alt="" className="h-[2.25rem] w-[2.25rem] rounded-full object-cover" />
              <h3 className="font-[500] lg:text-[1.15rem] text-[1rem]">Leisure</h3>
            </div>
            <FollowButton />
          </li>
          <li className="flex justify-between items-center my-6">
            <div className="flex justify-center items-center lg:gap-4 gap-2">
              <img src="./fdp2.jpg" alt="" className="h-[2.25rem] w-[2.25rem] rounded-full object-cover" />
              <h3 className="font-[500] lg:text-[1.15rem] text-[1rem]">MBA</h3>
            </div>
            <FollowButton />
          </li>
          <li className="flex justify-between items-center my-6">
            <div className="flex justify-center items-center lg:gap-4 gap-2">
              <img src="./fdp3.jpg" alt="" className="h-[2.25rem] w-[2.25rem] rounded-full object-cover" />
              <h3 className="font-[500] lg:text-[1.15rem] text-[1rem]">Philosophy</h3>
            </div>
            <FollowButton />
          </li>
          <li className="flex justify-between items-center my-6">
            <div className="flex justify-center items-center lg:gap-4 gap-2">
              <img src="./fdp4.jpg" alt="" className="h-[2.25rem] w-[2.25rem] rounded-full object-cover" />
              <h3 className="font-[500] lg:text-[1.15rem] text-[1rem]">Activism</h3>
            </div>
            <FollowButton />
          </li>
        </ul>
      </div> : <></>}
    </div>
  );
};

export default RecamendadeGroups;
