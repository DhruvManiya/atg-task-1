import React, { useContext, useState } from "react";
import DropDown from "../ui/DropDown";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  count,
  ArticalCount,
  EducationCount,
  MeetupCount,
  JobCount,
} from "../posts/posts.js";
import PostToShow from "../components/PostToShow";
import postToShowContext from "../context/postToShowContext";
import RecamendadeGroups from "../components/RecamendadeGroups";
import ModalContext from "../context/ModalContext";
const GroupCE = () => {
  const { status, setStatus } = useContext(postToShowContext);
  const { setIsOpen } = useContext(ModalContext);
  const [joinGroup, setJoinGroup] = useState(false);
  const [showList, setShowList] = useState(false);
  return (
    <main className="md:mt-[4.5rem] mt-0">
      <section>
        <div className="bg1 md:h-[35rem] sm:h-[25rem] h-[20rem] bg-cover bg-center relative">
          <div className=" absolute inset-0 bg-[rgba(0,0,0,0.5)] md:pt-[23.5rem] sm:pt-[16rem] pt-[13.5rem] md:pl-[10rem] sm:pl-[5rem] pl-[2rem] z-10 text-primary">
            <h1 className="md:text-[3rem] sm:text-[2.5rem] text-[1.5rem] font-[900]">
              Computer Engineering
            </h1>
            <p className="md:text-[1.25rem] sm:text-[1.1rem] text-[1rem]">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
      </section>
      <section className="md:flex hidden sticky top-[4.5rem] bg-primary justify-between items-center  2xl:mx-[15rem] xl:mx-[12rem] lg:mx-[7rem] mx-[2rem] mt-8 pt-2 border-b-[1px] pb-[0.4rem]">
        <div>
          <span
            className={` py-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "All post"
                ? "border-[#232323] 2xl:p-4 pl-2 pr-4"
                : "border-0 px-0"
            } cursor-pointer transition-all`}
            onClick={() => setStatus("All post")}
          >
            All post{" "}
            <span
              className={`${
                status === "All post" ? "opacity-100" : "opacity-0"
              }`}
            >
              ({count})
            </span>
          </span>
          <span
            className={` py-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "Article"
                ? "border-[#232323] 2xl:p-4 pl-2 pr-4"
                : "border-0 px-0"
            } cursor-pointer transition-all`}
            onClick={() => setStatus("Article")}
          >
            Article{" "}
            <span
              className={`${
                status === "Article" ? "opacity-100" : "opacity-0"
              }`}
            >
              ({ArticalCount})
            </span>
          </span>
          <span
            className={` py-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "Meetup"
                ? "border-[#232323] 2xl:p-4 pl-2 pr-4"
                : "border-0 px-0"
            } cursor-pointer transition-all`}
            onClick={() => setStatus("Meetup")}
          >
            Event{" "}
            <span
              className={`${status === "Meetup" ? "opacity-100" : "opacity-0"}`}
            >
              ({MeetupCount})
            </span>
          </span>
          <span
            className={` py-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "Education"
                ? "border-[#232323] 2xl:p-4 pl-2 pr-4"
                : "border-0 px-0"
            } cursor-pointer transition-all`}
            onClick={() => setStatus("Education")}
          >
            Education{" "}
            <span
              className={`${
                status === "Education" ? "opacity-100" : "opacity-0"
              }`}
            >
              ({EducationCount})
            </span>
          </span>
          <span
            className={` py-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "Job"
                ? "border-[#232323] 2xl:p-4 pl-2 pr-4"
                : "border-0 px-0"
            } cursor-pointer transition-all`}
            onClick={() => setStatus("Job")}
          >
            Job{" "}
            <span
              className={`${status === "Job" ? "opacity-100" : "opacity-0"}`}
            >
              ({JobCount})
            </span>
          </span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <DropDown name="Write a post" />
          <div
            onClick={() => {
              sessionStorage.length === 0
                ? setIsOpen(true)
                : setJoinGroup(!joinGroup);
            }}
          >
            {!joinGroup ? (
              <>
                <div className=" bg-button_bg rounded-[0.25rem] text-[#fff] lg:px-4 px-3 py-2 cursor-pointer">
                  <GroupAddIcon className="lg:mr-3 mr-2" />
                  Join Group
                </div>
              </>
            ) : (
              <div className=" rounded-[0.25rem] text-[#6A6A6B] lg:px-4 px-3 py-2 cursor-pointer border-[1px] border-[#6A6A6B]">
                <ExitToAppIcon className="lg:mr-3 mr-2" />
                Leave Group
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="flex md:hidden sticky top-0 justify-between items-center px-[2rem] z-[1000000] bg-primary pt-10 border-b-[1px] pb-[0.4rem]">
        <h1>
          Posts (
          {(status === "Job" && JobCount) ||
            (status === "Education" && EducationCount) ||
            (status === "Meetup" && MeetupCount) ||
            (status === "Article" && ArticalCount) ||
            (status === "All post" && count)}
          )
        </h1>
        <div
          className="flex justify-center items-center"
          onClick={() => setShowList(!showList)}
        >
          <h3>Fillter :</h3>
          <div className="flex justify-center items-center">
            <p className="ml-1">
              {(status === "Job" && "Job") ||
                (status === "Education" && "Education") ||
                (status === "Meetup" && "Event") ||
                (status === "Article" && "Article") ||
                (status === "All post" && "All")}
            </p>
            <div>
              <ArrowDropDownIcon />
            </div>
            {showList && (
              <ul className=" absolute w-[10rem] bg-primary -translate-x-[2.5rem] translate-y-[6rem] mt-2 flex flex-col items-center justify-center rounded-md shadow-xl border-[1px]">
                <li
                  className="w-full h-8 cursor-pointer hover:bg-gray-300 py-1 pl-4"
                  onClick={() => setStatus("All post")}
                >
                  All
                </li>
                <li
                  className="w-full h-8 cursor-pointer hover:bg-gray-300 py-1 pl-4"
                  onClick={() => setStatus("Article")}
                >
                  Article
                </li>
                <li
                  className="w-full h-8 cursor-pointer hover:bg-gray-300 py-1 pl-4"
                  onClick={() => setStatus("Meetup")}
                >
                  Event
                </li>
                <li
                  className="w-full h-8 cursor-pointer hover:bg-gray-300 py-1 pl-4"
                  onClick={() => setStatus("Education")}
                >
                  Education
                </li>
                <li
                  className="w-full h-8 cursor-pointer hover:bg-gray-300 py-1 pl-4"
                  onClick={() => setStatus("Job")}
                >
                  Job
                </li>
              </ul>
            )}
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center  2xl:mx-[15rem] xl:mx-[12rem] lg:mx-[7rem] sm:mx-[2rem] m-0 mt-10 pb-[0.4rem]">
        <PostToShow />
        <RecamendadeGroups joinGroup={joinGroup} />
      </section>

      <div className=" fixed shadow-md h-[4rem] w-[4rem] bottom-[1.5rem] right-[1.5rem] bg-gradient-to-tr rounded-full from-g_from to-g_to flex justify-center items-center z-[10] md:hidden text-[#fff] cursor-pointer">
        <ModeEditIcon />
      </div>
    </main>
  );
};

export default GroupCE;
