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
      className=" w-full ml-[5rem] rounded-[0.5rem] border-[1px] shadow-md my-2"
      key={post.key}
    >
      <div>
        {post.img && (
          <img
            src={post.img}
            alt=""
            className="h-[13.75rem] w-full object-cover rounded-t-[0.5rem]"
          />
        )}
      </div>
      {post.status && (
        <div className="px-6 pt-4 pb-2 font-[500]">
          {post.sign} {post.status}
        </div>
      )}
      {post.header && (
        <div className="flex justify-between items-center  px-6 py-2">
          <h1 className="text-[1.5rem] font-[700]">{post.header}</h1>
          <div className=" relative" onClick={() => setShowList(!showList)}>
            <div
              className={` cursor-pointer p-2 rounded-md ${
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
        <p className=" text-gray-500 text-[1.15rem] px-6 py-2">{post.desc}</p>
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
          {post.name && <p className=" text-[#3d3a3a] px-2">{post.name}</p>}
        </div>
        <div className="flex items-center">
          {post.views && (
            <>
              <div className="flex mr-[5rem] gap-2">
                <VisibilityIcon />
                <p>{post.views} views</p>
              </div>
              <div className="p-2 bg-gray-300 rounded-md">
                <ShareIcon />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
