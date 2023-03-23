import React, { useContext, useState } from "react";
import DropDown from "../ui/DropDown";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { count, ArticalCount, EducationCount, MeetupCount, JobCount } from "../posts/posts.js";
import PostToShow from "../components/PostToShow";
import postToShowContext from "../context/postToShowContext";
import RecamendadeGroups from "../components/RecamendadeGroups";
import ModalContext from "../context/ModalContext";
const GroupCE = () => {
  const { status, setStatus } = useContext(postToShowContext);
  const {setIsOpen} = useContext(ModalContext);
  const [joinGroup, setJoinGroup] = useState(false);
  return (
    <main className="mt-[4.5rem]">
      <section>
        <div className="bg1 h-[35rem] bg-cover bg-center relative">
          <div className=" absolute inset-0 bg-[rgba(0,0,0,0.5)] pt-[23.5rem] pl-[10rem] z-10 text-primary">
            <h1 className="text-[3rem] font-[900]">Computer Engineering</h1>
            <p className="text-[1.25rem]">
              142,765 Computer Engineers follow this
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center  mx-[15rem] mt-10 border-b-[1px] pb-[0.4rem]">
        <div>
          <span
            className={`p-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "All post" ? "border-[#232323]" : "border-0"
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
            className={`p-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "Article" ? "border-[#232323]" : "border-0"
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
            className={`p-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "Meetup" ? "border-[#232323]" : "border-0"
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
            className={`p-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "Education" ? "border-[#232323]" : "border-0"
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
            className={`p-4 font-[500] text-[1.05rem] border-b-2 ${
              status === "Job" ? "border-[#232323]" : "border-0"
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
          <div onClick={() => {sessionStorage.length ===0 ? setIsOpen(true) : setJoinGroup(!joinGroup)}}>
            {!joinGroup ? (
              <div className=" bg-button_bg rounded-[0.25rem] text-[#fff] px-4 py-2 cursor-pointer">
                <GroupAddIcon className="mr-3" />
                Join Group
              </div>
            ) : (
              <div className=" rounded-[0.25rem] text-[#6A6A6B] px-4 py-2 cursor-pointer border-[1px] border-[#6A6A6B]">
                <ExitToAppIcon className="mr-3" />
                Leave Group
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center  mx-[15rem] mt-10 pb-[0.4rem]">
        <PostToShow />
        <RecamendadeGroups joinGroup={joinGroup} />
      </section>
    </main>
  );
};

export default GroupCE;
