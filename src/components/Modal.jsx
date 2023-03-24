import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ModalContext from "../context/ModalContext";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
const Modal = () => {
  const [signin, setSignin] = useState(false);
  const { isOpen, setIsOpen } = useContext(ModalContext);
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-[0.65] backdrop-blur-[2px] flex flex-col justify-center items-center z-[100]">
        <div
          className=" md:block hidden bg-primary xl:translate-x-[1600%] md:translate-x-[1150%] translate-x-[1100%] md:translate-y-0 -translate-y-[450%] mb-2 rounded-full p-1 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </div>
        <div className=" md:hidden block relative w-full">
          <div className="xl:w-[66rem] md:w-[47rem] w-full md:relative absolute md:translate-y-0 -translate-y-[25%]">
            {!signin ? (
              <Signin onClose={() => setSignin(true)} />
            ) : (
              <Login onClose={() => setSignin(false)} />
            )}
          </div>
        </div>
          <div className="xl:w-[66rem] md:w-[47rem] hidden md:block ">
            {!signin ? (
              <Signin onClose={() => setSignin(true)} />
            ) : (
              <Login onClose={() => setSignin(false)} />
            )}
          </div>
        </div>
    </>
  );
};

export default Modal;
