import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ModalContext from "../context/ModalContext";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
const Modal = () => {
  const [signin, setSignin] = useState(false);
  const { isOpen, setIsOpen } = useContext(ModalContext);
  console.log(isOpen);
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-[0.65] backdrop-blur-[2px] flex flex-col justify-center items-center z-[100]">
        <div
          className=" bg-primary translate-x-[1600%] mb-2 rounded-full p-1 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </div>
        <div className="w-[50%]">{!signin ? <Signin onClose={() => setSignin(true)} /> : <Login onClose={() => setSignin(false)} />}</div>
      </div>
    </>
  );
};

export default Modal;
