import React, { useState } from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TodayIcon from "@mui/icons-material/Today";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PostCard = ({ post }) => {
  const [showList, setShowList] = useState(false);
  return (
    <div
      className=" w-full 2xl:ml-[5rem] sm:ml-[0.5rem] m-0 sm:rounded-[0.5rem] border-[1px] shadow-md my-2"
      key={post.key}
    >
      <div>
        {post.img && (
          <img
            src={post.img}
            alt=""
            className="h-[13.75rem] w-full object-cover sm:rounded-t-[0.5rem]"
          />
        )}
      </div>
      {post.status && (
        <div className="px-6 pt-4 pb-2 font-[500] lg:text-[1rem] text-[0.9rem]">
          {post.sign} {post.status}
        </div>
      )}
      {post.header && (
        <div className=" flex justify-between items-center  px-6 py-2">
          <h1 className="lg:text-[1.5rem] text-[1.25rem] font-[700]">
            {post.header}
          </h1>
          <div onClick={() => setShowList(!showList)}>
            <div
              className={` cursor-pointer lg:p-2 rounded-md ${
                showList && "bg-gray-300"
              }`}
            >
              <MoreHorizIcon fontSize="medium" />
            </div>
            {showList && (
              <ul className=" absolute w-[10rem] bg-primary -translate-x-[8.5rem] mt-2 flex flex-col items-center justify-center rounded-md shadow-xl border-[1px]">
                <li className="w-full h-8 cursor-pointer hover:bg-gray-300 py-1 pl-4">
                  Edit
                </li>
                <li className="w-full h-8 cursor-pointer hover:bg-gray-300 py-1 pl-4">
                  Report
                </li>
                <li className="w-full h-8 cursor-pointer hover:bg-gray-300 py-1 pl-4">
                  Option-3
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
      {post.desc && (
        <p className=" text-gray-500 lg:text-[1.15rem] text-[1rem] px-6 py-2">
          {post.desc}
        </p>
      )}
      {post.com && (
        <div className="flex px-6 py-2">
          <WorkOutlineIcon className="text-[#3d3a3a]" />
          <p className=" text-[#3d3a3a] px-2">{post.com}</p>
        </div>
      )}
      {post.city && post.date && (
        <div className="flex px-6 py-2">
          <div className="flex">
            <TodayIcon className="text-[#3d3a3a]" />
            <p className=" text-[#3d3a3a] px-2">{post.date}</p>
          </div>
          <div className="flex">
            <LocationOnIcon className="text-[#3d3a3a]" />
            <p className=" text-[#3d3a3a] px-2">{post.city}</p>
          </div>
        </div>
      )}
      {post.visit && (
        <p className=" text-w_link flex justify-center items-center h-10 mx-6 my-2 border-[1px] rounded-[0.75rem] border-gray-300">
          {post.visit}
        </p>
      )}
      {post.apply && (
        <p className=" text-apply_link flex justify-center items-center h-10 mx-6 my-2 border-[1px] rounded-[0.75rem] border-gray-300">
          {post.apply}
        </p>
      )}
      <div className="flex m-6 justify-between items-center">
        <div className="flex items-center gap-4 font-[800] text-[1.05rem]">
          {post.avtar && (
            <img
              src={post.avtar}
              alt=""
              className="h-12 w-12 rounded-full object-cover"
            />
          )}
          <div>
            {post.name && (
              <p className=" text-[#3d3a3a] lg:px-2">{post.name}</p>
            )}
            {post.views && (
              <div className="flex md:hidden gap-2 text-[0.9rem]">
                <VisibilityIcon />
                <p>{post.views} views</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          {post.views && (
            <>
              <div className="md:flex hidden lg:mr-[5rem] mr-[1rem] gap-2">
                <VisibilityIcon />
                <p>{post.views} views</p>
              </div>
              <div className="lg:p-2 p-1 md:bg-gray-300 rounded-md flex justify-center items-center">
                <ShareIcon />
                <p className="md:hidden block ml-3">Share</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
